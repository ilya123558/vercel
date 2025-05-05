'use client'
import { CoinSide } from '@/entities/general/types/general'
import { useGame } from '@/shared/hooks/useGame'
import { setIsChoiceVisible, setIsCompleted, setIsStarted, useAppDispatch, useAppSelector } from '@/views/store'
import lottie, { AnimationItem } from 'lottie-web'
import React, { useEffect, useRef, useState } from 'react'
import './CoinAnimation.scss'

interface CoinFlipAnimationProps {
	animationData: any
	containerId?: string
	onAnimationComplete?: () => void
}

const CoinFlipAnimation: React.FC<CoinFlipAnimationProps> = ({
	animationData,
	containerId = 'coin-animation-container',
	onAnimationComplete,
}) => {
	const dispatch = useAppDispatch()
	const [animationState, setAnimationState] = useState<'start-animation' | 'end-animation' | null>(null)
	const { isCompleted, isStarted, isChoiceVisible } = useAppSelector(state => state.main.coinAnimation)

	const { handleStartGame, coinSide } = useGame()

	const containerRef = useRef<HTMLDivElement>(null)
	const animationRef = useRef<AnimationItem | null>(null)
	const currentSegmentRef = useRef<'idle' | 'intro' | 'rotation' | 'final'>('idle')
	const shouldPlayFinalRef = useRef(false)
	const isRotationLooping = useRef(false)

	useEffect(() => {
		if (!containerRef.current) return

		const anim = lottie.loadAnimation({
			container: containerRef.current,
			renderer: 'svg',
			loop: false,
			autoplay: false,
			animationData,
		})

		animationRef.current = anim

		const handleComplete = () => {
			const segment = currentSegmentRef.current
			console.log(`Завершён сегмент: ${segment}`)

			if (segment === 'intro') {
				currentSegmentRef.current = 'rotation'
				isRotationLooping.current = true
				dispatch(setIsChoiceVisible(true))
				playRotationCycle()
			} else if (segment === 'rotation') {
				if (shouldPlayFinalRef.current) {
					// пользователь сделал выбор — пора играть финал
					shouldPlayFinalRef.current = false
					currentSegmentRef.current = 'final'
					// Если орел [43, 69], решка [70, 96]
					anim.playSegments(coinSide === CoinSide.HEADS ? [43, 69] : [70, 96], true)
					// anim.playSegments([70, 96], true)
				} else if (isRotationLooping.current) {
					playRotationCycle()
				}
			} else if (segment === 'final') {
				dispatch(setIsCompleted(true))
				if (onAnimationComplete) onAnimationComplete()
			}
		}

		anim.addEventListener('complete', handleComplete)

		return () => {
			anim.removeEventListener('complete', handleComplete)
			anim.destroy()
		}
	}, [animationData, onAnimationComplete])

	const playRotationCycle = () => {
		if (!animationRef.current) return
		currentSegmentRef.current = 'rotation'
		animationRef.current.playSegments([24, 42], true)
	}

	const startAnimation = () => {
		if(!animationRef.current || !(currentSegmentRef.current === 'final' || !isStarted)) return
		if(handleStartGame()) {
			setAnimationState('start-animation')
			dispatch(setIsStarted(true))
			dispatch(setIsCompleted(false))
			dispatch(setIsChoiceVisible(false))
			isRotationLooping.current = false
			shouldPlayFinalRef.current = false
			currentSegmentRef.current = 'intro'
			animationRef.current.playSegments([0, 23], true)
		}
	}

	const chooseSide = (side: CoinSide.HEADS | CoinSide.TAILS) => {
		if (!animationRef.current) return
		setAnimationState('end-animation')

		isRotationLooping.current = false

		if (currentSegmentRef.current === 'rotation') {
			// дожидаемся конца текущего цикла и потом играем финал
			shouldPlayFinalRef.current = true
		} else {
			// если по какой-то причине не в цикле — сразу финал
			currentSegmentRef.current = 'final'
			// Если орел [43, 69], решка [70, 96]
			animationRef.current.playSegments(side === CoinSide.HEADS ? [43, 69] : [70, 96], true)
			// animationRef.current.playSegments([70, 96], true)
		}
	}

	useEffect(() => {
		if(coinSide) {
			chooseSide(coinSide)
		}
	}, [coinSide])

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				scale: animationState !== 'start-animation' ? 1.9 : 1
			}}
			className={'transition-all duration-1000'}
		>
			<div
				id={containerId}
				ref={containerRef}
				style={{ width: '100%', height: '70vw' }}
				onClick={startAnimation}
			/>
		</div>
	)
}

const CoinAnimation: React.FC<{ animationData: any }> = ({
	animationData,
}) => {
	const handleAnimationComplete = () => {
		console.log('Вся анимация закончена!')
	}

	return (
		<CoinFlipAnimation
			animationData={animationData}
			onAnimationComplete={handleAnimationComplete}
		/>
	)
}

export default CoinAnimation
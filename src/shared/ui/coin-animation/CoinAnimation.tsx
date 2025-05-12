'use client'
import { CoinSide } from '@/entities/general/types/general'
import { useGame } from '@/shared/hooks/useGame'
import { autoBotCountDec, completeGame, setAutoBotCount, setAutoBotToggle, setWinSide, useAppDispatch, useAppSelector } from '@/views/store'
import lottie, { AnimationItem } from 'lottie-web'
import React, { useEffect, useRef, useState } from 'react'
import './CoinAnimation.scss'
import { useNotification } from '@/shared/hooks/useNotification'

interface CoinFlipAnimationProps {
	animationData: any
	containerId?: string
	onAnimationComplete?: () => void
}

const CoinFlipAnimation = ({ animationData, containerId = 'coin-animation-container' }: CoinFlipAnimationProps) => {
	const dispatch = useAppDispatch()
	const { autoBotToggle, autoBotCount } = useAppSelector(state => state.main.autoBot)
	const user = useAppSelector(state => state.main.user)
	const { handleNotification } = useNotification()

	const [animationState, setAnimationState] = useState<'start-animation' | 'end-animation' | null>(null)
	const { handleStartGame, gameIsStarted, winSide, timeIsOver, isCompiled } = useGame()

	const containerRef = useRef<HTMLDivElement>(null)
	const animationRef = useRef<AnimationItem | null>(null)
	const currentSegmentRef = useRef<'idle' | 'intro' | 'rotation' | 'final'>('idle')
	const shouldPlayFinalRef = useRef(false)
	const isRotationLooping = useRef(false)
	const winSideRef = useRef<CoinSide | null>(null)
	const autoBotToggleRef = useRef<boolean>(false)

	const handleComplete = () => {
		const segment = currentSegmentRef.current

		if (segment === 'intro') {
			currentSegmentRef.current = 'rotation'
			isRotationLooping.current = true
			playRotationCycle()
		} 

		else if (segment === 'rotation') {
			if (shouldPlayFinalRef.current) {
				shouldPlayFinalRef.current = false
				currentSegmentRef.current = 'final'
				// Если орел [43, 69], решка [70, 96]
				animationRef.current?.playSegments(winSideRef.current === CoinSide.HEADS ? [43, 69] : [70, 96], true)
			} 
			else if (isRotationLooping.current) {
				playRotationCycle()
			}
		} 

		else if (segment === 'final') {
			dispatch(completeGame())

			if(autoBotToggleRef.current) {
				dispatch(autoBotCountDec())
			}
		}
	}
	
	const playRotationCycle = () => {
		if (!animationRef.current) return
		currentSegmentRef.current = 'rotation'
		animationRef.current.playSegments([24, 42], true)
	}

	const startAnimation = () => {
		if(!animationRef.current || !(currentSegmentRef.current === 'final' || !gameIsStarted)) return
		if(handleStartGame()) {
			setAnimationState('start-animation')
			isRotationLooping.current = false
			shouldPlayFinalRef.current = false
			currentSegmentRef.current = 'intro'
			animationRef.current.playSegments([0, 23], true)
		}
	}

	const chooseSide = () => {
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
			animationRef.current.playSegments(winSideRef.current === CoinSide.HEADS ? [43, 69] : [70, 96], true)
		}
	}

	
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

		anim.addEventListener('complete', handleComplete)

		return () => {
			anim.removeEventListener('complete', handleComplete)
			anim.destroy()
		}
	}, [animationData])

	useEffect(() => {
		winSideRef.current = winSide;
		
		if(gameIsStarted) {
			chooseSide()
		}
	}, [winSide]);

  useEffect(() => {
    if (timeIsOver) {
			currentSegmentRef.current = 'idle';
			animationRef.current?.playSegments([43, 69], true)
			setAnimationState('end-animation')
		}
  }, [timeIsOver]);

	// Если включен режим автобросков
	useEffect(() => {
		if(!user || !isCompiled) return 
		const { energyPercent, tossCount } = user

		if(autoBotToggle) {
			if(autoBotCount > 0 && energyPercent > 0 && tossCount > 0) {
				setTimeout(() => {
					autoBotToggleRef.current = true
					startAnimation()
				}, 1000)
			}
			else{
				autoBotToggleRef.current = false
				dispatch(setAutoBotToggle(false))

				if(autoBotCount <= 0) {
					handleNotification('auto-tipping is over')
					return
				}

				if(energyPercent <= 0) {
					handleNotification('energy over')
					return
				}

				if(tossCount <= 0) {
					handleNotification('throw over')
					return
				}
			}
		}
	}, [autoBotToggle, autoBotCount, user, isCompiled])

	useEffect(() => {
		if(autoBotToggle) {
			autoBotToggleRef.current = true
		}else{
			autoBotToggleRef.current = false
		}
	}, [autoBotToggle])

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				scale: animationState !== 'start-animation' ? 1 : 0.5
			}}
			className={'transition-all duration-[0.5s] relative'}
		>
			<div
				id={containerId}
				ref={containerRef}
				style={{ width: '90vh', height: '90vh' }}
				onClick={startAnimation}
				className='transition-all active:scale-95 absolute translate-y-[-45vh]'
			/>
		</div>
	)
}

const CoinAnimation = ({ animationData }: { animationData: any }) => {
	return <CoinFlipAnimation animationData={animationData} />
}

export default CoinAnimation
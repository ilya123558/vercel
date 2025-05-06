import { nextGame, resetGame, setCoinSide, startGame, setEnergyPercent, setStatusGame, setTossCount, useAppDispatch, useAppSelector, setWinSide } from "@/views/store";
import { useNotification } from "./useNotification";
import { CoinSide } from "@/entities/general/types/general";
import { useEffect, useState } from "react";
import { useTossCoinMutationTemp } from "./useTossCoinMutationTemp";
import { useTossCoinMutation } from "@/entities/users/api/users.api";

export const useGame = () => {
  const dispatch = useAppDispatch()
  const { gameIsStarted, statusGame, coinSide, winSide, countGame, isCompiled } = useAppSelector(state => state.main.game)
  const { user } = useAppSelector(state => state.main)
  
  const [tossCoin, { data: toss }] = useTossCoinMutation()
  // const [tossCoin, { data: toss }] = useTossCoinMutationTemp()
  const { handleNotification } = useNotification()

  // Следующая игра
  const handleNextGame = () => {
    if(!statusGame) {
      return
    }else{
      dispatch(nextGame())
    }
  }
  
  // Начать игру
  const handleStartGame = () => {
    if(!user) return false

    // Если закончились броски останавливаем игру
    if(user.tossCount === 0) {
      handleNotification("throw over")
      return false
    }

    // Если игра не началась, то начинаем, иначе следующая игра
    if(!gameIsStarted) {
      dispatch(startGame())
    }else{
      handleNextGame()
    }

    return true
  }

  // Проверка результата игры  
  useEffect(() => {
    if(toss) {      
      dispatch(setEnergyPercent(toss.energyPercent))
      dispatch(setTossCount(toss.tossCount))

      // Записываем выигрышную сторону
      if(toss.guessed) {
        dispatch(setWinSide(coinSide))
      }else{
        dispatch(setWinSide(coinSide === CoinSide.HEADS ? CoinSide.TAILS: CoinSide.HEADS))
      } 
    }
  }, [toss])

  // Запрос на результат игры
  useEffect(() => {
    if(gameIsStarted && coinSide) {
      tossCoin({coinSide})
    }
  }, [gameIsStarted, coinSide])

  const handleSelectVariant = (value: CoinSide) => {
    dispatch(setCoinSide(value))
  }

  return {
    gameIsStarted, 
    statusGame, 
    coinSide, 
    user,
    winSide,
    countGame, 
    isCompiled,
    handleNextGame,
    handleStartGame,
    handleSelectVariant
  }
};
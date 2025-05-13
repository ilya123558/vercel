import { nextGame, resetGame, setCoinSide, startGame, setEnergyPercent, setStatusGame, setTossCount, useAppDispatch, useAppSelector, setWinSide, setBalance } from "@/views/store";
import { useNotification } from "./useNotification";
import { CoinSide } from "@/entities/general/types/general";
import { useEffect, useState } from "react";
import { useTossCoinMutationTemp } from "./useTossCoinMutationTemp";
import { useTossCoinMutation } from "@/entities/users/api/users.api";

export const useGame = () => {
  const dispatch = useAppDispatch()
  const { gameIsStarted, statusGame, coinSide, winSide, countGame, isCompiled, timeIsOver } = useAppSelector(state => state.main.game)
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
      if(timeIsOver) return false
      handleNextGame()
    }

    return true
  }

  // Выбрать вариант
  const handleSelectVariant = (value: CoinSide) => {
    dispatch(setCoinSide(value))
  }

  // Проверка результата игры  
  useEffect(() => {
    if(toss && user) {      
      // Записываем выигрышную сторону
      if(toss.guessed) {
        dispatch(setBalance(user.balance + toss.reward))
        dispatch(setWinSide(coinSide))
      }else{
        dispatch(setBalance(user.balance + toss.reward))
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
    handleSelectVariant,
    timeIsOver
  }
};
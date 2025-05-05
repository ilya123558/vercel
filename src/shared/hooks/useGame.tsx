import { nextGame, resetGame, setCoinSide, startGame, useAppDispatch, useAppSelector } from "@/views/store";
import { useNotification } from "./useNotification";
import { CoinSide } from "@/entities/general/types/general";
import { useEffect } from "react";

export const useGame = () => {
  const dispatch = useAppDispatch()
  const { gameIsStarted, statusGame, coinSide } = useAppSelector(state => state.main.game)
  const { user } = useAppSelector(state => state.main)
  

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
    if(!user) return true

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

  const handleSelectVariant = (value: CoinSide) => {
    if(statusGame) return

    if(value === CoinSide.HEADS) {
      dispatch(setCoinSide(CoinSide.HEADS))
    }

    if(value === CoinSide.TAILS) {
      dispatch(setCoinSide(CoinSide.TAILS))
    }
  }

  return {
    gameIsStarted, 
    statusGame, 
    coinSide, 
    user,
    handleNextGame,
    handleStartGame,
    handleSelectVariant
  }
};
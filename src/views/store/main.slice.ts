import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  game: {
    gameIsStarted: boolean
    statusGame: 'win' | 'defeat' | null
    сoinSide: 'heads' | 'tails' | null
    countGame: number
  }
}

const initialState: IInitialState = {
  game: {
    gameIsStarted: false,
    statusGame: null,
    сoinSide: null,
    countGame: 1
  }
}

const mainSlice = createSlice({
  name: 'mainSlice',
  initialState: initialState,
  reducers: {
    startGame: (state) => {
      state.game.gameIsStarted = true
    },
    stopGame: (state) => {
      state.game.gameIsStarted = false
    },
    setStatusGame: (state, action: PayloadAction<IInitialState['game']['statusGame']>) => {
      state.game.statusGame = action.payload
    },
    setCoinSide: (state, action: PayloadAction<IInitialState['game']['сoinSide']>) => {
      state.game.сoinSide = action.payload
    },
    setCountGame: (state, action: PayloadAction<IInitialState['game']['countGame']>) => {
      state.game.countGame = action.payload
    },
  },
});

export const { setCoinSide, setCountGame, setStatusGame, startGame, stopGame } = mainSlice.actions;
export const mainReducer = mainSlice.reducer
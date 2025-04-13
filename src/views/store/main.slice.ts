import { CoinSide } from "@/entities/general/types/general";
import { IUser } from "@/entities/users/types/users";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  user: IUser | null;
  game: {
    gameIsStarted: boolean;
    statusGame: "win" | "defeat" | null;
    coinSide: CoinSide | null;
    countGame: number;
  };
}

const initialState: IInitialState = {
  user: null,
  game: {
    gameIsStarted: false,
    statusGame: null,
    coinSide: null,
    countGame: 1,
  },
};

const mainSlice = createSlice({
  name: "mainSlice",
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IInitialState["user"]>) => {
      state.user = action.payload;
    },

    setEnergyPercent: (state, action: PayloadAction<number>) => {
      if (state.user) {
        state.user = { ...state.user, energyPercent: action.payload };
      }
    },

    setTossCount: (state, action: PayloadAction<number>) => {
      if (state.user) {
        state.user = { ...state.user, tossCount: action.payload };
      }
    },

    startGame: (state) => {
      state.game.gameIsStarted = true;
    },
    stopGame: (state) => {
      state.game.gameIsStarted = false;
    },
    setStatusGame: (
      state,
      action: PayloadAction<IInitialState["game"]["statusGame"]>
    ) => {
      state.game.statusGame = action.payload;
    },
    setCoinSide: (
      state,
      action: PayloadAction<IInitialState["game"]["coinSide"]>
    ) => {
      state.game.coinSide = action.payload;
    },
    setCountGame: (
      state,
      action: PayloadAction<IInitialState["game"]["countGame"]>
    ) => {
      state.game.countGame = action.payload;
    },

    resetGame: (state) => {
      state.game.coinSide = null;
      state.game.countGame = 1;
      state.game.gameIsStarted = false;
      state.game.statusGame = null;
    },

    nextGame: (state) => {
      state.game.coinSide = null;
      state.game.countGame = state.game.countGame + 1;
      state.game.statusGame = null;
    },

    timeOver: (state) => {
      state.game.coinSide = null;
      state.game.statusGame = "defeat";
    },
  },
});

export const {
  setUser,
  setEnergyPercent,
  setTossCount,
  setCoinSide,
  setCountGame,
  setStatusGame,
  startGame,
  stopGame,
  resetGame,
  nextGame,
  timeOver,
} = mainSlice.actions;
export const mainReducer = mainSlice.reducer;

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
    winSide: CoinSide | null
    isCompiled: boolean
  };
  meta: {
    pumpingPoints: number
  }
}

const initialState: IInitialState = {
  // user: {
  //   id: 2,
  //   photo: "https://t.me/i/userpic/320/WDUQ8R--Rfax5N63Pj0Yhi3-7iDFRulG4HaPLkmOYRYey1-d8wOKklSmi5RQ1Dw6.svg",
  //   username: "zong_name",
  //   fullName: "Илья",
  //   dailyRewardDay: 2,
  //   claimDailyReward: false,
  //   balance: 387.5,
  //   level: 2,
  //   availableTasksCount: 1,
  //   energyPercent: 90,
  //   tossCount: 100,
  //   maxTossCount: 10,
  //   referralLink: "coin.impulsrent.ru?start=2",
  //   accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyIiwiZXhwIjoxNzQ2Mjc0MjA2fQ.Iqw6mgUISp_eoomvSavy9Zw3z0oJmmEIiwZ-Pc3nInA",
  //   refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyIiwiZXhwIjoxNzQ4ODYyNjA2fQ.ovuvAj9qP8jSyoTq5rc59H9usuNTvvDY5aeeo60fOC4"
  // },
  user: null,
  game: {
    gameIsStarted: false,
    statusGame: null,
    coinSide: null,
    countGame: 1,
    winSide: null,
    isCompiled: true
  },
  meta: {
    pumpingPoints: 30
  }
};

const mainSlice = createSlice({
  name: "mainSlice",
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IInitialState["user"]>) => {
      state.user = action.payload
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
    setWinSide: (state, action: PayloadAction<IInitialState["game"]["winSide"]>) => {
      state.game.winSide = action.payload;
    },

    setPumpingPoints: (
      state,
      action: PayloadAction<IInitialState["meta"]["pumpingPoints"]>
    ) => {
      state.meta.pumpingPoints = action.payload;
    },

    completeGame: (state) => {
      state.game.isCompiled = true

      if(state.game.winSide === state.game.coinSide) {
        state.game.statusGame = 'win'
      }else{
        state.game.statusGame = 'defeat'
      }
    },

    resetGame: (state) => {
      state.game.coinSide = null;
      state.game.countGame = 1;
      state.game.gameIsStarted = false;
      state.game.statusGame = null;
      state.game.isCompiled = true;
      state.game.winSide = null;
    },

    nextGame: (state) => {
      state.game.isCompiled = false
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
  setWinSide, 
  startGame,
  stopGame,
  resetGame,
  nextGame,
  timeOver,
  setPumpingPoints,
  completeGame
} = mainSlice.actions;
export const mainReducer = mainSlice.reducer;

import { CoinSide } from "@/entities/general/types/general";
import { IUser } from "@/entities/users/types/users";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  user: IUser | null;
  game: {
    gameIsStarted: boolean;
    timeIsOver: boolean
    statusGame: "win" | "defeat" | null;
    coinSide: CoinSide | null;
    countGame: number;
    winSide: CoinSide | null
    isCompiled: boolean
  };
  meta: {
    points: number
  }
  autoBot: {
    autoBotToggle: boolean
    autoBuyEnergyToggle: boolean
    autoBotCount: number
    autoBotTotalCount: number
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
    timeIsOver: false,
    statusGame: null,
    coinSide: null,
    countGame: 1,
    winSide: null,
    isCompiled: true
  },
  meta: {
    points: 30
  },
  autoBot: {
    autoBotToggle: false,
    autoBuyEnergyToggle: false,
    autoBotCount: 12,
    autoBotTotalCount: 30,
  }
};

const mainSlice = createSlice({
  name: "mainSlice",
  initialState: initialState,
  reducers: {
    setAutoBotToggle: (state, action: PayloadAction<IInitialState["autoBot"]['autoBotToggle']>) => {
      state.autoBot.autoBotToggle = action.payload
    },
    setAutoBuyEnergyToggle: (state, action: PayloadAction<IInitialState["autoBot"]['autoBuyEnergyToggle']>) => {
      state.autoBot.autoBuyEnergyToggle = action.payload
    },
    setAutoBotCount: (state, action: PayloadAction<IInitialState["autoBot"]['autoBotCount']>) => {
      state.autoBot.autoBotCount = action.payload
    },
    autoBotCountDec: (state) => {
      state.autoBot.autoBotCount = state.autoBot.autoBotCount - 1
    },
    
    setUser: (state, action: PayloadAction<IInitialState["user"]>) => {
      state.user = action.payload
    },

    setUserBackground: (state, action: PayloadAction<string>) => {
      if (state.user) {
        state.user.background = action.payload
      }
    },

    setEnergyPercent: (state, action: PayloadAction<number>) => {
      if (state.user) {
        state.user.energyPercent = action.payload
      }
    },

    setBalance: (state, action: PayloadAction<number>) => {
      if (state.user) {
        state.user.balance = action.payload
      }
    },

    setTossCount: (state, action: PayloadAction<number>) => {
      if (state.user) {
        state.user.tossCount = action.payload
      }
    },

    startGame: (state) => {
      state.game.gameIsStarted = true;
      state.game.timeIsOver = false;
      if(state.user) {
        state.user.energyPercent -= 1
        state.user.tossCount -= 1
      }
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
      state.game.winSide = null;
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

    setPoints: (state, action: PayloadAction<IInitialState["meta"]["points"]>) => {
      state.meta.points = action.payload;
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
      if(!state.game.coinSide && state.game.gameIsStarted) {
        if(state.user) {
          state.user.energyPercent += 1
          state.user.tossCount += 1
        }
      }

      state.game.timeIsOver = false;
      state.game.coinSide = null;
      state.game.countGame = 1;
      state.game.gameIsStarted = false;
      state.game.statusGame = null;
      state.game.isCompiled = true;
      state.game.winSide = null;
      state.autoBot.autoBotToggle = false
      state.autoBot.autoBuyEnergyToggle = false
    },

    nextGame: (state) => {
      state.game.isCompiled = false
      state.game.coinSide = null;
      state.game.countGame = state.game.countGame + 1;
      state.game.statusGame = null;
      if(state.user) {
        state.user.energyPercent -= 1
        state.user.tossCount -= 1
      }
    },

    timeOver: (state) => {
      if(state.game.timeIsOver) return;
      state.game.timeIsOver = true;
      state.game.coinSide = null;
      state.game.gameIsStarted = false;
      state.game.statusGame = null;
      state.game.isCompiled = true;
      state.game.winSide = null;
      if(state.user) {
        state.user.energyPercent += 1
        state.user.tossCount += 1
      }
    },
  },
});

export const {
  setAutoBotToggle,
  setAutoBuyEnergyToggle,
  setAutoBotCount,
  autoBotCountDec,
  setUser,
  setUserBackground,
  setEnergyPercent,
  setBalance,
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
  setPoints,
  completeGame
} = mainSlice.actions;
export const mainReducer = mainSlice.reducer;

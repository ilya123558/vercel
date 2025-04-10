import { combineReducers } from "@reduxjs/toolkit";
import { mainReducer } from "./main.slice";
import { healthApi } from "@/entities/health/api/health.api";
import { usersApi } from "@/entities/users/api/users.api";
import { customizationsApi } from "@/entities/customizations/api/customizations.api";
import { tasksApi } from "@/entities/tasks/api/tasks.api";
import { achievementsApi } from "@/entities/achievements/api/achievements.api";
import { upgradesApi } from "@/entities/upgrades/api/upgrades.api";

export const rootReducer = combineReducers({
  main: mainReducer,
  [healthApi.reducerPath]: healthApi.reducer,
  [usersApi.reducerPath]: usersApi.reducer,
  [customizationsApi.reducerPath]: customizationsApi.reducer,
  [tasksApi.reducerPath]: tasksApi.reducer,
  [achievementsApi.reducerPath]: achievementsApi.reducer,
  [upgradesApi.reducerPath]: upgradesApi.reducer,
})
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { healthApi } from './../../entities/health/api/health.api';
import { usersApi } from "@/entities/users/api/users.api";
import { customizationsApi } from "@/entities/customizations/api/customizations.api";
import { tasksApi } from "@/entities/tasks/api/tasks.api";
import { achievementsApi } from "@/entities/achievements/api/achievements.api";
import { upgradesApi } from "@/entities/upgrades/api/upgrades.api";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  .concat(usersApi.middleware)
  .concat(healthApi.middleware)
  .concat(customizationsApi.middleware)
  .concat(tasksApi.middleware)
  .concat(achievementsApi.middleware)
  .concat(upgradesApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
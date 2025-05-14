import { IPageResponse, IStatusResponse, UpgradeType } from "@/entities/general/types/general"

export type IUpgrade = {
  upgradeId: "autobot" | "level" | "winstreak" | "recovery";
  currentLevel: number;
  costToNext: number;
  totalPoints: number;
  upgradeBonus: number;
  pointsInvested: number;
  requiredPoints: number;
};

export interface IGetUpgradesResponse extends IPageResponse {
  autobotThrowsRemaining: number;
  autobotPurchaseCost: number;
  mainLevel: number;
  mainLevelWinBonus: number
  mainLevelTossCount: number
  mainLevelUpgradeCost: number
  totalPoints: number
  otherUpgrades: IUpgrade[];
}

export interface IBuyUpgradeRequest {
  upgradeId: "autobot" | "level" | "winstreak" | "recovery"
  points: number
}

export interface IBuyUpgradeResponse extends IStatusResponse {
  autobotThrowsRemaining: number;
  autobotPurchaseCost: number;
  mainLevel: number;
  otherUpgrades: IUpgrade[];
}
import { IPageResponse, IStatusResponse, UpgradeType } from "@/entities/general/types/general"

export interface IUpgrade {
  type: UpgradeType
  level: number
  upgradeCost: number
  winstreakBonus?: number
  tossCountBonus?: number
  energyRecoveryCost?: number
}

export interface IGetUpgradesResponse extends IPageResponse {
  upgrades: IUpgrade[]
}

export interface IBuyUpgradeRequest {
  upgrade_type: UpgradeType
}

export interface IBuyUpgradeResponse extends IStatusResponse {
  upgrade: IUpgrade
}
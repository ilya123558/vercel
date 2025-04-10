import { IStatusResponse } from "@/entities/general/types/general";

export interface IUpdateEnergyResponse extends IStatusResponse {
  energyPercent: number
}
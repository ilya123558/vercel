import { IStatusResponse } from "@/entities/general/types/general";

export interface IEnergyRefillInfoResponse extends IStatusResponse {
  costPerUnit: number
  energyPercent: number
}

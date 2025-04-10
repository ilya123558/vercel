import { IPageResponse } from "@/entities/general/types/general";
import { IReferralUser } from "./users";

export interface IGetReferralsResponse extends IPageResponse {
  referrals: IReferralUser[]
}
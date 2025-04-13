import { CustomizationType, IPageRequest, IPageResponse, IStatusResponse } from "@/entities/general/types/general";

export interface ICustomization {
  id: number
  type: CustomizationType
  title: string
  photo: string
  price: number
  isActive: boolean,
  isBought: boolean,
  winstreakBonus?: number
  tossCountBonus?: number
}

export interface IGetCustomizationsResponse extends IPageResponse {
  customizations: ICustomization[]
}

export interface IGetCustomizationsRequest extends IPageRequest {
  type: CustomizationType
}

export interface IBuyCustomizationRequest {
  customization_id: number
}

export interface IBuyCustomizationResponse extends IStatusResponse {
  customization: ICustomization
}

export interface IActivateCustomizationRequest {
  customization_id: number
}

export interface IActivateCustomizationResponse extends IStatusResponse {
  customization: ICustomization
}
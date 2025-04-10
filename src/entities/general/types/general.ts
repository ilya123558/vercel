// ==== Enums ====
export enum CoinSide {
  HEADS = 'heads',
  TAILS = 'tails',
}

export enum CustomizationType {
  COIN = 'coin',
  BACKGROUND = 'background',
}

export enum UpgradeType {
  LEVEL = 'level',
  WINSTREAK = 'winstreak',
  RECOVERY = 'recovery',
}


// ==== Общее ====
export interface IStatusResponse {
  success: boolean
  message?: string // Появляется при ошибке
}

export interface IPageRequest {
  page: number
  limit?: number
  q?: string
}

export interface IPageResponse extends IStatusResponse {
  page: number
  totalPages: number
}

export interface IErrorResponse {
  detail: {
    loc: (string | number)[],
    msg: string,
    type: string
  }[]
}
export interface IUser {
  id?: number
  name: string
  email: string
  phoneNumber: string
}

export interface HealthMessage {
  upTime: number
  upTimeTranslate: string
  message: string
  timestamp: number
}

export type parameterToValid = 'params' | 'query' | 'body'

export interface IVoice {
  voice_id: number
  name: Name
  description: Description
  id_lang: number
  sex: string
}

export interface Name {
  RU: string
  EN: string
}

export interface Description {
  RU: string
  EN: string
}

export interface User {
  id: string
  firstName: string
  lastName: string
  username: string
  picture: string
  email: string
}

export interface RandomUserApiResult {
  login: { uuid: string; username: string }
  name: { first: string; last: string }
  email: string
  picture: { large: string; medium: string; thumbnail: string }
}

export interface RandomUserApiResponse {
  results: RandomUserApiResult[]
}

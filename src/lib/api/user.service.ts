import { API_URLS } from './urls'
import type { RandomUserApiResponse, User } from '../models/user.model'

function mapUser(raw: RandomUserApiResponse['results'][number]): User {
  return {
    id: raw.login.uuid,
    firstName: raw.name.first,
    lastName: raw.name.last,
    username: raw.login.username,
    picture: raw.picture.medium,
    email: raw.email,
  }
}

export async function fetchUsers(results = 12): Promise<User[]> {
  const response = await fetch(`${API_URLS.users}/?results=${results}`)

  if (!response.ok) {
    throw new Error('Failed to fetch users')
  }

  const data: RandomUserApiResponse = await response.json()
  return data.results.map(mapUser)
}

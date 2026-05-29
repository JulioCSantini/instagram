import { fetchUsers } from '../api/user.service'
import type { User } from '../models/user.model'

export const userState = $state({
  users: [] as User[],
  profile: null as User | null,
  loading: false,
  error: null as string | null,
})

export async function loadUsers(count = 12) {
  userState.loading = true
  userState.error = null

  try {
    const users = await fetchUsers(count)
    userState.users = users
    userState.profile = users[0] ?? null
  } catch {
    userState.error = 'Não foi possível carregar os usuários.'
  } finally {
    userState.loading = false
  }
}

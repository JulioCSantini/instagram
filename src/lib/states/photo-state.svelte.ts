import { fetchPhotos } from '../api/photo.service'
import type { Photo } from '../models/photo.model'

export const photoState = $state({
  photos: [] as Photo[],
  loading: false,
  error: null as string | null,
})

export async function loadPhotos(page = 1, limit = 8) {
  photoState.loading = true
  photoState.error = null

  try {
    photoState.photos = await fetchPhotos(page, limit)
  } catch {
    photoState.error = 'Não foi possível carregar as fotos.'
  } finally {
    photoState.loading = false
  }
}

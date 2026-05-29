import { API_URLS } from './urls'
import type { Photo, PicsumPhotoApiResult } from '../models/photo.model'

function mapPhoto(raw: PicsumPhotoApiResult): Photo {
  return {
    id: raw.id,
    author: raw.author,
    downloadUrl: raw.download_url,
    width: raw.width,
    height: raw.height,
  }
}

export async function fetchPhotos(page = 1, limit = 8): Promise<Photo[]> {
  const response = await fetch(`${API_URLS.photos}?page=${page}&limit=${limit}`)

  if (!response.ok) {
    throw new Error('Failed to fetch photos')
  }

  const data: PicsumPhotoApiResult[] = await response.json()
  return data.map(mapPhoto)
}

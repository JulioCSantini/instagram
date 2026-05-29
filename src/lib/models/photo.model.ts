export interface Photo {
  id: string
  author: string
  downloadUrl: string
  width: number
  height: number
}

export interface PicsumPhotoApiResult {
  id: string
  author: string
  width: number
  height: number
  download_url: string
}

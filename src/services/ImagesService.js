import { AppState } from "../AppState"
import { api } from "./AxiosService"

class ImagesService {

  async getImages() {
    console.log('getting image')
    const response = await api.get('api/images')
    console.log('newImage', response.data)
    AppState.image = response.data.imgUrl
  }

}

export const imagesService = new ImagesService()
import { AppState } from "../AppState"
import { api } from "../services/AxiosService"


class WeatherService {

  async getWeather() {
    console.log('getWeather')
    const response = await api.get('api/weather')
    console.log('weather', response.data)
    AppState.weather = response.data
  }


}

export const weatherService = new WeatherService()
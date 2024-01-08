import { AppState } from "../AppState"
import { Weather } from "../models/Weather"
import { api } from "../services/AxiosService"


class WeatherService {

  async getWeather() {
    console.log('getWeather')
    const response = await api.get('api/weather')
    console.log('weather', response.data.main.temp)
    AppState.weather = new Weather(response.data)
  }


}

export const weatherService = new WeatherService()
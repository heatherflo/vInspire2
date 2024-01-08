import { api } from "../services/AxiosService"
import { AppState } from "../AppState"
import { Quote } from "../models/Quote"


class QuotesService {

  async getQuotes() {
    console.log('getting quotes')
    const response = await api.get('api/quotes')
    console.log('new quote', response.data)
    AppState.quote = new Quote(response.data)
  }

}
export const quotesService = new QuotesService()
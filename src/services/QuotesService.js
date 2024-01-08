import { api } from "../services/AxiosService"


class QuotesService {

  async getQuotes() {
    console.log('getting quotes')
    const response = await api.get('api/quotes')
    console.log('new quote', response.data)
    AppState.quotes = new Quote(response.data)
  }

}
export const quotesService = new QuotesService()
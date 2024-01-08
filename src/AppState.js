import { reactive } from 'vue'
import { Weather } from './models/Weather'


// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /** @type {Weather} */
  weather: null,
  /** @type {Image} */
  image: null,
  /**@type {Quote} */
  quote: null
})

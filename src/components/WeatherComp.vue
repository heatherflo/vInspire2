<template class="weather">
  <div v-if="state.weatherProp" class="col-12 justify-content-end">

    <button v-if="state.weatherProp.toggleTemp" class="weatherBtn" @click="changeWeather">Boise: {{
      state.weatherProp.FTemp }}° F</button>
    <button v-else class="weatherBtn" @click="changeWeather">Boise: {{
      state.weatherProp.CTemp }}° C</button>

  </div>
</template>

<script>

import { weatherService } from '../services/WeatherService';
import { AppState } from '../AppState';
import { Weather } from '../models/Weather';
import { reactive, computed, onMounted } from 'vue';


export default {
  // props: { weatherProp: { type: Weather } },
  setup() {
    const state = reactive({
      weatherProp: computed(() => AppState.weather),

    });
    onMounted(() => {
      weatherService.getWeather();

    });
    return {
      state,
      changeWeather() {
        AppState.weather.toggleTemp = !AppState.weather.toggleTemp
      }
    }
  }
}
</script>

<style>
.weatherElm {
  justify-content: end;
  display: flex;
}

.weatherBtn {
  border-radius: 20px;
  padding: 10px;
  border-style: none;
  background-color: rgba(75, 70, 70, 0.704);
  font-size: 16px;
  color: rgb(240, 229, 229)
}
</style>
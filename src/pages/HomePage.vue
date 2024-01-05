<template>
  <section class="row home">
    <div class="col-12">
      <h1>Welcome to the vInspire</h1>
      <p>{{ state.weather }}</p>
      <button @click="changeWeather">weather</button>
    </div>
  </section>
</template>

<script>
import { computed, onMounted, reactive } from 'vue';
import { weatherService } from '../services/WeatherService';
import { AppState } from '../AppState';

export default {
  setup() {
    const state = reactive({

      weather: computed(() => AppState.weather)
    })
    onMounted(() => {
      weatherService.getWeather()
    })

    return {

      state,
      changeWeather() {
        console.log('clicked')
      }
    }
  }
}
</script>

<style>
#app {
  text-align: center;
}
</style>

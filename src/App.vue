

<template>
  <section class="row" id="app">

    <router-view />
    <!-- <h1>Welcome to the vInspire</h1>
      {{ weather }}
      <button @click="changeWeather">weather</button> -->

  </section>
</template>

<!-- <script>
import { computed, onMounted } from 'vue';
import { weatherService } from './services/WeatherService';
import { AppState } from './AppState';

export default {
  setup() {
    const state = reactive({
      weather: computed(() => AppState.weather)
    })
    state,
      onMounted(() => {
        weatherService.getWeather()
      })

    return {
      changeWeather() {
        console.log('clicked')
      }
    }
  }
}
</script> -->

<style>
#app {
  text-align: center;
}
</style>
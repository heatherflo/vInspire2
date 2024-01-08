<template class="home">
  <div class="container-fluid">


    <section class="row body">
      <div class="col-12">
        <h1 class="text-light">Welcome to the vInspire</h1>
      </div>

    </section>
    <section class="row">
      <WeatherComp />

    </section>

    <section>
      <QuoteComp />
    </section>
  </div>
  <section>

  </section>
</template>

<script>

import { reactive, computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { weatherService } from '../services/WeatherService'
import { imagesService } from '../services/ImagesService'
import WeatherComp from '../components/WeatherComp.vue'
import QuoteComp from '../components/QuoteComp.vue'



export default {
  setup() {

    return {


    };
  },
  components: { WeatherComp, QuoteComp }
}

</script>

<style>
#app {
  text-align: center;
}
</style>

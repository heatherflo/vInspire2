

<template>
  <div class="container-fluid bg-image" :style="{ backgroundImage: `url(${state.image})` }">
    <main>

    </main>
    <section class="row">

      <router-view />
      <!-- HomePage -->

    </section>


  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue';
import { AppState } from './AppState';
import { imagesService } from './services/ImagesService';

export default {
  setup() {
    const state = reactive({
      image: computed(() => AppState.image)
    });
    onMounted(() => {
      imagesService.getImages()
    });
    return {
      state

    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/main.scss';

.bg-image {
  min-height: 100vh;
  background-size: cover;
}
</style>
<template>
  <div class="quote">
    <p>{{ quotesProp }}</p>

  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, ref, onMounted } from 'vue';
import { quotesService } from '../services/QuotesService'
export default {
  setup() {
    onMounted(() => {
      quotesService.getQuotes()
    });
    return {
      quotesProp: computed(() => AppState.quote)
    }
  }
};
</script>


<style lang="scss" scoped></style>
<script>
import GameBar from './components/GameBar.vue'

export default {
  name: 'App',
  components: { GameBar },
  data() {
    return {
      gameStart: false
    }
  },

  props: [],

  methods: {}
}
</script>

<template>
  <div class="container" v-if="!gameStart">
    <div class="row mt-4 h1 text-center"><div class="col">The Dial of Time</div></div>
    <div class="row mt-3 text-center">
      <div class="col">
        <button
          type="button"
          class="btn-light btn border border-dark"
          @click="gameStart = !gameStart"
        >
          Start Game
        </button>
      </div>
    </div>
  </div>

  <div class="container" v-if="gameStart">
    <GameBar></GameBar>
  </div>
</template>

<style></style>

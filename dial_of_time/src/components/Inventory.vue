<script>
// import HelloWorld from "./components/HelloWorld.vue";

import { useInventoryStore } from '../stores/inventory.js'

export default {
  name: 'InventoryCom',
  components: {},
  data() {
    return {
      openInventory: false,
      inventory: useInventoryStore()
    }
  },

  props: [],

  methods: {
    increaseItem(itemVal) {
      this.inventory.increaseItemQuantity(itemVal)
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="row text-center"><div class="col">Food</div></div>
    <div class="row text-center" v-for="item in inventory.items">
      <div class="col" v-if="item.itemType === 'food'">{{ item.itemName }}</div>
      <div class="col" v-if="item.itemType === 'food'">{{ item.quantity }}</div>
    </div>
    <div class="row text-center"><div class="col">Drink</div></div>
    <div class="row text-center" v-for="item in inventory.items">
      <div class="col" v-if="item.itemType === 'drink'">{{ item.itemName }}</div>
      <div class="col" v-if="item.itemType === 'drink'">{{ item.quantity }}</div>
    </div>

    <div class="row mt-5">
      <div class="col">
        <button type="button" class="btn btn-dark" @click="increaseItem('apple')">
          Increase Apple
        </button>
      </div>
      <div class="col">
        <button type="button" class="btn btn-dark" @click="increaseItem('pear')">
          Increase Pear
        </button>
      </div>
      <div class="col">
        <button type="button" class="btn btn-dark" @click="increaseItem('cookie')">
          Increase Cookie
        </button>
      </div>
      <div class="col">
        <button type="button" class="btn btn-dark" @click="increaseItem('water')">
          Increase Water
        </button>
      </div>
      <div class="col mt-4">
        <button type="button" class="btn btn-dark" @click="increaseItem('marshmallow')">
          Increase New item (put in argument)
        </button>
      </div>
    </div>
  </div>
</template>

<style></style>

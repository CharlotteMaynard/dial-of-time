import { defineStore } from 'pinia'

export const useInventoryStore = defineStore({
  id: 'inventoryItems',
  state: () => ({
    items: [
      {
        itemType: 'food',
        itemName: 'apple',
        quantity: 5
      },
      {
        itemType: 'food',
        itemName: 'pear',
        quantity: 3
      },
      {
        itemType: 'drink',
        itemName: 'water',
        quantity: 3
      },
      {
        itemType: 'food',
        itemName: 'cookie',
        quantity: 2
      }
    ]
  }),
  actions: {
    increaseItemQuantity(itemVal) {
      let itemID = this.items.findIndex((item) => item.itemName === itemVal)
      console.log(itemID)

      if (itemID < 0) {
        console.log('does not exist')
        this.items.push({ itemType: 'food', itemName: itemVal, quantity: 1 })
      } else {
        this.items[itemID].quantity += 1
      }
    }
  }
})

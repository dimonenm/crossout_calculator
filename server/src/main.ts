import { AC43Rapier } from './entity/weapons/rare';
import axios from 'axios'

const aC43Rapier = new AC43Rapier()
console.log(aC43Rapier.getAllScrapMetal());

async function getItem(itemIds: number[]) {

  class Item {
    name: string
    scrapMetal: number
    copper: number
    ingredients: string[]
    constructor(name: string, scrapMetal: number, copper: number, ingredients: string[]) {
      this.name = name
      this.scrapMetal = scrapMetal
      this.copper = copper
      this.ingredients = ingredients
    }
  }

  const arr: Item[] = []

  for (const itemId of itemIds) {
    await axios.get('https://crossoutdb.com/api/v1/recipe/' + itemId).then(res => {

      const name = res.data.recipe.item.name
      const scrapMetal = res.data.recipe.ingredients[0].number
      const copper = res.data.recipe.ingredients[1].number
      let ingredients: string[] = []
      ingredients.push(res.data.recipe.ingredients[2].item.name)
      ingredients.push(res.data.recipe.ingredients[3].item.name)
      const item = new Item(name, scrapMetal, copper, ingredients)
      arr.push(item)
    })
  }
  console.log(arr);
}
getItem([94, 34, 51, 7, 2, 61, 44, 4, 74, 70, 123])
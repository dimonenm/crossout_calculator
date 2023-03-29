import { AC43Rapier } from './entity/weapons/rare';
import axios from 'axios'

const aC43Rapier = new AC43Rapier()
console.log(aC43Rapier.getAllScrapMetal());

async function getItem(itemIds: number[]) {

  const arr: string[] = []

  for (const itemId of itemIds) {
    await axios.get('https://crossoutdb.com/api/v1/recipe/' + itemId).then(res => {
      const str = `export class ${res.data.recipe.item.name} implements ICarComponent { name = '' rarity = 'rare' benchCost = 3 scrapMetal = ${res.data.recipe.ingredients[0].number} copper = ${res.data.recipe.ingredients[1].number} ingredients = ['${res.data.recipe.ingredients[2].item.name}', '${res.data.recipe.ingredients[3].item.name}'] getScrapMetal = () => { return this.scrapMetal} getAllScrapMetal = () => { let scrapMetalCount = this.getScrapMetal() for (let item of this.ingredients) { scrapMetalCount += item.getScrapMetal()} return scrapMetalCount}}`
      arr.push(str)


      console.log(`export class ${res.data.recipe.item.name} implements ICarComponent {`);
      console.log(`name = ''`);
      console.log(`rarity = 'rare'`);
      console.log(`benchCost = 3`);
      console.log(`scrapMetal = ${res.data.recipe.ingredients[0].number}`);
      console.log(`copper = ${res.data.recipe.ingredients[1].number}`);
      console.log(`ingredients = ['${res.data.recipe.ingredients[2].item.name}', '${res.data.recipe.ingredients[3].item.name}']`);
      console.log(``);
      console.log(`getScrapMetal = () => {`);
      console.log(`return this.scrapMetal`);
      console.log(`}`);
      console.log(``);
      console.log(`getAllScrapMetal = () => {`);
      console.log(`let scrapMetalCount = this.getScrapMetal()`);
      console.log(`for (let item of this.ingredients) {`);
      console.log(`scrapMetalCount += item.getScrapMetal()`);
      console.log(`}`);
      console.log(`return scrapMetalCount`);
      console.log(`}`);
      console.log(`}`);
      console.log(`}`);
    })
  }
  // console.log(arr);

}
getItem([116, 113, 383, 379, 121, 87, 104, 59, 395, 389, 390, 388])
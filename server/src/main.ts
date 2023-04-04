import axios from 'axios'
import { writeFile, appendFile } from 'fs/promises'

async function saveFile(txtContent: string) {
  try {
    await appendFile('./test.txt', txtContent);
  } catch (err) {
    console.log(err);
  }
}

async function getItem(itemIds: number[]) {

  for (const itemId of itemIds) {
    await axios.get('https://crossoutdb.com/api/v1/recipe/' + itemId).then(res => {


      console.log(`export class ${res.data.recipe.item.name} implements ICarComponent {`);
      console.log(`name = ''`);
      console.log(`rarity = 'special'`);
      console.log(`benchCost = 6`);
      console.log(`scrapMetal = ${res.data.recipe.ingredients[0].number}`);
      console.log(`wires = ${res.data.recipe.ingredients[1].number}`);
      console.log(`copper = ${res.data.recipe.ingredients[2].number}`);
      console.log(`plastic = ${res.data.recipe.ingredients[3].number}`);
      console.log(`ingredients = ['${res.data.recipe.ingredients[4].item.name}', '${res.data.recipe.ingredients[5].item.name}']`);
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
    })
  }
}
getItem([602, 600, 384, 380, 91, 83, 483, 482, 1066, 1067, 1253, 1254])

//let list2 = document.querySelectorAll('tr')
//for(const item of list2){console.log(item.children[0].innerText)}
//for(const item of list2){console.log(item.children[1].innerText)}


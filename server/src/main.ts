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

      saveFile(
        `export class ${res.data.recipe.item.name} implements ICarComponent {\n` +
        `name = ''\n` +
        `rarity = 'epic'\n` +
        `benchCost = 15\n` +
        `scrapMetal = ${res.data.recipe.ingredients[0].number}\n` +
        `wires = ${res.data.recipe.ingredients[1].number}\n` +
        `copper = ${res.data.recipe.ingredients[2].number}\n` +
        `plastic = ${res.data.recipe.ingredients[6].number}\n` +
        `ingredients = [new ${res.data.recipe.ingredients[3].item.name}(), new ${res.data.recipe.ingredients[4].item.name}(), new ${res.data.recipe.ingredients[5].item.name}()]\n` +
        `getScrapMetal = () => {\n` +
        `return this.scrapMetal\n` +
        `}\n` +
        `getAllScrapMetal = () => {\n` +
        `let scrapMetalCount = this.getScrapMetal()\n` +
        `for (let item of this.ingredients) {\n` +
        `scrapMetalCount += item.getScrapMetal()\n` +
        `}\n` +
        `return scrapMetalCount\n` +
        `}\n` +
        `}\n`
      )
    })
  }
}
getItem([498, 30, 32, 1358, 508, 1055, 1211, 1137, 1316, 1, 1665, 1314, 455, 8, 618, 375, 490, 84, 1477, 928, 865, 45, 6, 764, 1249, 374, 31, 1012, 79, 38, 40, 92, 124, 1056, 1422, 765, 609, 1132, 594, 1248])



//let list2 = document.querySelectorAll('tr')
//for(const item of list2){console.log(item.children[0].innerText)}
//for(const item of list2){console.log(item.children[1].innerText)}


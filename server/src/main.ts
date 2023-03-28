import { AC43Rapier } from './entity/weapons/rare';
import axios from 'axios'

const aC43Rapier = new AC43Rapier()
console.log(aC43Rapier.getAllScrapMetal());

async function getItem(itemId: number) {
  const res = await axios.get('https://crossoutdb.com/api/v1/recipe-deep/' + itemId).then(res => {
    const item = {
      name: '',
      scrapMetal: 0,
      copper: 0,
      ingredients: []
    }
    console.log('name: ', res.data.item.name);
    console.log('scrapMetal - ', res.data.recipe.recipe.ingredients[0].number)
    console.log('copper - ', res.data.recipe.recipe.ingredients[1].number)
    console.log(' ');
    console.log('name - ', res.data.recipe.recipe.ingredients[2].item.name)
    console.log('scrapMetal - ', res.data.recipe.recipe.ingredients[2].ingredients[0].number)
    console.log('copper - ', res.data.recipe.recipe.ingredients[2].ingredients[1].number)
    console.log(' ');
    console.log('name - ', res.data.recipe.recipe.ingredients[3].item.name)
    console.log('scrapMetal - ', res.data.recipe.recipe.ingredients[3].ingredients[0].number)
    console.log('copper - ', res.data.recipe.recipe.ingredients[3].ingredients[1].number)
  })
}
getItem(44)
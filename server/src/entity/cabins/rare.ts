import { ICarComponent } from '../../interfaces/carComponent.interface'
import { RS1Ruby } from '../hardware/common'
import { Lupara } from '../weapons/common'
import { Docker, Huntsman, Sprinter } from './common'

export class Wyvern implements ICarComponent {
  name = 'Виверна'
  rarity = 'rare'
  benchCost = 3
  scrapMetal = 700
  copper = 130
  ingredients = [new Huntsman(), new RS1Ruby()]

  getScrapMetal = () => {
    return this.scrapMetal;
  }  
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal();
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}

export class Trucker implements ICarComponent {
  name = 'Дальнобой'
  rarity = 'rare'
  benchCost = 3
  scrapMetal = 700
  copper = 130
  ingredients = [new Sprinter(),new Docker()]
  getScrapMetal = () => { return this.scrapMetal }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) { scrapMetalCount += item.getScrapMetal() }
    return scrapMetalCount
  }
}

export class Growl implements ICarComponent {
  name = 'Рык'
  rarity = 'rare'
  benchCost = 3
  scrapMetal = 700
  copper = 130
  ingredients = [new Sprinter(), new Lupara()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) { scrapMetalCount += item.getScrapMetal() }
    return scrapMetalCount
  }
}
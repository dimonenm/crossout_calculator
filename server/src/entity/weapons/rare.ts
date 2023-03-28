import { ICarComponent } from '../../interfaces/carComponent.interface'
import { B1Aviator } from '../hardware/common'
import { P54MAccord } from './common'

export class AC43Rapier implements ICarComponent {
  name = 'АП43 Рапира'
  rarity = 'rare'
  benchCost = 3
  scrapMetal = 650
  copper = 130
  ingredients = [new B1Aviator(), new P54MAccord()]

  getScrapMetal = () => {
    return this.scrapMetal
  }

  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal() 
    }
    return scrapMetalCount
  }
}
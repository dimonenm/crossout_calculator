import { ICarComponent } from '../../interfaces/carComponent.interface'
import { Trucker, Growl, Wyvern } from './rare'
import { RD1Listener, BigG } from '../hardware/rare'
import { AD12Falcon } from '../weapons/rare'

export class Jawbreaker implements ICarComponent {
  name = 'Зубодробитель'
  rarity = 'special'
  benchCost = 6
  scrapMetal = 50
  wires = 100
  copper = 100
  plastic = 50
  ingredients = [new Trucker(), new RD1Listener()]
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
export class Bat implements ICarComponent {
  name = 'Нетопырь'
  rarity = 'special'
  benchCost = 6
  scrapMetal = 50
  wires = 100
  copper = 100
  plastic = 50
  ingredients = [new Growl(), new BigG()]
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
export class Pilgrim implements ICarComponent {
  name = 'Пилигрим'
  rarity = 'special'
  benchCost = 6
  scrapMetal = 50
  wires = 100
  copper = 100
  plastic = 50
  ingredients = [new Wyvern(), new AD12Falcon()]
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

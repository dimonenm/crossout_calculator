import { ICarComponent } from '../../interfaces/carComponent.interface'
import { Docker, Huntsman } from '../cabins/common'
import { SmallWheel } from '../movement/common'
import { Avenger57mm } from '../weapons/common'
import { B1Aviator, CarJack, FuelBarrel, R1Breese, Radio, RS1Ruby } from './common'

export class AmmoPack implements ICarComponent {
  name = 'Боезапас'
  rarity = 'rare'
  benchCost = 3
  scrapMetal = 650
  copper = 130
  ingredients = [new CarJack(), new Radio()]
  getScrapMetal = () => { return this.scrapMetal }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) { scrapMetalCount += item.getScrapMetal() }
    return scrapMetalCount
  }
}

export class BigG implements ICarComponent {
  name = 'Генка'
  rarity = 'rare'
  benchCost = 3
  scrapMetal = 700
  copper = 130
  ingredients = [new B1Aviator(), new Avenger57mm()]
  getScrapMetal = () => { return this.scrapMetal }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) { scrapMetalCount += item.getScrapMetal() }
    return scrapMetalCount
  }
}

export class R2Chill implements ICarComponent {
  name = 'Р-2 Стужа'
  rarity = 'rare'
  benchCost = 3
  scrapMetal = 650
  copper = 130
  ingredients = [new R1Breese(), new Radio()]
  getScrapMetal = () => { return this.scrapMetal }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) { scrapMetalCount += item.getScrapMetal() }
    return scrapMetalCount
  }
}

export class Blastoff implements ICarComponent {
  name = 'Разгон'
  rarity = 'rare'
  benchCost = 3
  scrapMetal = 650
  copper = 130
  ingredients = [new RS1Ruby(), new B1Aviator()]
  getScrapMetal = () => { return this.scrapMetal }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) { scrapMetalCount += item.getScrapMetal() }
    return scrapMetalCount
  }
}

export class RD1Listener implements ICarComponent {
  name = 'РЛС-1 Слухач'
  rarity = 'rare'
  benchCost = 3
  scrapMetal = 650
  copper = 130
  ingredients = [new FuelBarrel(), new RS1Ruby()]
  getScrapMetal = () => { return this.scrapMetal }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) { scrapMetalCount += item.getScrapMetal() }
    return scrapMetalCount
  }
}

export class CSTaymyr implements ICarComponent {
  name = 'СО Таймыр'
  rarity = 'rare'
  benchCost = 3
  scrapMetal = 650
  copper = 130
  ingredients = [new Huntsman(), new R1Breese()]
  getScrapMetal = () => { return this.scrapMetal }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) { scrapMetalCount += item.getScrapMetal() }
    return scrapMetalCount
  }
}

export class TS1Horizon implements ICarComponent {
  name = 'СП-1 Горизонт'
  rarity = 'rare'
  benchCost = 3
  scrapMetal = 650
  copper = 130
  ingredients = [new Radio(), new SmallWheel()]
  getScrapMetal = () => { return this.scrapMetal }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) { scrapMetalCount += item.getScrapMetal() }
    return scrapMetalCount
  }
}

export class FuelTank implements ICarComponent {
  name = 'Топливный бак'
  rarity = 'rare'
  benchCost = 3
  scrapMetal = 650
  copper = 130
  ingredients = [new FuelBarrel(), new Docker()]
  getScrapMetal = () => { return this.scrapMetal }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) { scrapMetalCount += item.getScrapMetal() }
    return scrapMetalCount
  }
}
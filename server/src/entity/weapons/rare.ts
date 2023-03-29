import { ICarComponent } from '../../interfaces/carComponent.interface'
import { B1Aviator, CarJack, R1Breese, RS1Ruby } from '../hardware/common'
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

export class AD12Falcon implements ICarComponent {
  name = 'АД-12 Сокол'
  rarity = 'rare'
  benchCost = 3
  scrapMetal = 650
  copper = 130
  ingredients = [new RS1Ruby(), new P54MAccord()]

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

export class Borer implements ICarComponent {
  name = 'Бур'
  rarity = 'rare'
  benchCost = 3
  scrapMetal = 650
  copper = 130
  ingredients = [new CarJack(), new R1Breese()]

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

export class Vector implements ICarComponent {
  name = 'Вектор'
  rarity = 'rare'
  benchCost = 3
  scrapMetal = 650
  copper = 130
  ingredients = [new P54MAccord(), new CarJack()]

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

[
  {
    name: 'Sledgehammer',
    scrapMetal: 650,
    copper: 130,
    ingredients: ['Lupara', 'Car jack']
  },
  {
    name: 'Little Boy 6LB',
    scrapMetal: 650,
    copper: 130,
    ingredients: ['Avenger 57mm', 'Fuel barrel']
  },
  {
    name: 'Wasp',
    scrapMetal: 650,
    copper: 130,
    ingredients: ['Fuel barrel', 'Avenger 57mm']
  },
  {
    name: 'Spitfire',
    scrapMetal: 650,
    copper: 130,
    ingredients: ['Lupara', 'B-1 Aviator']
  },
  {
    name: 'ST-M23 Defender',
    scrapMetal: 650,
    copper: 130,
    ingredients: ['LM-54 Chord', 'R-1 Breeze']
  },
  {
    name: 'Judge 76mm',
    scrapMetal: 650,
    copper: 130,
    ingredients: ['Medium wheel ST', 'Avenger 57mm']
  },
  {
    name: 'DT Cobra',
    scrapMetal: 650,
    copper: 130,
    ingredients: ['Lupara', 'Radio']
  }
]
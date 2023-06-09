import { ICarComponent } from '../../interfaces/carComponent.interface'
import { B1Aviator, CarJack, FuelBarrel, R1Breese, Radio, RS1Ruby } from '../hardware/common'
import { MediumWheelST } from '../movement/common'
import { Avenger57mm, Lupara, P54MAccord } from './common'

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

export class Sledgehammer implements ICarComponent {
  name = 'Кувалда'
  rarity = 'rare'
  benchCost = 3
  scrapMetal = 650
  copper = 130
  ingredients = [new Lupara(), new CarJack()]

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

export class LittleBoy6LB implements ICarComponent {
  name = 'Малыш 6Ф'
  rarity = 'rare'
  benchCost = 3
  scrapMetal = 650
  copper = 130
  ingredients = [new Avenger57mm(), new FuelBarrel()]

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

export class Wasp implements ICarComponent {
  name = 'Оса'
  rarity = 'rare'
  benchCost = 3
  scrapMetal = 650
  copper = 130
  ingredients = [new FuelBarrel(), new Avenger57mm()]

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

export class Spitfire implements ICarComponent {
  name = 'Очаг'
  rarity = 'rare'
  benchCost = 3
  scrapMetal = 650
  copper = 130
  ingredients = [new Lupara(), new B1Aviator()]

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

export class STM23Defender implements ICarComponent {
  name = 'П-23 Защитник'
  rarity = 'rare'
  benchCost = 3
  scrapMetal = 650
  copper = 130
  ingredients = [new P54MAccord(), new R1Breese()]

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

export class Judge76mm implements ICarComponent {
  name = 'П-23 Защитник'
  rarity = 'rare'
  benchCost = 3
  scrapMetal = 650
  copper = 130
  ingredients = [new MediumWheelST(), new Avenger57mm()]

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

export class DTCobra implements ICarComponent {
  name = 'П-23 Защитник'
  rarity = 'rare'
  benchCost = 3
  scrapMetal = 650
  copper = 130
  ingredients = [new Lupara(), new Radio()]

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
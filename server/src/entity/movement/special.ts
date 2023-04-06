import { ICarComponent } from '../../interfaces/carComponent.interface'
import { StuddedWheel, ChainedWheel, StuddedWheelST, ChainedWheelST, LargeWheel, BalloonTyre, LargeWheelST, BalloonTyreST, RacingWheel, LandingGear, RacingWheelST, LandingGearST } from './rare'

export class Shiv implements ICarComponent {
  name = 'Заточка'
  rarity = 'special'
  benchCost = 6
  scrapMetal = 50
  wires = 100
  copper = 100
  plastic = 50
  ingredients = [new StuddedWheel(), new ChainedWheel()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getAllScrapMetal()
    }
    return scrapMetalCount
  }
}
export class ShivST implements ICarComponent {
  name = 'Заточка(пов.)'
  rarity = 'special'
  benchCost = 6
  scrapMetal = 50
  wires = 100
  copper = 100
  plastic = 50
  ingredients = [new StuddedWheelST(), new ChainedWheelST()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getAllScrapMetal()
    }
    return scrapMetalCount
  }
}
export class APCWheel implements ICarComponent {
  name = 'Колесо броневика'
  rarity = 'special'
  benchCost = 6
  scrapMetal = 50
  wires = 100
  copper = 100
  plastic = 50
  ingredients = [new LargeWheel(), new BalloonTyre()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getAllScrapMetal()
    }
    return scrapMetalCount
  }
}
export class APCWheelST implements ICarComponent {
  name = 'Колесо броневика(пов.)'
  rarity = 'special'
  benchCost = 6
  scrapMetal = 50
  wires = 100
  copper = 100
  plastic = 50
  ingredients = [new LargeWheelST(), new BalloonTyreST()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getAllScrapMetal()
    }
    return scrapMetalCount
  }
}
export class TwinWheel implements ICarComponent {
  name = 'Колесо двойное'
  rarity = 'special'
  benchCost = 6
  scrapMetal = 50
  wires = 100
  copper = 100
  plastic = 50
  ingredients = [new LargeWheel(), new BalloonTyre()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getAllScrapMetal()
    }
    return scrapMetalCount
  }
}
export class TwinWheelST implements ICarComponent {
  name = 'Колесо двойное(пов.)'
  rarity = 'special'
  benchCost = 6
  scrapMetal = 50
  wires = 100
  copper = 100
  plastic = 50
  ingredients = [new LargeWheelST(), new BalloonTyreST()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getAllScrapMetal()
    }
    return scrapMetalCount
  }
}
export class LunarIV implements ICarComponent {
  name = 'Лунар IV'
  rarity = 'special'
  benchCost = 6
  scrapMetal = 50
  wires = 100
  copper = 100
  plastic = 50
  ingredients = [new RacingWheel(), new LandingGear()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getAllScrapMetal()
    }
    return scrapMetalCount
  }
}
export class LunarIVST implements ICarComponent {
  name = 'Лунар IV(пов.)'
  rarity = 'special'
  benchCost = 6
  scrapMetal = 50
  wires = 100
  copper = 100
  plastic = 50
  ingredients = [new RacingWheelST(), new LandingGearST()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getAllScrapMetal()
    }
    return scrapMetalCount
  }
}
export class Array implements ICarComponent {
  name = 'Массив'
  rarity = 'special'
  benchCost = 6
  scrapMetal = 50
  wires = 100
  copper = 100
  plastic = 50
  ingredients = [new ChainedWheel(), new StuddedWheel()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getAllScrapMetal()
    }
    return scrapMetalCount
  }
}
export class ArrayST implements ICarComponent {
  name = 'Массив(пов.)'
  rarity = 'special'
  benchCost = 6
  scrapMetal = 50
  wires = 100
  copper = 100
  plastic = 50
  ingredients = [new ChainedWheelST(), new StuddedWheelST()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getAllScrapMetal()
    }
    return scrapMetalCount
  }
}
export class Camber implements ICarComponent {
  name = 'Развал'
  rarity = 'special'
  benchCost = 6
  scrapMetal = 200
  wires = 200
  copper = 100
  plastic = 30
  ingredients = [new RacingWheel(), new BalloonTyre()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getAllScrapMetal()
    }
    return scrapMetalCount
  }
}
export class CamberST implements ICarComponent {
  name = 'Развал(пов.)'
  rarity = 'special'
  benchCost = 6
  scrapMetal = 200
  wires = 200
  copper = 100
  plastic = 30
  ingredients = [new RacingWheelST(), new BalloonTyreST()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getAllScrapMetal()
    }
    return scrapMetalCount
  }
}

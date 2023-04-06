import { ICarComponent } from '../../interfaces/carComponent.interface'
import { Hardcore, Razorback, Genesis, PU1Charge, Ampere, OculusVI } from '../hardware/special'
import { APCWheel, APCWheelST, ArrayST, Shiv, ShivST } from '../movement/special'
import { Goblin, Buzzsaw, Synthesis, Pyralid, Sinus0, Tempura, AD13Hawk } from '../weapons/special'
import { Jawbreaker, Bat, Pilgrim } from './special'

export class Aggressor implements ICarComponent {
  name = 'Агрессор'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 250
  wires = 200
  copper = 250
  plastic = 60
  batteries = 100
  ingredients = [new Hardcore(), new Goblin(), new Buzzsaw()]
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
export class Bastion implements ICarComponent {
  name = 'Бастион'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 100
  ingredients = [new Jawbreaker(), new APCWheelST(), new PU1Charge()]
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
export class Harpy implements ICarComponent {
  name = 'Гарпия'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 100
  ingredients = [new Bat(), new Shiv(), new Sinus0()]
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
export class Humpback implements ICarComponent {
  name = 'Горбун'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 100
  ingredients = [new Jawbreaker(), new APCWheel(), new Razorback()]
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
export class Jannabi implements ICarComponent {
  name = 'Джаннаби'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 250
  wires = 200
  copper = 250
  plastic = 60
  batteries = 100
  ingredients = [new Bat(),new Tempura(), new Razorback()]
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
export class Quantum implements ICarComponent {
  name = 'Квант'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 100
  ingredients = [new Pilgrim(), new Genesis(), new AD13Hawk()]
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
export class Werewolf implements ICarComponent {
  name = 'Оборотень'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 1
  ingredients = [new Bat(), new ShivST(), new Ampere()]
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
export class Omnibox implements ICarComponent {
  name = 'Омнибокс'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 100
  ingredients = [new Pilgrim(), new ArrayST(), new Jawbreaker()]
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
export class Photon implements ICarComponent {
  name = 'Фотон'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 100
  ingredients = [new Pilgrim(), new Synthesis(), new AD13Hawk()]
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
export class Huginn implements ICarComponent {
  name = 'Хугин'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 450
  wires = 200
  copper = 450
  plastic = 100
  ingredients = [new Pyralid(), new Razorback(), new OculusVI()]
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

import { ICarComponent } from '../../interfaces/carComponent.interface'
import { Bat } from '../cabins/special'
import { APCWheelST, Array, LunarIV, Shiv, ShivST, TwinWheel, TwinWheelST } from '../movement/special'
import { Prosecutor76mm, Buzzsaw, Goblin, Boom, Junkbow, Mace, Sidekick, AC50Storm, ZS33Hulk, M25Guardian, AD13Hawk } from '../weapons/special'
import { Ampere, Chameleon, DunHorse, Genesis, Hardcore, KA1Discharger, Maxwell, OculusVI, PU1Charge, Razorback } from './special'

export class ExpandedAmmoPack implements ICarComponent {
  name = 'Боезапас увеличенный'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 150
  copper = 200
  plastic = 100
  ingredients = [new OculusVI(), new PU1Charge(), new Prosecutor76mm()]
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
export class Bootstrap implements ICarComponent {
  name = 'Бутстрэп'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 250
  wires = 200
  copper = 250
  plastic = 60
  batteries = 100
  ingredients = [new PU1Charge(), new Hardcore(), new Array()]
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
export class Verifier implements ICarComponent {
  name = 'Верификатор'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 100
  ingredients = [new Array(), new OculusVI(), new Sidekick()]
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
export class Gasgen implements ICarComponent {
  name = 'Газген'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 150
  copper = 200
  plastic = 100
  ingredients = [new Buzzsaw(), new Goblin(), new Boom()]
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
export class Cheetah implements ICarComponent {
  name = 'Гепард'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 150
  copper = 200
  plastic = 100
  ingredients = [new DunHorse(), new Chameleon(), new AC50Storm()]
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
export class Hermes implements ICarComponent {
  name = 'Гермес'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 150
  copper = 200
  plastic = 100
  ingredients = [new Hardcore(), new Boom(), new Buzzsaw()]
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
export class Oppressor implements ICarComponent {
  name = 'Гонитель'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 100
  ingredients = [new Bat(), new ShivST(), new Hardcore()]
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
export class Doppler implements ICarComponent {
  name = 'Доплер'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 100
  ingredients = [new Maxwell(), new Chameleon()]
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
export class Colossus implements ICarComponent {
  name = 'Исполин'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 150
  copper = 200
  plastic = 100
  ingredients = [new Razorback(), new TwinWheel(), new ZS33Hulk()]
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
export class KA2Flywheel implements ICarComponent {
  name = 'КА-2 Маховик'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 250
  wires = 200
    copper = 250
  plastic = 60
  batteries = 100
  ingredients = [new KA1Discharger(), new Razorback(), new OculusVI()]
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
export class Tormentor implements ICarComponent {
  name = 'Мучитель'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 100
  ingredients = [new Bat(), new Junkbow(), new AD13Hawk()]
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
export class Neutrino implements ICarComponent {
  name = 'Нейтрино'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 100
  ingredients = [new LunarIV(), new Genesis(), new TwinWheelST()]
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
export class Averter implements ICarComponent {
  name = 'Оберег'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 250
  wires = 200
  copper = 250
  plastic = 60
  batteries = 100
  ingredients = [new Chameleon(), new M25Guardian(), new APCWheelST()]
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
export class Shiver implements ICarComponent {
  name = 'Озноб'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 150
  copper = 200
  plastic = 100
  ingredients = [new Buzzsaw(), new Mace(), new Hardcore()]
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
export class RD2Keen implements ICarComponent {
  name = 'РЛС-2 Чуткий'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 150
  copper = 200
  plastic = 100
  ingredients = [new OculusVI(), new TwinWheel(), new PU1Charge()]
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
export class RNSeal implements ICarComponent {
  name = 'РС Нерпа'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 150
  copper = 200
  plastic = 100
  ingredients = [new Maxwell(), new Ampere(), new DunHorse()]
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
export class ChameleonMk2 implements ICarComponent {
  name = 'Хамелеон Mk2'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 150
  copper = 200
  plastic = 100
  ingredients = [new Maxwell(), new AC50Storm(), new Chameleon()]
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
export class HotRed implements ICarComponent {
  name = 'Четкий'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 150
  copper = 200
  plastic = 100
  ingredients = [new Hardcore(), new Goblin(), new Mace()]
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

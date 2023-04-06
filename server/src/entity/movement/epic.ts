import { ICarComponent } from '../../interfaces/carComponent.interface'
import { Bat } from '../cabins/special'
import { Razorback, Hardcore, Ampere, Chameleon, DunHorse } from '../hardware/special'
import { Buzzsaw, Mace, Goblin, Sidekick, Boom, M25Guardian } from '../weapons/special'
import { APCWheel, APCWheelST, Array, ArrayST, Camber, CamberST, LunarIV, LunarIVST, Shiv, ShivST, TwinWheel, TwinWheelST } from './special'

export class Bigram implements ICarComponent {
  name = 'Биграмма'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 100
  ingredients = [new Array(), new ArrayST(), new APCWheel()]
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
export class Bigfoot implements ICarComponent {
  name = 'Бигфут'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 100
  ingredients = [new Shiv(), new Bat(), new TwinWheel()]
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
export class BigfootST implements ICarComponent {
  name = 'Бигфут (пов.)'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 100
  ingredients = [new ShivST(), new Bat(), new TwinWheelST()]
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
export class ArmoredTrack implements ICarComponent {
  name = 'Гусеница бронированная'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 100
  ingredients = [new TwinWheel(), new TwinWheelST(), new Razorback()]
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
export class SmallTrack implements ICarComponent {
  name = 'Гусеница малая'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 100
  ingredients = [new Hardcore(), new Buzzsaw(), new Mace()]
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
export class HardenedTrack implements ICarComponent {
  name = 'Гусеница укрепленная'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 150
  copper = 200
  plastic = 100
  ingredients = [new Ampere(), new Chameleon(), new DunHorse()]
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
export class Hermit implements ICarComponent {
  name = 'Затворник'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
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
export class HermitST implements ICarComponent {
  name = 'Затворник (пов.)'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 100
  ingredients = [new Hardcore(), new Mace(), new Boom()]
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
export class IcarusVII implements ICarComponent {
  name = 'Икар VII'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 100
  ingredients = [new LunarIVST(), new LunarIV(), new DunHorse()]
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
export class BuggyWheel implements ICarComponent {
  name = 'Колесо багги'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 250
  wires = 200
  copper = 250
  plastic = 60
  batteries = 100
  ingredients = [new Buzzsaw(), new Hardcore(), new Mace()]
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
export class BuggyWheelST implements ICarComponent {
  name = 'Колесо багги (пов.)'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 250
  wires = 200
  copper = 250
  plastic = 60
  batteries = 100
  ingredients = [new Buzzsaw(), new Mace(), new Boom()]
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
export class ML200 implements ICarComponent {
  name = 'МН-Л 200'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 100
  ingredients = [new Sidekick(), new APCWheelST(), new Razorback()]
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
export class MeatGrinder implements ICarComponent {
  name = 'Мясорубка'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 100
  ingredients = [new Shiv(), new ShivST(), new Buzzsaw()]
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
export class Omni implements ICarComponent {
  name = 'Омни'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 250
  wires = 200
  copper = 250
  plastic = 60
  batteries = 100
  ingredients = [new Camber(), new CamberST(), new TwinWheelST()]
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
export class Sleipnir implements ICarComponent {
  name = 'Слейпнир'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 450
  wires = 200
  copper = 450
  plastic = 100
  ingredients = [new M25Guardian(), new Ampere(), new Buzzsaw()]
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

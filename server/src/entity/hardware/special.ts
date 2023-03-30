import { ICarComponent } from '../../interfaces/carComponent.interface'
import { Trucker } from '../cabins/rare'
import { RacingWheelST, LandingGearST, RacingWheel, LandingGear } from '../movement/rare'
import { LittleBoy6LB, DTCobra, AD12Falcon } from '../weapons/rare'
import { R2Chill, AmmoPack, Blastoff, CSTaymyr, TS1Horizon, RD1Listener } from './rare'

export class Ampere implements ICarComponent {
  name = 'Ампер'
  rarity = 'special'
  benchCost = 6
  scrapMetal = 50
  wires = 100
  copper = 100
  plastic = 50
  ingredients = [new RacingWheelST(), new R2Chill()]
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
export class Genesis implements ICarComponent {
  name = 'Генезис'
  rarity = 'special'
  benchCost = 6
  scrapMetal = 50
  wires = 100
  copper = 100
  plastic = 50
  ingredients = [new AD12Falcon(), new AmmoPack()]
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
export class Hardcore implements ICarComponent {
  name = 'Жесткач'
  rarity = 'special'
  benchCost = 6
  scrapMetal = 50
  wires = 100
  copper = 100
  plastic = 50
  ingredients = [new Blastoff(), new CSTaymyr()]
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
export class Iris implements ICarComponent {
  name = 'Зеница'
  rarity = 'special'
  benchCost = 6
  scrapMetal = 200
  wires = 200
  copper = 100
  plastic = 30
  ingredients = [new TS1Horizon(), new RD1Listener()]
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
export class KA1Discharger implements ICarComponent {
  name = 'КА-1 Разрядник'
  rarity = 'special'
  benchCost = 6
  scrapMetal = 200
  wires = 200
  copper = 100
  plastic = 30
  ingredients = [new CSTaymyr(), new Trucker()]
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
export class Maxwell implements ICarComponent {
  name = 'Максвелл'
  rarity = 'special'
  benchCost = 6
  scrapMetal = 50
  wires = 100
  copper = 100
  plastic = 50
  ingredients = [new LandingGearST(), new TS1Horizon()]
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
export class OculusVI implements ICarComponent {
  name = 'Окулус VI'
  rarity = 'special'
  benchCost = 6
  scrapMetal = 50
  wires = 100
  copper = 100
  plastic = 50
  ingredients = [new RD1Listener(), new TS1Horizon()]
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
export class Razorback implements ICarComponent {
  name = 'Работяга'
  rarity = 'special'
  benchCost = 6
  scrapMetal = 50
  wires = 100
  copper = 100
  plastic = 50
  ingredients = [new Trucker(), new LittleBoy6LB()]
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
export class DunHorse implements ICarComponent {
  name = 'Саврас'
  rarity = 'special'
  benchCost = 6
  scrapMetal = 50
  wires = 100
  copper = 100
  plastic = 50
  ingredients = [new RacingWheel(), new R2Chill()]
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
export class Chameleon implements ICarComponent {
  name = 'Хамелеон'
  rarity = 'special'
  benchCost = 6
  scrapMetal = 50
  wires = 100
  copper = 100
  plastic = 50
  ingredients = [new LandingGear(), new CSTaymyr()]
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
export class PU1Charge implements ICarComponent {
  name = 'ЭУ-1 Заряд'
  rarity = 'special'
  benchCost = 6
  scrapMetal = 50
  wires = 100
  copper = 100
  plastic = 50
  ingredients = [new DTCobra(), new TS1Horizon()]
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
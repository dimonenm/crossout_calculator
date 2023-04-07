import { ICarComponent } from '../../interfaces/carComponent.interface'
import { SpecialVehicleComponent } from '../specialVehicleComponent'
import { Growl, Wyvern } from '../cabins/rare'
import { AmmoPack, BigG, Blastoff, CSTaymyr, FuelTank, R2Chill, RD1Listener } from '../hardware/rare'
import { ChainedWheelST, LargeWheelST, StuddedWheel } from '../movement/rare'
import { AC43Rapier, AD12Falcon, Borer, DTCobra, Judge76mm, LittleBoy6LB, Sledgehammer, Spitfire, STM23Defender, Vector, Wasp } from './rare'

export class AD13Hawk extends SpecialVehicleComponent {
  name = 'АД-13 Ястреб'
  rarity = 'special'
  benchCost = 6
  scrapMetal = 50
  wires = 100
  copper = 100
  plastic = 50
  ingredients = [new AD12Falcon(), new CSTaymyr()]

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
export class AC50Storm implements ICarComponent {
  name = 'АП50 Шторм'
  rarity = 'special'
  benchCost = 6
  scrapMetal = 50
  wires = 100
  copper = 100
  plastic = 50
  ingredients = [new STM23Defender(), new AC43Rapier()]

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
export class AC62Therm implements ICarComponent {
  name = 'АП62 Терм'
  rarity = 'special'
  benchCost = 6
  scrapMetal = 200
  wires = 200
  copper = 100
  plastic = 30
  ingredients = [new AC43Rapier(), new LargeWheelST()]

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
export class Mace implements ICarComponent {
  name = 'Булава'
  rarity = 'special'
  benchCost = 6
  scrapMetal = 50
  wires = 100
  copper = 100
  plastic = 50
  ingredients = [new Sledgehammer(), new Spitfire()]

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
export class Boom implements ICarComponent {
  name = 'Бум'
  rarity = 'special'
  benchCost = 6
  scrapMetal = 50
  wires = 100
  copper = 100
  plastic = 50
  ingredients = [new Wasp(), new FuelTank()]

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
export class Tempest implements ICarComponent {
  name = 'Буря'
  rarity = 'special'
  benchCost = 6
  scrapMetal = 200
  wires = 200
  copper = 100
  plastic = 30
  ingredients = [new AC43Rapier(),new ChainedWheelST()]

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
export class Goblin implements ICarComponent {
  name = 'Гоблин'
  rarity = 'special'
  benchCost = 6
  scrapMetal = 50
  wires = 100
  copper = 100
  plastic = 50
  ingredients = [new Wasp(), new Spitfire()]

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
export class ZS33Hulk implements ICarComponent {
  name = 'ЗИС-33 Верзила'
  rarity = 'special'
  benchCost = 6
  scrapMetal = 50
  wires = 100
  copper = 100
  plastic = 50
  ingredients = [new Judge76mm(), new FuelTank()]

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
export class Prosecutor76mm implements ICarComponent {
  name = 'Обвинитель 76мм'
  rarity = 'special'
  benchCost = 6
  scrapMetal = 50
  wires = 100
  copper = 100
  plastic = 50
  ingredients = [new Judge76mm(), new AmmoPack()]

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
export class Pyralid implements ICarComponent {
  name = 'Огнёвка'
  rarity = 'special'
  benchCost = 6
  scrapMetal = 50
  wires = 100
  copper = 100
  plastic = 50
  ingredients = [new Wasp(), new StuddedWheel()]

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
export class M25Guardian implements ICarComponent {
  name = 'П-25 Опекун'
  rarity = 'special'
  benchCost = 6
  scrapMetal = 200
  wires = 200
  copper = 100
  plastic = 30
  ingredients = [new STM23Defender(), new Spitfire()]

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
export class M37Piercer implements ICarComponent {
  name = 'П-37 Шило'
  rarity = 'special'
  benchCost = 6
  scrapMetal = 250
  wires = 100
  copper = 100
  plastic = 50
  ingredients = [new Vector(), new BigG()]

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
export class Sidekick implements ICarComponent {
  name = 'Прихвостень'
  rarity = 'special'
  benchCost = 6
  scrapMetal = 50
  wires = 100
  copper = 100
  plastic = 50
  ingredients = [new DTCobra(), new Borer()]

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
export class Junkbow implements ICarComponent {
  name = 'Самопал'
  rarity = 'special'
  benchCost = 6
  scrapMetal = 50
  wires = 100
  copper = 100
  plastic = 50
  ingredients = [new Sledgehammer(), new Growl()]

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
export class Synthesis implements ICarComponent {
  name = 'Синтез'
  rarity = 'special'
  benchCost = 6
  scrapMetal = 50
  wires = 100
  copper = 100
  plastic = 50
  ingredients = [new Vector(), new Wyvern()]

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
export class Sinus0 implements ICarComponent {
  name = 'Синус-0'
  rarity = 'special'
  benchCost = 6
  scrapMetal = 50
  wires = 100
  copper = 100
  plastic = 50
  ingredients = [new Vector(), new AC43Rapier()]

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
export class Summator implements ICarComponent {
  name = 'Сумматор'
  rarity = 'special'
  benchCost = 6
  scrapMetal = 50
  wires = 100
  copper = 100
  plastic = 50
  ingredients = [new STM23Defender(), new Borer()]

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
export class Tempura implements ICarComponent {
  name = 'Темпура'
  rarity = 'special'
  benchCost = 6
  scrapMetal = 200
  wires = 200
  copper = 100
  plastic = 30
  ingredients = [new Borer(), new RD1Listener()]

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
export class T4Python implements ICarComponent {
  name = 'ТЗ Питон'
  rarity = 'special'
  benchCost = 6
  scrapMetal = 50
  wires = 100
  copper = 100
  plastic = 50
  ingredients = [new DTCobra(), new R2Chill()]

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
export class Buzzsaw implements ICarComponent {
  name = 'Циркулярка'
  rarity = 'special'
  benchCost = 6
  scrapMetal = 50
  wires = 100
  copper = 100
  plastic = 50
  ingredients = [new Blastoff(), new LittleBoy6LB()]

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
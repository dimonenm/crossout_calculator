import { EpicVehicleComponent } from '../epicVehicleComponent'
import { Bat } from '../cabins/special'
import { Razorback, Hardcore, Ampere, Chameleon, DunHorse } from '../hardware/special'
import { Buzzsaw, Mace, Goblin, Sidekick, Boom } from '../weapons/special'
import { APCWheelST, Camber, CamberST, LunarIV, LunarIVST, Shiv, ShivST, TwinWheel, TwinWheelST } from './special'

export class BuggyWheel extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 427
    this.name = 'Колесо багги'
    this.type = 'Колесо легкое'
    this.scrapMetal = 250
    this.wires = 200
    this.copper = 250
    this.plastic = 60
    this.batteries = 100
    this.ingredients = [new Buzzsaw(), new Hardcore(), new Mace()]
  }
}
export class BuggyWheelST extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 428
    this.name = 'Колесо багги (пов.)'
    this.type = 'Колесо легкое'
    this.scrapMetal = 250
    this.wires = 200
    this.copper = 250
    this.plastic = 60
    this.batteries = 100
    this.ingredients = [new Buzzsaw(), new Mace(), new Boom()]
  }
}
export class Bigfoot extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 429
    this.name = 'Бигфут'
    this.type = 'Колесо тяжелое'    
    this.ingredients = [new Shiv(), new Bat(), new TwinWheel()]
  }
}
export class BigfootST extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 430
    this.name = 'Бигфут (пов.)'
    this.type = 'Колесо тяжелое'
    this.ingredients = [new ShivST(), new Bat(), new TwinWheelST()]
  }
}
export class Omni extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 431
    this.name = 'Омни'
    this.type = 'Роликонесущая ходовая'
    this.scrapMetal = 250
    this.wires = 200
    this.copper = 250
    this.plastic = 60
    this.batteries = 100
    this.ingredients = [new Camber(), new CamberST(), new TwinWheelST()]
  }
}
export class SmallTrack extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 432
    this.name = 'Гусеница малая'
    this.type = 'Гусеница'
    this.ingredients = [new Hardcore(), new Buzzsaw(), new Mace()]
  }
}
export class HardenedTrack extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 433
    this.name = 'Гусеница укрепленная'
    this.type = 'Гусеница'
    this.ingredients = [new Ampere(), new Chameleon(), new DunHorse()]
  }
}
export class ArmoredTrack extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 434
    this.name = 'Гусеница бронированная'
    this.type = 'Гусеница'
    this.ingredients = [new TwinWheel(), new TwinWheelST(), new Razorback()]
  }
}
export class IcarusVII extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 435
    this.name = 'Икар VII'
    this.type = 'Ховер'
    this.ingredients = [new LunarIVST(), new LunarIV(), new DunHorse()]
  }
}
export class ML200 extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 436
    this.name = 'МН-Л 200'
    this.type = 'Механическая нога'
    this.ingredients = [new Sidekick(), new APCWheelST(), new Razorback()]
  }
}
export class MeatGrinder extends EpicVehicleComponent {
  constructor() {
    super()
    this.id = 437
    this.name = 'Мясорубка'
    this.type = 'Шнек'
    this.ingredients = [new Shiv(), new ShivST(), new Buzzsaw()]
  }
}
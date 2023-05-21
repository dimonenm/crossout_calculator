import { RareVehicleComponent } from '../rareVehicleComponent'
import { WWT1 } from '../cabins/common'
import { MediumWheel, MediumWheelST, SmallWheel, SmallWheelST } from './common'

export class StuddedWheel extends RareVehicleComponent {
  constructor() {
    super()
    this.id = 405
    this.name = 'Колесо с шипами'
    this.type = 'Колесо легкое'
    this.scrapMetal = 600
    this.ingredients = [new SmallWheel(), new MediumWheel()]
  }
}
export class StuddedWheelST extends RareVehicleComponent {
  constructor() {
    super()
    this.id = 406
    this.name = 'Колесо с шипами(пов.)'
    this.type = 'Колесо легкое'
    this.scrapMetal = 600
    this.ingredients = [new SmallWheelST(), new MediumWheelST()]
  }
}
export class ChainedWheel extends RareVehicleComponent {
  constructor() {
    super()
    this.id = 407
    this.name = 'Колесо с цепями'
    this.type = 'Колесо легкое'
    this.scrapMetal = 600
    this.ingredients = [new MediumWheel(), new SmallWheel()]
  }
}

export class ChainedWheelST extends RareVehicleComponent {
  constructor() {
    super()
    this.id = 408
    this.name = 'Колесо с цепями (пов.)'
    this.type = 'Колесо легкое'
    this.scrapMetal = 600
    this.ingredients = [new MediumWheelST(), new SmallWheelST()]
  }
}
export class BalloonTyre extends RareVehicleComponent {
  constructor() {
    super()
    this.id = 409
    this.name = 'Шина-баллон'
    this.type = 'Колесо среднее'
    this.scrapMetal = 600
    this.ingredients = [new MediumWheel(), new MediumWheel()]
  }
}

export class BalloonTyreST extends RareVehicleComponent {
  constructor() {
    super()
    this.id = 410
    this.name = 'Шина-баллон (пов.)'
    this.type = 'Колесо среднее'
    this.scrapMetal = 600
    this.ingredients = [new SmallWheelST(), new SmallWheelST()]
  }
}
export class RacingWheel extends RareVehicleComponent {
  constructor() {
    super()
    this.id = 411
    this.name = 'Колесо гоночное'
    this.type = 'Колесо среднее'
    this.scrapMetal = 600
    this.ingredients = [new MediumWheel(), new SmallWheel()]
  }
}

export class RacingWheelST extends RareVehicleComponent {
  constructor() {
    super()
    this.id = 412
    this.name = 'Колесо гоночное (пов.)'
    this.type = 'Колесо среднее'
    this.scrapMetal = 600
    this.ingredients = [new MediumWheelST(), new SmallWheelST()]
  }
}
export class LandingGear extends RareVehicleComponent {
  constructor() {
    super()
    this.id = 413
    this.name = 'Посадочное шасси'
    this.type = 'Колесо среднее'
    this.scrapMetal = 600
    this.ingredients = [new SmallWheel(), new MediumWheel()]
  }
}
export class LandingGearST extends RareVehicleComponent {
  constructor() {
    super()
    this.id = 414
    this.name = 'Посадочное шасси (пов.)'
    this.type = 'Колесо среднее'
    this.scrapMetal = 600
    this.ingredients = [new SmallWheelST(), new MediumWheelST()]
  }
}
export class LargeWheel extends RareVehicleComponent {
  constructor() {
    super()
    this.id = 415
    this.name = 'Колесо большое'
    this.type = 'Колесо тяжелое'
    this.scrapMetal = 600
    this.ingredients = [new SmallWheel(), new WWT1()]
  }
}
export class LargeWheelST extends RareVehicleComponent {
  constructor() {
    super()
    this.id = 416
    this.name = 'Колесо большое (пов.)'
    this.type = 'Колесо тяжелое'
    this.scrapMetal = 600
    this.ingredients = [new MediumWheelST(), new WWT1()]
  }
}
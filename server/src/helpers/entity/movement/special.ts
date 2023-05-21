import { SpecialVehicleComponent } from '../specialVehicleComponent'
import { StuddedWheel, ChainedWheel, StuddedWheelST, ChainedWheelST, LargeWheel, BalloonTyre, LargeWheelST, BalloonTyreST, RacingWheel, LandingGear, RacingWheelST, LandingGearST } from './rare'

export class LunarIV extends SpecialVehicleComponent {
  constructor() {
    super()
    this.id = 417
    this.name = 'Лунар IV'
    this.type = 'Колесо легкое'
    this.ingredients = [new RacingWheel(), new LandingGear()]
  }
}
export class LunarIVST extends SpecialVehicleComponent {
  constructor() {
    super()
    this.id = 418
    this.name = 'Лунар IV(пов.)'
    this.type = 'Колесо легкое'
    this.ingredients = [new RacingWheelST(), new LandingGearST()]
  }
}
export class Camber extends SpecialVehicleComponent {
  constructor() {
    super()
    this.id = 419
    this.name = 'Развал'
    this.type = 'Колесо легкое'
    this.scrapMetal = 200
    this.wires = 200
    this.plastic = 30
    this.ingredients = [new RacingWheel(), new BalloonTyre()]
  }
}
export class CamberST extends SpecialVehicleComponent {
  constructor() {
    super()
    this.id = 420
    this.name = 'Развал(пов.)'
    this.type = 'Колесо легкое'
    this.scrapMetal = 200
    this.wires = 200
    this.plastic = 30
    this.ingredients = [new RacingWheelST(), new BalloonTyreST()]
  }
}
export class Shiv extends SpecialVehicleComponent {
  constructor() {
    super()
    this.id = 421
    this.name = 'Заточка'
    this.type = 'Колесо среднее'
    this.ingredients = [new StuddedWheel(), new ChainedWheel()]
  }
}
export class ShivST extends SpecialVehicleComponent {
  constructor() {
    super()
    this.id = 422
    this.name = 'Заточка(пов.)'
    this.type = 'Колесо среднее'
    this.ingredients = [new StuddedWheelST(), new ChainedWheelST()]
  }
}
export class APCWheel extends SpecialVehicleComponent {
  constructor() {
    super()
    this.id = 423
    this.name = 'Колесо броневика'
    this.type = 'Колесо тяжелое'
    this.ingredients = [new LargeWheel(), new BalloonTyre()]
  }
}
export class APCWheelST extends SpecialVehicleComponent {
  constructor() {
    super()
    this.id = 424
    this.name = 'Колесо броневика(пов.)'
    this.type = 'Колесо тяжелое'
    this.ingredients = [new LargeWheelST(), new BalloonTyreST()]
  }
}
export class TwinWheel extends SpecialVehicleComponent {
  constructor() {
    super()
    this.id = 425
    this.name = 'Колесо двойное'
    this.type = 'Колесо тяжелое'
    this.ingredients = [new LargeWheel(), new BalloonTyre()]
  }
}
export class TwinWheelST extends SpecialVehicleComponent {
  constructor() {
    super()
    this.id = 426
    this.name = 'Колесо двойное(пов.)'
    this.type = 'Колесо тяжелое'
    this.ingredients = [new LargeWheelST(), new BalloonTyreST()]
  }
}
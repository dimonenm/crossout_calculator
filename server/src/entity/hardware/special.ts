import { SpecialVehicleComponent } from '../specialVehicleComponent'
import { Trucker } from '../cabins/rare'
import { RacingWheelST, LandingGearST, RacingWheel, LandingGear } from '../movement/rare'
import { LittleBoy6LB, DTCobra, AD12Falcon } from '../weapons/rare'
import { R2Chill, AmmoPack, Blastoff, CSTaymyr, TS1Horizon, RD1Listener } from './rare'

export class Ampere extends SpecialVehicleComponent {
  constructor() {
    super()
    this.name = 'Ампер'
    this.type = 'Генератор'
    this.ingredients = [new RacingWheelST(), new R2Chill()]
  }
}
export class Genesis extends SpecialVehicleComponent {
  constructor() {
    super()
    this.name = 'Генезис'
    this.type = ''
    this.ingredients = [new AD12Falcon(), new AmmoPack()]
  }
}
export class Hardcore extends SpecialVehicleComponent {
  constructor() {
    super()
    this.name = 'Жесткач'
    this.type = ''
    this.ingredients = [new Blastoff(), new CSTaymyr()]
  }
}
export class Iris extends SpecialVehicleComponent {
  constructor() {
    super()
    this.name = 'Зеница'
    this.type = ''
    this.scrapMetal = 200
    this.wires = 200
    this.plastic = 30
    this.ingredients = [new TS1Horizon(), new RD1Listener()]
  }
}
export class KA1Discharger extends SpecialVehicleComponent {
  constructor() {
    super()
    this.name = 'КА-1 Разрядник'
    this.type = ''
    this.scrapMetal = 200
    this.wires = 200
    this.plastic = 30
    this.ingredients = [new CSTaymyr(), new Trucker()]
  }
}
export class Maxwell extends SpecialVehicleComponent {
  constructor() {
    super()
    this.name = 'Максвелл'
    this.type = ''
    this.ingredients = [new LandingGearST(), new TS1Horizon()]
  }
}
export class OculusVI extends SpecialVehicleComponent {
  constructor() {
    super()
    this.name = 'Окулус VI'
    this.type = ''
    this.ingredients = [new RD1Listener(), new TS1Horizon()]
  }
}
export class Razorback extends SpecialVehicleComponent {
  constructor() {
    super()
    this.name = 'Работяга'
    this.type = ''
    this.ingredients = [new Trucker(), new LittleBoy6LB()]
  }
}
export class DunHorse extends SpecialVehicleComponent {
  constructor() {
    super()
    this.name = 'Саврас'
    this.type = ''
    this.ingredients = [new RacingWheel(), new R2Chill()]
  }
}
export class Chameleon extends SpecialVehicleComponent {
  constructor() {
    super()
    this.name = 'Хамелеон'
    this.type = ''
    this.ingredients = [new LandingGear(), new CSTaymyr()]
  }
}
export class PU1Charge extends SpecialVehicleComponent {
  constructor() {
    super()
    this.name = 'ЭУ-1 Заряд'
    this.type = ''
    this.ingredients = [new DTCobra(), new TS1Horizon()]
  }
}
import { RareVehicleComponent } from '../rareVehicleComponent'
import { Docker, Huntsman } from '../cabins/common'
import { SmallWheel } from '../movement/common'
import { Avenger57mm } from '../weapons/common'
import { B1Aviator, CarJack, FuelBarrel, R1Breese, Radio, RS1Ruby } from './common'

export class FuelTank extends RareVehicleComponent {
  constructor() {
    super()
    this.name = 'Топливный бак'
    this.type = 'Особый модуль'
    this.scrapMetal = 650
    this.copper = 130
    this.ingredients = [new FuelBarrel(), new Docker()]
  }
}
export class RD1Listener extends RareVehicleComponent {
  constructor() {
    super()
    this.name = 'РЛС-1 Слухач'
    this.type = 'Радар'
    this.scrapMetal = 650
    this.copper = 130
    this.ingredients = [new FuelBarrel(), new RS1Ruby()]
  }
}
export class TS1Horizon extends RareVehicleComponent {
  constructor() {
    super()
    this.name = 'СП-1 Горизонт'
    this.type = 'Прицел'
    this.scrapMetal = 650
    this.copper = 130
    this.ingredients = [new Radio(), new SmallWheel()]
  }
}
export class BigG extends RareVehicleComponent {
  constructor() {
    super()
    this.name = 'Генка'
    this.type = 'Генератор'
    this.scrapMetal = 700
    this.copper = 130
    this.ingredients = [new B1Aviator(), new Avenger57mm()]
  }
}
export class Blastoff extends RareVehicleComponent {
  constructor() {
    super()
    this.name = 'Разгон'
    this.type = 'Ускоритель'
    this.scrapMetal = 650
    this.copper = 130
    this.ingredients = [new RS1Ruby(), new B1Aviator()]
  }
}
export class R2Chill extends RareVehicleComponent {
  constructor() {
    super()
    this.name = 'Р-2 Стужа'
    this.type = 'Радиатор'
    this.scrapMetal = 650
    this.copper = 130
    this.ingredients = [new R1Breese(), new Radio()]
  }
}
export class CSTaymyr extends RareVehicleComponent {
  constructor() {
    super()
    this.name = 'СО Таймыр'
    this.type = 'Охладитель'
    this.scrapMetal = 650
    this.copper = 130
    this.ingredients = [new Huntsman(), new R1Breese()]
  }
}
export class AmmoPack extends RareVehicleComponent {
  constructor() {
    super()
    this.name = 'Боезапас'
    this.type = 'Боеприпасы'
    this.scrapMetal = 650
    this.copper = 130
    this.ingredients = [new CarJack(), new Radio()]
  }
}
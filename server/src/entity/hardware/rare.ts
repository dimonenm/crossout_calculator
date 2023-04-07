import { RareVehicleComponent } from '../rareVehicleComponent'
import { Docker, Huntsman } from '../cabins/common'
import { SmallWheel } from '../movement/common'
import { Avenger57mm } from '../weapons/common'
import { B1Aviator, CarJack, FuelBarrel, R1Breese, Radio, RS1Ruby } from './common'

export class AmmoPack extends RareVehicleComponent {
  name = 'Боезапас'
  scrapMetal = 650
  copper = 130
  ingredients = [new CarJack(), new Radio()]
}

export class BigG extends RareVehicleComponent {
  name = 'Генка'
  scrapMetal = 700
  copper = 130
  ingredients = [new B1Aviator(), new Avenger57mm()]
}

export class R2Chill extends RareVehicleComponent {
  name = 'Р-2 Стужа'
  scrapMetal = 650
  copper = 130
  ingredients = [new R1Breese(), new Radio()]
}

export class Blastoff extends RareVehicleComponent {
  name = 'Разгон'
  scrapMetal = 650
  copper = 130
  ingredients = [new RS1Ruby(), new B1Aviator()]
}

export class RD1Listener extends RareVehicleComponent {
  name = 'РЛС-1 Слухач'
  scrapMetal = 650
  copper = 130
  ingredients = [new FuelBarrel(), new RS1Ruby()]
}

export class CSTaymyr extends RareVehicleComponent {
  name = 'СО Таймыр'
  scrapMetal = 650
  copper = 130
  ingredients = [new Huntsman(), new R1Breese()]
}

export class TS1Horizon extends RareVehicleComponent {
  name = 'СП-1 Горизонт'
  scrapMetal = 650
  copper = 130
  ingredients = [new Radio(), new SmallWheel()]
}

export class FuelTank extends RareVehicleComponent {
  name = 'Топливный бак'
  scrapMetal = 650
  copper = 130
  ingredients = [new FuelBarrel(), new Docker()]
}
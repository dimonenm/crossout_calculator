import { RareVehicleComponent } from '../rareVehicleComponent'
import { B1Aviator, CarJack, FuelBarrel, R1Breese, Radio, RS1Ruby } from '../hardware/common'
import { MediumWheelST } from '../movement/common'
import { Avenger57mm, Lupara, P54MAccord } from './common'

export class AC43Rapier extends RareVehicleComponent {
  name = 'АП43 Рапира'
  scrapMetal = 650
  copper = 130
  ingredients = [new B1Aviator(), new P54MAccord()]
}
export class AD12Falcon extends RareVehicleComponent {
  name = 'АД-12 Сокол'
  scrapMetal = 650
  copper = 130
  ingredients = [new RS1Ruby(), new P54MAccord()]
}
export class Borer extends RareVehicleComponent {
  name = 'Бур'
  scrapMetal = 650
  copper = 130
  ingredients = [new CarJack(), new R1Breese()]
}
export class Vector extends RareVehicleComponent {
  name = 'Вектор'
  scrapMetal = 650
  copper = 130
  ingredients = [new P54MAccord(), new CarJack()]
}
export class Sledgehammer extends RareVehicleComponent {
  name = 'Кувалда'
  scrapMetal = 650
  copper = 130
  ingredients = [new Lupara(), new CarJack()]
}
export class LittleBoy6LB extends RareVehicleComponent {
  name = 'Малыш 6Ф'
  scrapMetal = 650
  copper = 130
  ingredients = [new Avenger57mm(), new FuelBarrel()]
}
export class Wasp extends RareVehicleComponent {
  name = 'Оса'
  scrapMetal = 650
  copper = 130
  ingredients = [new FuelBarrel(), new Avenger57mm()]
}
export class Spitfire extends RareVehicleComponent {
  name = 'Очаг'
  scrapMetal = 650
  copper = 130
  ingredients = [new Lupara(), new B1Aviator()]
}
export class STM23Defender extends RareVehicleComponent {
  name = 'П-23 Защитник'
  scrapMetal = 650
  copper = 130
  ingredients = [new P54MAccord(), new R1Breese()]
}
export class Judge76mm extends RareVehicleComponent {
  name = 'П-23 Защитник'
  scrapMetal = 650
  copper = 130
  ingredients = [new MediumWheelST(), new Avenger57mm()]
}
export class DTCobra extends RareVehicleComponent {
  name = 'П-23 Защитник'
  scrapMetal = 650
  copper = 130
  ingredients = [new Lupara(), new Radio()]
}
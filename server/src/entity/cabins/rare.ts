import { RareVehicleComponent } from '../rareVehicleComponent'
import { RS1Ruby } from '../hardware/common'
import { Lupara } from '../weapons/common'
import { Docker, Huntsman, Sprinter } from './common'

export class Wyvern extends RareVehicleComponent {
  name = 'Виверна'
  scrapMetal = 700
  copper = 130
  ingredients = [new Huntsman(), new RS1Ruby()]
}

export class Trucker extends RareVehicleComponent {
  name = 'Дальнобой'
  scrapMetal = 700
  copper = 130
  ingredients = [new Sprinter(),new Docker()]
}

export class Growl extends RareVehicleComponent {
  name = 'Рык'
  scrapMetal = 700
  copper = 130
  ingredients = [new Sprinter(), new Lupara()]
}
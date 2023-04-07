import { ICarComponent } from '../../interfaces/carComponent.interface'
import { RareVehicleComponent } from '../rareVehicleComponent'
import { WWT1 } from '../cabins/common'
import { MediumWheel, MediumWheelST, SmallWheel, SmallWheelST } from './common'

export class LargeWheel extends RareVehicleComponent {
  name = 'Колесо большое'
  scrapMetal = 600
  copper = 130
  ingredients = [new SmallWheel(), new WWT1()]
}
export class LargeWheelST extends RareVehicleComponent {
  name = 'Колесо большое (пов.)'
  scrapMetal = 600
  copper = 130
  ingredients = [new MediumWheelST(), new WWT1()]
}
export class RacingWheel extends RareVehicleComponent {
  name = 'Колесо гоночное'
  scrapMetal = 600
  copper = 130
  ingredients = [new MediumWheel(), new SmallWheel()]
}

export class RacingWheelST extends RareVehicleComponent {
  name = 'Колесо гоночное (пов.)'
  scrapMetal = 600
  copper = 130
  ingredients = [new MediumWheelST(), new SmallWheelST()]
}

export class ChainedWheel extends RareVehicleComponent {
  name = 'Колесо с цепями'
  scrapMetal = 600
  copper = 130
  ingredients = [new MediumWheel(), new SmallWheel()]
}

export class ChainedWheelST extends RareVehicleComponent {
  name = 'Колесо с цепями (пов.)'
  scrapMetal = 600
  copper = 130
  ingredients = [new MediumWheelST(), new SmallWheelST()]
}

export class StuddedWheel extends RareVehicleComponent {
  name = 'Колесо с шипами'
  scrapMetal = 600
  copper = 130
  ingredients = [new SmallWheel(), new MediumWheel()]
}

export class StuddedWheelST extends RareVehicleComponent {
  name = 'Колесо с шипами(пов.)'
  scrapMetal = 600
  copper = 130
  ingredients = [new SmallWheelST(), new MediumWheelST()]
}

export class LandingGear extends RareVehicleComponent {
  name = 'Посадочное шасси'
  scrapMetal = 600
  copper = 130
  ingredients = [new SmallWheel(), new MediumWheel()]
}

export class LandingGearST extends RareVehicleComponent {
  name = 'Посадочное шасси (пов.)'
  scrapMetal = 600
  copper = 130
  ingredients = [new SmallWheelST(), new MediumWheelST()]
}

export class BalloonTyre extends RareVehicleComponent {
  name = 'Шина-баллон'
  scrapMetal = 600
  copper = 130
  ingredients = [new MediumWheel()]
}

export class BalloonTyreST extends RareVehicleComponent {
  name = 'Шина-баллон (пов.)'
  scrapMetal = 600
  copper = 130
  ingredients = [new SmallWheelST()]
}
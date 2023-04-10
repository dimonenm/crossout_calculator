import { EpicVehicleComponent } from '../epicVehicleComponent'
import { Bat } from '../cabins/special'
import { Razorback, Hardcore, Ampere, Chameleon, DunHorse } from '../hardware/special'
import { Buzzsaw, Mace, Goblin, Sidekick, Boom } from '../weapons/special'
import { APCWheelST, Camber, CamberST, LunarIV, LunarIVST, Shiv, ShivST, TwinWheel, TwinWheelST } from './special'

export class Bigfoot extends EpicVehicleComponent {
  name = 'Бигфут'
  ingredients = [new Shiv(), new Bat(), new TwinWheel()]
}
export class BigfootST extends EpicVehicleComponent {
  name = 'Бигфут (пов.)'
  ingredients = [new ShivST(), new Bat(), new TwinWheelST()]
}
export class ArmoredTrack extends EpicVehicleComponent {
  name = 'Гусеница бронированная'
  ingredients = [new TwinWheel(), new TwinWheelST(), new Razorback()]
}
export class SmallTrack extends EpicVehicleComponent {
  name = 'Гусеница малая'
  ingredients = [new Hardcore(), new Buzzsaw(), new Mace()]
}
export class HardenedTrack extends EpicVehicleComponent {
  name = 'Гусеница укрепленная'
  ingredients = [new Ampere(), new Chameleon(), new DunHorse()]
}
export class Hermit extends EpicVehicleComponent {
  name = 'Затворник'
  ingredients = [new Buzzsaw(), new Goblin(), new Boom()]
}
export class HermitST extends EpicVehicleComponent {
  name = 'Затворник (пов.)'
  ingredients = [new Hardcore(), new Mace(), new Boom()]
}
export class IcarusVII extends EpicVehicleComponent {
  name = 'Икар VII'
  ingredients = [new LunarIVST(), new LunarIV(), new DunHorse()]
}
export class BuggyWheel extends EpicVehicleComponent {
  name = 'Колесо багги'
  scrapMetal = 250
  wires = 200
  copper = 250
  plastic = 60
  batteries = 100
  ingredients = [new Buzzsaw(), new Hardcore(), new Mace()]
}
export class BuggyWheelST extends EpicVehicleComponent {
  name = 'Колесо багги (пов.)'
  scrapMetal = 250
  wires = 200
  copper = 250
  plastic = 60
  batteries = 100
  ingredients = [new Buzzsaw(), new Mace(), new Boom()]
}
export class ML200 extends EpicVehicleComponent {
  name = 'МН-Л 200'
  ingredients = [new Sidekick(), new APCWheelST(), new Razorback()]
}
export class MeatGrinder extends EpicVehicleComponent {
  name = 'Мясорубка'
  ingredients = [new Shiv(), new ShivST(), new Buzzsaw()]
}
export class Omni extends EpicVehicleComponent {
  name = 'Омни'
  scrapMetal = 250
  wires = 200
  copper = 250
  plastic = 60
  batteries = 100
  ingredients = [new Camber(), new CamberST(), new TwinWheelST()]
}
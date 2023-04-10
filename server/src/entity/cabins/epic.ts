import { EpicVehicleComponent } from '../epicVehicleComponent'
import { Hardcore, Razorback, Genesis, PU1Charge, Ampere, OculusVI } from '../hardware/special'
import { APCWheel, APCWheelST, Shiv, ShivST } from '../movement/special'
import { Goblin, Buzzsaw, Synthesis, Sinus0, Tempura, AD13Hawk } from '../weapons/special'
import { Jawbreaker, Bat, Pilgrim } from './special'

export class Jannabi extends EpicVehicleComponent {
  name = 'Джаннаби'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 250
  wires = 200
  copper = 250
  plastic = 60
  batteries = 100
  ingredients = [new Bat(), new Tempura(), new Razorback()]
}
export class Harpy extends EpicVehicleComponent {
  name = 'Гарпия'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 100
  ingredients = [new Bat(), new Shiv(), new Sinus0()]
}
export class Werewolf extends EpicVehicleComponent {
  name = 'Оборотень'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 1
  ingredients = [new Bat(), new ShivST(), new Ampere()]
}
export class Aggressor extends EpicVehicleComponent {
  name = 'Агрессор'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 250
  wires = 200
  copper = 250
  plastic = 60
  batteries = 100
  ingredients = [new Hardcore(), new Goblin(), new Buzzsaw()]
}



export class Quantum extends EpicVehicleComponent {
  name = 'Квант'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 100
  ingredients = [new Pilgrim(), new Genesis(), new AD13Hawk()]
}
export class Photon extends EpicVehicleComponent {
  name = 'Фотон'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 100
  ingredients = [new Pilgrim(), new Synthesis(), new AD13Hawk()]
}



export class Humpback extends EpicVehicleComponent {
  name = 'Горбун'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 100
  ingredients = [new Jawbreaker(), new APCWheel(), new Razorback()]
}
export class Bastion extends EpicVehicleComponent {
  name = 'Бастион'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 100
  ingredients = [new Jawbreaker(), new APCWheelST(), new PU1Charge()]
}
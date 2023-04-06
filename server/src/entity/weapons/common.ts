import { ICarComponent } from '../../interfaces/carComponent.interface'
import { VehicleComponent } from '../vehicleComponent'

export class P54MAccord extends VehicleComponent {
  constructor() {
    super()
    this.name = 'П-54М Аккорд'
    this.rarity = 'common'
    this.scrapMetal = 30
    this.copper = 6
  }
}

export class Lupara extends VehicleComponent {
  constructor() {
    super()
    this.name = 'Обрез'
    this.rarity = 'common'
    this.scrapMetal = 30
    this.copper = 6
  }
}

export class Avenger57mm extends VehicleComponent {
  constructor() {
    super()
    this.name = 'Мститель 57мм'
    this.rarity = 'common'
    this.scrapMetal = 30
    this.copper = 6
  }
}
import { CommonVehicleComponent } from '../commonVehicleComponent'

export class Docker extends CommonVehicleComponent {
  constructor() {
    super()
    this.name = 'Докер'
    this.scrapMetal = 75
    this.copper = 15
  }
}
export class Sprinter extends CommonVehicleComponent {
  constructor() {
    super()
    this.name = 'Спринтер'
    this.scrapMetal = 75
    this.copper = 15
  }
}
export class Huntsman extends CommonVehicleComponent {
  constructor() {
    super()
    this.name = 'Егерь'
    this.scrapMetal = 75
    this.copper = 15
  }
}
export class WWT1 extends CommonVehicleComponent {
  constructor() {
    super()
    this.name = 'WWT1'
    this.scrapMetal = 75
    this.copper = 15
  }
}
export class Duster extends CommonVehicleComponent {
  constructor() {
    super()
    this.name = 'Кастет'
    this.scrapMetal = 0
    this.copper = 0
  }
}
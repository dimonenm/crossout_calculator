import { ICarComponent } from '../../interfaces/carComponent.interface'

export class SmallWheel implements ICarComponent {
  name: string = 'Колесо малое'
  rarity = 'common'
  scrapMetal: number = 15
  copper: number = 3

  getScrapMetal() {
    return this.scrapMetal
  }
}
export class SmallWheelST implements ICarComponent {
  name: string = 'Колесо малое (пов.)'
  rarity = 'common'
  scrapMetal: number = 15
  copper: number = 3

  getScrapMetal() {
    return this.scrapMetal
  }
}
export class MediumWheel implements ICarComponent {
  name: string = 'Колесо среднее'
  rarity = 'common'
  scrapMetal: number = 15
  copper: number = 3

  getScrapMetal() {
    return this.scrapMetal
  }
}
export class MediumWheelST implements ICarComponent {
  name: string = 'Колесо среднее (пов.)'
  rarity = 'common'
  scrapMetal: number = 15
  copper: number = 3

  getScrapMetal() {
    return this.scrapMetal
  }
}
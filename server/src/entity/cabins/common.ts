import { ICarComponent } from '../../interfaces/carComponent.interface'

export class Docker implements ICarComponent {
  name: string = 'Докер'
  rarity = 'common'
  scrapMetal: number = 75
  copper: number = 15

  getScrapMetal() {
    return this.scrapMetal
  }
}

export class Sprinter implements ICarComponent {
  name: string = 'Спринтер'
  rarity = 'common'
  scrapMetal: number = 75
  copper: number = 15

  getScrapMetal() {
    return this.scrapMetal
  }
}

export class Huntsman implements ICarComponent {
  name: string = 'Егерь'
  rarity = 'common'
  scrapMetal: number = 75
  copper: number = 15

  getScrapMetal() {
    return this.scrapMetal
  }
}

export class WWT1 implements ICarComponent {
  name: string = 'WWT1'
  rarity = 'common'
  scrapMetal: number = 75
  copper: number = 15

  getScrapMetal() {
    return this.scrapMetal
  }
}

export class Duster implements ICarComponent {
  name: string = 'Кастет'
  rarity = 'common'
  scrapMetal: number = 0
  copper: number = 0

  getScrapMetal() {
    return this.scrapMetal
  }
}
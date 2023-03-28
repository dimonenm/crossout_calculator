import { ICarComponent } from '../../interfaces/carComponent.interface'

export class P54MAccord implements ICarComponent {
  name = 'П-54М Аккорд'
  rarity = 'common'
  scrapMetal = 30
  copper = 6

  getScrapMetal() {
    return this.scrapMetal
  }
}

export class Lupara implements ICarComponent {
  name = 'Обрез'
  rarity = 'common'
  scrapMetal = 30
  copper = 6

  getScrapMetal() {
    return this.scrapMetal
  }
}

export class Avenger57mm implements ICarComponent {
  name = 'Мститель 57мм'
  rarity = 'common'
  scrapMetal = 30
  copper = 6

  getScrapMetal() {
    return this.scrapMetal
  }
}
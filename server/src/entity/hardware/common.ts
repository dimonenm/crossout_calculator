import { ICarComponent } from '../../interfaces/carComponent.interface'

export class B1Aviator implements ICarComponent {
  name = 'У-1 Авиатор'
  rarity = 'common'
  scrapMetal = 55
  copper = 11

  getScrapMetal() {
    return this.scrapMetal
  }
}

export class Radio implements ICarComponent {
  name = 'Радио'
  rarity = 'common'
  scrapMetal = 20
  copper = 4

  getScrapMetal() {
    return this.scrapMetal
  }
}

export class CarJack implements ICarComponent {
  name = 'Домкрат'
  rarity = 'common'
  scrapMetal = 20
  copper = 4

  getScrapMetal() {
    return this.scrapMetal
  }
}

export class R1Breese implements ICarComponent {
  name = 'Р-1 Холодок'
  rarity = 'common'
  scrapMetal = 20
  copper = 4

  getScrapMetal() {
    return this.scrapMetal
  }
}

export class RS1Ruby implements ICarComponent {
  name = 'РУ-1 Рубин'
  rarity = 'common'
  scrapMetal = 35
  copper = 8

  getScrapMetal() {
    return this.scrapMetal
  }
}

export class FuelBarrel implements ICarComponent {
  name = 'Топливная бочка'
  rarity = 'common'
  scrapMetal = 60
  copper = 12

  getScrapMetal() {
    return this.scrapMetal
  }
}
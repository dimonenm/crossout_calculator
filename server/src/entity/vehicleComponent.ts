import { ICarComponent } from '../interfaces/carComponent.interface';

export class VehicleComponent {
  name: string
  rarity: string
  benchCost: number
  scrapMetal: number
  copper: number
  wires: number
  plastic: number
  batteries: number
  engravedCasings: number
  ingredients: VehicleComponent[]

  constructor() {
    this.name = ''
    this.rarity = ''
    this.benchCost = 0
    this.scrapMetal = 0
    this.copper = 0
    this.wires = 0
    this.plastic = 0
    this.batteries = 0
    this.engravedCasings = 0
    this.ingredients = []
  }

  getScrapMetal = (): number => {
    return this.scrapMetal
  }
  getAllScrapMetal = (): number => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getAllScrapMetal()
    }
    return scrapMetalCount
  }
}
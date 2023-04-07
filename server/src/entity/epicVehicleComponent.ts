import { SpecialVehicleComponent } from './specialVehicleComponent'

export class EpicVehicleComponent {
  name: string
  rarity: string
  productionTime: number
  benchCost: number
  scrapMetal: number
  copper: number
  wires: number
  plastic: number
  batteries: number
  engravedCasings: number
  ingredients: SpecialVehicleComponent[]

  constructor() {
    this.name = ''
    this.rarity = 'epic'
    this.productionTime = 120
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
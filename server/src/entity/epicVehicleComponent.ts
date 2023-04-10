import { SpecialVehicleComponent } from './specialVehicleComponent'

export class EpicVehicleComponent {
  name: string
  type: string
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
    this.type = ''
    this.rarity = 'epic'
    this.productionTime = 120
    this.benchCost = 15
    this.scrapMetal = 100
    this.copper = 150
    this.wires = 200
    this.plastic = 100
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
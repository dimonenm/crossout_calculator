import { CommonVehicleComponent } from './commonVehicleComponent'

export class RareVehicleComponent {
  name: string
  rarity: string
  productionTime: number
  benchCost: number
  scrapMetal: number
  copper: number
  ingredients: CommonVehicleComponent[]

  constructor() {
    this.name = ''
    this.rarity = 'rare'
    this.productionTime = 15
    this.benchCost = 3
    this.scrapMetal = 0
    this.copper = 0
    this.ingredients = []
  }

  getScrapMetal = (): number => { return this.scrapMetal }
  getCopper = (): number => { return this.copper }
  getAllScrapMetal = (): number => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
  getAllCopper = (): number => {
    let copperCount = this.getCopper()
    for (let item of this.ingredients) {
      copperCount += item.getCopper()
    }
    return copperCount
  }
}
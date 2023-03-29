export interface ICarComponent{
  name: string
  rarity: string
  benchCost?: number
  scrapMetal: number
  copper: number
  wires?: number
  plastic?: number
  ingredients?: ICarComponent[]

  getScrapMetal: () => number
  getAllScrapMetal?: () => number
}
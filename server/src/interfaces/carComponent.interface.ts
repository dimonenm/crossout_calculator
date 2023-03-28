export interface ICarComponent{
  name: string
  rarity: string
  benchCost?: number
  scrapMetal: number
  copper: number
  ingredients?: ICarComponent[]

  getScrapMetal: () => number
  getAllScrapMetal?: () => number
}
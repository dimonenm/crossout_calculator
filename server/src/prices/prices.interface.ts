export interface IPrices {
  id: number
  dbId: number
  name: string
  dbName: string
  buyPrice: number
  sellPrice: number
}
export interface IResourcePrices extends Array<IPrices> { }
export interface ICabinPrices extends Array<IPrices> { }
export interface IWeaponPrices extends Array<IPrices> { }
export interface IHardwarePrices extends Array<IPrices> { }
export interface IMovementPrices extends Array<IPrices> { }
export interface IAllPrices {
  resourcePrices: IResourcePrices
  cabinPrices: ICabinPrices
  weaponPrices: IWeaponPrices
  hardwarePrices: IHardwarePrices
  movementPrices: IMovementPrices
}

export interface ICommonVehicleComponent {
  id: number
  name: string
  type: string
  rarity: string
  buyPrice: number
  sellPrice: number
  scrapMetal: number
  copper: number

  getScrapMetal(): number
  getCopper(): number
}
export interface IRareVehicleComponent {
  id: number
  name: string
  type: string
  rarity: string
  buyPrice: number
  sellPrice: number
  productionTime: number
  benchCost: number
  scrapMetal: number
  copper: number
  ingredients: ICommonVehicleComponent[]

  getScrapMetal(): number
  getCopper(): number
  getBenchCost(): number
  getAllScrapMetal(): number
  getAllCopper(): number
}
export interface ISpecialVehicleComponent {
  id: number
  name: string
  type: string
  rarity: string
  buyPrice: number
  sellPrice: number
  productionTime: number
  benchCost: number
  scrapMetal: number
  copper: number
  wires: number
  plastic: number
  engravedCasings: number
  ingredients: IRareVehicleComponent[]

  getScrapMetal(): number
  getCopper(): number
  getWires(): number
  getPlastic(): number
  getEngravedCasings(): number
  getBenchCost(): number
  getAllScrapMetal(): number
  getAllCopper(): number
  getAllBenchCost(): number
}
export interface IEpicVehicleComponent {
  id: number
  name: string
  type: string
  rarity: string
  buyPrice: number
  sellPrice: number
  productionTime: number
  benchCost: number
  scrapMetal: number
  copper: number
  wires: number
  plastic: number
  batteries: number
  engravedCasings: number
  ingredients: ISpecialVehicleComponent[]

  getScrapMetal(): number
  getCopper(): number
  getWires(): number
  getPlastic(): number
  getBatteries(): number
  getEngravedCasings(): number
  getBenchCost(): number
  getAllScrapMetal(): number
  getAllCopper(): number
  getAllWires(): number
  getAllPlastic(): number
  getAllEngravedCasings(): number
  getAllBenchCost(): number
}
export interface IAllVehicleComponents extends Array<ICommonVehicleComponent[] | IRareVehicleComponent[] | ISpecialVehicleComponent[] | IEpicVehicleComponent[]> {
  [index: number]: ICommonVehicleComponent[] | IRareVehicleComponent[] | ISpecialVehicleComponent[] | IEpicVehicleComponent[]
  // cabinsCommon: ICommonVehicleComponent[],
  // cabinsRare: IRareVehicleComponent[],
  // cabinsSpecial: ISpecialVehicleComponent[],
  // cabinsEpic: IEpicVehicleComponent[],
  // weaponsCommon: ICommonVehicleComponent[],
  // weaponsRare: IRareVehicleComponent[],
  // weaponsSpecial: ISpecialVehicleComponent[],
  // weaponsEpic: IEpicVehicleComponent[],
  // hardwaresCommon: ICommonVehicleComponent[],
  // hardwaresRare: IRareVehicleComponent[],
  // hardwaresSpecial: ISpecialVehicleComponent[],
  // hardwaresEpic: IEpicVehicleComponent[],
  // movementsCommon: ICommonVehicleComponent[],
  // movementsRare: IRareVehicleComponent[],
  // movementsSpecial: ISpecialVehicleComponent[],
  // movementsEpic: IEpicVehicleComponent[]
}

export interface IListItem{
  id: number
  name: string
  profitRatio: number
}
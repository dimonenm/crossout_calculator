import { CommonVehicleComponent } from 'src/helpers/entity/commonVehicleComponent'
import { EpicVehicleComponent } from 'src/helpers/entity/epicVehicleComponent'
import { RareVehicleComponent } from 'src/helpers/entity/rareVehicleComponent'
import { SpecialVehicleComponent } from 'src/helpers/entity/specialVehicleComponent'

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

export interface IAllVehicleComponents extends Array<CommonVehicleComponent[] | RareVehicleComponent[] | SpecialVehicleComponent[] | EpicVehicleComponent[]> { }

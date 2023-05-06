interface IPrices {
  name: string
  buyPrice: number
  sellPrice: number
}
export interface IResourcePrices {
  scrapMetal: IPrices
  copper: IPrices
  wires: IPrices
  plastic: IPrices
  batteries: IPrices
  electronics: IPrices
  engravedCasings: IPrices
}
export interface ICabinPrices {
  Sprinter: IPrices
  Huntsman: IPrices
  WWT1: IPrices
  Docker: IPrices

  Growl: IPrices
  Wyvern: IPrices
  Trucker: IPrices
  
  Bat: IPrices
  Pilgrim: IPrices
  Jawbreaker: IPrices
  
  Jannabi: IPrices
  Harpy: IPrices
  Werewolf: IPrices
  Aggressor: IPrices
  Quantum: IPrices
  Photon: IPrices
  Humpback: IPrices
  Bastion: IPrices
}
export interface IWeaponPrices {
  Sprinter: IPrices
  Huntsman: IPrices
  WWT1: IPrices
  Docker: IPrices

  Growl: IPrices
  Wyvern: IPrices
  Trucker: IPrices
  
  Bat: IPrices
  Pilgrim: IPrices
  Jawbreaker: IPrices
  
  Jannabi: IPrices
  Harpy: IPrices
  Werewolf: IPrices
  Aggressor: IPrices
  Quantum: IPrices
  Photon: IPrices
  Humpback: IPrices
  Bastion: IPrices
}
export interface IPrices {
  id: number
  dbId: number
  name: string
  dbName: string
  buyPrice: number
  sellPrice: number
}
export interface IResourcePrices {
  resources: [
    scrapMetal: IPrices,
    copper: IPrices,
    wires: IPrices,
    plastic: IPrices,
    batteries: IPrices,
    electronics: IPrices,
    engravedCasings: IPrices,
  ]
}
export interface ICabinPrices {
  cabins: [
    Sprinter: IPrices,
    Huntsman: IPrices,
    WWT1: IPrices,
    Docker: IPrices,

    Growl: IPrices,
    Wyvern: IPrices,
    Trucker: IPrices,

    Bat: IPrices,
    Pilgrim: IPrices,
    Jawbreaker: IPrices,
    
    Jannabi: IPrices,
    Harpy: IPrices,
    Werewolf: IPrices,
    Aggressor: IPrices,
    Quantum: IPrices,
    Photon: IPrices,
    Humpback: IPrices,
    Bastion: IPrices,
  ]
}
export interface IWeaponPrices {
  weapons: [
    P54MAccord: IPrices,
    Lupara: IPrices,
    Avenger57mm: IPrices,
    
    STM23Defender: IPrices,
    Vector: IPrices,
    Sledgehammer: IPrices,
    Spitfire: IPrices,
    AC43Rapier: IPrices,
    LittleBoy6LB: IPrices,
    Judge76mm: IPrices,
    Wasp: IPrices,
    Borer: IPrices,
    AD12Falcon: IPrices,
    DTCobra: IPrices,
    
    M37Piercer: IPrices,
    Sinus0: IPrices,
    Goblin: IPrices,
    Junkbow: IPrices,
    Mace: IPrices,
    AC50Storm: IPrices,
    ZS33Hulk: IPrices,
    Prosecutor76mm: IPrices,
    Synthesis: IPrices,
    Boom: IPrices,
    Tempura: IPrices,
    Buzzsaw: IPrices,
    AD13Hawk: IPrices,
    Sidekick: IPrices,
    T3Python: IPrices,
    
    M29Protector: IPrices,
    M38Fidget: IPrices,
    Spectre2: IPrices,
    MG13Equalizer: IPrices,
    Caucasus: IPrices,
    Gremlin: IPrices,
    Fafnir: IPrices,
    Thunderbolt: IPrices,
    Rupture: IPrices,
    AC72Whirlwind: IPrices,
    ZS34FatMan: IPrices,
    Executioner88mm: IPrices,
    Cricket: IPrices,
    Pyre: IPrices,
    ClarinetTOW: IPrices,
    Thresher: IPrices,
    GL55Impulse: IPrices,
    Aurora: IPrices,
    Quasar: IPrices,
    PrometheusV: IPrices,
    Phoenix: IPrices,
    Lancelot: IPrices,
    Mauler: IPrices,
    Incinerator: IPrices,
    MD3Owl: IPrices,
    Fuze: IPrices,
    RTAnaconda: IPrices,
    BarrierIX: IPrices,
    Yaoguai: IPrices,
    Skinner: IPrices,
  ]
}
export interface IHardwarePrices {
  hardwares: [
    FuelBarrel: IPrices,
    CarJack: IPrices,
    Radio: IPrices,
    RS1Ruby: IPrices,
    B1Aviator: IPrices,
    R1Breese: IPrices,
    
    FuelTank: IPrices,
    RD1Listener: IPrices,
    TS1Horizon: IPrices,
    BigG: IPrices,
    Blastoff: IPrices,
    R2Chill: IPrices,
    CSTaymyr: IPrices,
    AmmoPack: IPrices,
    
    Chameleon: IPrices,
    KA1Discharger: IPrices,
    OculusVI: IPrices,
    Maxwell: IPrices,
    PU1Charge: IPrices,
    Ampere: IPrices,
    Hardcore: IPrices,
    Razorback: IPrices,
    DunHorse: IPrices,
    Genesis: IPrices,
    
    Tormentor: IPrices,
    ChameleonMk2: IPrices,
    KA2Flywheel: IPrices,
    Doppler: IPrices,
    RD2Keen: IPrices,
    Neutrino: IPrices,
    Gasgen: IPrices,
    Oppressor: IPrices,
    HotRed: IPrices,
    Colossus: IPrices,
    Cheetah: IPrices,
    Hermes: IPrices,
    RNSeal: IPrices,
    Shiver: IPrices,
    ExpandedAmmoPack: IPrices,
  ]
}
export interface IMovementPrices {
  movements: [
    SmallWheel: IPrices,
    SmallWheelST: IPrices,
    MediumWheel: IPrices,
    MediumWheelST: IPrices,

    StuddedWheel: IPrices,
    StuddedWheelST: IPrices,
    ChainedWheel: IPrices,
    ChainedWheelST: IPrices,
    BalloonTyre: IPrices,
    BalloonTyreST: IPrices,
    RacingWheel: IPrices,
    RacingWheelST: IPrices,
    LandingGear: IPrices,
    LandingGearST: IPrices,
    LargeWheel: IPrices,
    LargeWheelST: IPrices,

    LunarIV: IPrices,
    LunarIVST: IPrices,
    Camber: IPrices,
    CamberST: IPrices,
    Shiv: IPrices,
    ShivST: IPrices,
    APCWheel: IPrices,
    APCWheelST: IPrices,
    TwinWheel: IPrices,
    TwinWheelST: IPrices,

    BuggyWheel: IPrices,
    BuggyWheelST: IPrices,
    Bigfoot: IPrices,
    BigfootST: IPrices,
    Omni: IPrices,
    SmallTrack: IPrices,
    HardenedTrack: IPrices,
    ArmoredTrack: IPrices,
    IcarusVII: IPrices,
    ML200: IPrices,
    MeatGrinder: IPrices,
  ]
}
export interface IAllPrices{
  resourcePrices: IResourcePrices
  cabinPrices: ICabinPrices
  weaponPrices: IWeaponPrices
  hardwarePrices: IHardwarePrices
  movementPrices: IMovementPrices
}

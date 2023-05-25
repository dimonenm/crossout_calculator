import { Injectable } from '@nestjs/common'
import { Sprinter, Huntsman, WWT1, Docker } from 'src/helpers/entity/cabins/common'
import { Jannabi, Harpy, Werewolf, Aggressor, Quantum, Photon, Humpback, Bastion } from 'src/helpers/entity/cabins/epic'
import { Growl, Wyvern, Trucker } from 'src/helpers/entity/cabins/rare'
import { Bat, Pilgrim, Jawbreaker } from 'src/helpers/entity/cabins/special'
import { CommonVehicleComponent } from 'src/helpers/entity/commonVehicleComponent'
import { EpicVehicleComponent } from 'src/helpers/entity/epicVehicleComponent'
import { FuelBarrel, CarJack, Radio, RS1Ruby, B1Aviator, R1Breese } from 'src/helpers/entity/hardware/common'
import { Tormentor, ChameleonMk2, KA2Flywheel, Doppler, RD2Keen, Neutrino, Gasgen, Oppressor, HotRed, Colossus, Cheetah, Hermes, RNSeal, Shiver, ExpandedAmmoPack } from 'src/helpers/entity/hardware/epic'
import { FuelTank, RD1Listener, TS1Horizon, BigG, Blastoff, R2Chill, CSTaymyr, AmmoPack } from 'src/helpers/entity/hardware/rare'
import { Chameleon, KA1Discharger, OculusVI, Maxwell, PU1Charge, Ampere, Hardcore, Razorback, DunHorse, Genesis } from 'src/helpers/entity/hardware/special'
import { SmallWheel, SmallWheelST, MediumWheel, MediumWheelST } from 'src/helpers/entity/movement/common'
import { BuggyWheel, BuggyWheelST, Bigfoot, BigfootST, Omni, SmallTrack, HardenedTrack, ArmoredTrack, IcarusVII, ML200, MeatGrinder } from 'src/helpers/entity/movement/epic'
import { StuddedWheel, StuddedWheelST, ChainedWheel, ChainedWheelST, BalloonTyre, BalloonTyreST, RacingWheel, RacingWheelST, LandingGear, LandingGearST, LargeWheel, LargeWheelST } from 'src/helpers/entity/movement/rare'
import { LunarIV, LunarIVST, Camber, CamberST, Shiv, ShivST, APCWheel, APCWheelST, TwinWheel, TwinWheelST } from 'src/helpers/entity/movement/special'
import { RareVehicleComponent } from 'src/helpers/entity/rareVehicleComponent'
import { SpecialVehicleComponent } from 'src/helpers/entity/specialVehicleComponent'
import { P54MAccord, Lupara, Avenger57mm } from 'src/helpers/entity/weapons/common'
import { M29Protector, M38Fidget, Spectre2, MG13Equalizer, Caucasus, Gremlin, Fafnir, Thunderbolt, Rupture, AC72Whirlwind, ZS34FatMan, Executioner88mm, Cricket, Pyre, ClarinetTOW, Thresher, GL55Impulse, Aurora, Quasar, PrometheusV, Phoenix, Lancelot, Mauler, Incinerator, MD3Owl, Fuze, RTAnaconda, BarrierIX, Yaoguai, Skinner } from 'src/helpers/entity/weapons/epic'
import { STM23Defender, Vector, Sledgehammer, Spitfire, AC43Rapier, LittleBoy6LB, Judge76mm, Wasp, Borer, AD12Falcon, DTCobra } from 'src/helpers/entity/weapons/rare'
import { M37Piercer, Sinus0, Goblin, Junkbow, Mace, AC50Storm, ZS33Hulk, Prosecutor76mm, Synthesis, Boom, Tempura, Buzzsaw, AD13Hawk, Sidekick, T3Python } from 'src/helpers/entity/weapons/special'
import { getPricesFromDbAPI } from '../helpers/db/helpers'
import { IResourcePrices, ICabinPrices, IWeaponPrices, IHardwarePrices, IMovementPrices, IAllPrices, IAllVehicleComponents, ICommonVehicleComponent, IEpicVehicleComponent, IRareVehicleComponent, ISpecialVehicleComponent, IListItem } from './prices.interface'

@Injectable()
export class PricesService {
  // private intervalId: NodeJS.Timer
  resourcePrices: IResourcePrices
  cabinPrices: ICabinPrices
  weaponPrices: IWeaponPrices
  hardwarePrices: IHardwarePrices
  movementPrices: IMovementPrices
  allPrices: IAllPrices
  cabinsCommon: ICommonVehicleComponent[]
  cabinsRare: IRareVehicleComponent[]
  cabinsSpecial: ISpecialVehicleComponent[]
  cabinsEpic: IEpicVehicleComponent[]
  weaponsCommon: ICommonVehicleComponent[]
  weaponsRare: IRareVehicleComponent[]
  weaponsSpecial: ISpecialVehicleComponent[]
  weaponsEpic: IEpicVehicleComponent[]
  hardwaresCommon: ICommonVehicleComponent[]
  hardwaresRare: IRareVehicleComponent[]
  hardwaresSpecial: ISpecialVehicleComponent[]
  hardwaresEpic: IEpicVehicleComponent[]
  movementsCommon: ICommonVehicleComponent[]
  movementsRare: IRareVehicleComponent[]
  movementsSpecial: ISpecialVehicleComponent[]
  movementsEpic: IEpicVehicleComponent[]
  allVehicleComponents: IAllVehicleComponents = []


  constructor() {
    this.resourcePrices = [
      {
        id: 1,
        dbId: 53,
        name: 'scrapMetal',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 2,
        dbId: 43,
        name: 'copper',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 3,
        dbId: 85,
        name: 'wires',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 4,
        dbId: 785,
        name: 'plastic',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 5,
        dbId: 783,
        name: 'batteries',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 6,
        dbId: 201,
        name: 'electronics',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 7,
        dbId: 919,
        name: 'engravedCasings',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      }
    ]
    this.cabinPrices = [
      {
        id: 101,
        dbId: 960,
        name: 'Sprinter',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 102,
        dbId: 120,
        name: 'Huntsman',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 103,
        dbId: 88,
        name: 'WWT1',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 104,
        dbId: 96,
        name: 'Docker',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 105,
        dbId: 60,
        name: 'Growl',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 106,
        dbId: 64,
        name: 'Wyvern',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 107,
        dbId: 39,
        name: 'Trucker',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 108,
        dbId: 599,
        name: 'Bat',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 109,
        dbId: 506,
        name: 'Pilgrim',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 110,
        dbId: 371,
        name: 'Jawbreaker',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 111,
        dbId: 1237,
        name: 'Jannabi',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 112,
        dbId: 927,
        name: 'Harpy',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 113,
        dbId: 613,
        name: 'Werewolf',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 114,
        dbId: 1307,
        name: 'Aggressor',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 115,
        dbId: 505,
        name: 'Quantum',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 116,
        dbId: 926,
        name: 'Photon',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 117,
        dbId: 372,
        name: 'Humpback',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 118,
        dbId: 925,
        name: 'Bastion',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      }
    ]
    this.weaponPrices = [
      {
        id: 201,
        dbId: 93,
        name: 'P54MAccord',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 202,
        dbId: 5,
        name: 'Lupara',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 203,
        dbId: 99,
        name: 'Avenger57mm',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 204,
        dbId: 74,
        name: 'STM23Defender',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 205,
        dbId: 7,
        name: 'Vector',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 206,
        dbId: 2,
        name: 'Sledgehammer',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 207,
        dbId: 4,
        name: 'Spitfire',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 208,
        dbId: 34,
        name: 'AC43Rapier',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 209,
        dbId: 61,
        name: 'LittleBoy6LB',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 210,
        dbId: 70,
        name: 'Judge76mm',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 211,
        dbId: 44,
        name: 'Wasp',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 212,
        dbId: 51,
        name: 'Borer',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 213,
        dbId: 94,
        name: 'AD12Falcon',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 214,
        dbId: 123,
        name: 'DTCobra',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 215,
        dbId: 763,
        name: 'M37Piercer',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 216,
        dbId: 1053,
        name: 'Sinus0',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 217,
        dbId: 457,
        name: 'Goblin',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 218,
        dbId: 598,
        name: 'Junkbow',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 219,
        dbId: 1057,
        name: 'Mace',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 220,
        dbId: 1051,
        name: 'AC50Storm',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 221,
        dbId: 1050,
        name: 'ZS33Hulk',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 222,
        dbId: 1049,
        name: 'Prosecutor76mm',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 223,
        dbId: 475,
        name: 'Synthesis',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 224,
        dbId: 72,
        name: 'Boom',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 225,
        dbId: 1251,
        name: 'Tempura',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 226,
        dbId: 73,
        name: 'Buzzsaw',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 227,
        dbId: 1060,
        name: 'AD13Hawk',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 228,
        dbId: 373,
        name: 'Sidekick',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 229,
        dbId: 1065,
        name: 'T3Python',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 230,
        dbId: 928,
        name: 'M29Protector',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 231,
        dbId: 865,
        name: 'M38Fidget',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 232,
        dbId: 40,
        name: 'Spectre2',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 233,
        dbId: 31,
        name: 'MG13Equalizer',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 234,
        dbId: 375,
        name: 'Caucasus',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 235,
        dbId: 1316,
        name: 'Gremlin',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 236,
        dbId: 765,
        name: 'Fafnir',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 237,
        dbId: 1,
        name: 'Thunderbolt',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 238,
        dbId: 1012,
        name: 'Rupture',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 239,
        dbId: 32,
        name: 'AC72Whirlwind',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 240,
        dbId: 8,
        name: 'ZS34FatMan',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 241,
        dbId: 45,
        name: 'Executioner88mm',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 242,
        dbId: 38,
        name: 'Cricket',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 243,
        dbId: 6,
        name: 'Pyre',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 244,
        dbId: 374,
        name: 'ClarinetTOW',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 245,
        dbId: 1314,
        name: 'Thresher',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 246,
        dbId: 30,
        name: 'GL55Impulse',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 247,
        dbId: 498,
        name: 'Aurora',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 248,
        dbId: 490,
        name: 'Quasar',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 249,
        dbId: 764,
        name: 'PrometheusV',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 250,
        dbId: 609,
        name: 'Phoenix',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 251,
        dbId: 84,
        name: 'Lancelot',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 252,
        dbId: 92,
        name: 'Mauler',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 253,
        dbId: 618,
        name: 'Incinerator',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 254,
        dbId: 79,
        name: 'MD3Owl',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 255,
        dbId: 455,
        name: 'Fuze',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 256,
        dbId: 124,
        name: 'RTAnaconda',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 257,
        dbId: 508,
        name: 'BarrierIX',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 258,
        dbId: 1248,
        name: 'Yaoguai',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 259,
        dbId: 594,
        name: 'Skinner',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      }
    ]
    this.hardwarePrices = [
      {
        id: 301,
        dbId: 139,
        name: 'FuelBarrel',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 302,
        dbId: 165,
        name: 'CarJack',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 303,
        dbId: 172,
        name: 'Radio',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 304,
        dbId: 173,
        name: 'RS1Ruby',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 305,
        dbId: 107,
        name: 'B1Aviator',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 306,
        dbId: 109,
        name: 'R1Breese',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 307,
        dbId: 433,
        name: 'FuelTank',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 308,
        dbId: 152,
        name: 'RD1Listener',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 309,
        dbId: 69,
        name: 'TS1Horizon',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 310,
        dbId: 77,
        name: 'BigG',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 311,
        dbId: 129,
        name: 'Blastoff',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 312,
        dbId: 108,
        name: 'R2Chill',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 313,
        dbId: 78,
        name: 'CSTaymyr',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 314,
        dbId: 68,
        name: 'AmmoPack',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 315,
        dbId: 100,
        name: 'Chameleon',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 316,
        dbId: 1312,
        name: 'KA1Discharger',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 317,
        dbId: 830,
        name: 'OculusVI',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 318,
        dbId: 142,
        name: 'Maxwell',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 319,
        dbId: 41,
        name: 'PU1Charge',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 320,
        dbId: 52,
        name: 'Ampere',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 321,
        dbId: 80,
        name: 'Hardcore',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 322,
        dbId: 65,
        name: 'Razorback',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 323,
        dbId: 112,
        name: 'DunHorse',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 324,
        dbId: 510,
        name: 'Genesis',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 325,
        dbId: 614,
        name: 'Tormentor',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 326,
        dbId: 82,
        name: 'ChameleonMk2',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 327,
        dbId: 1311,
        name: 'KA2Flywheel',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 328,
        dbId: 122,
        name: 'Doppler',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 329,
        dbId: 136,
        name: 'RD2Keen',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 330,
        dbId: 488,
        name: 'Neutrino',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 331,
        dbId: 48,
        name: 'Gasgen',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 332,
        dbId: 612,
        name: 'Oppressor',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 333,
        dbId: 131,
        name: 'HotRed',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 334,
        dbId: 117,
        name: 'Colossus',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 335,
        dbId: 71,
        name: 'Cheetah',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 336,
        dbId: 143,
        name: 'Hermes',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 337,
        dbId: 86,
        name: 'RNSeal',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 338,
        dbId: 66,
        name: 'Shiver',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 339,
        dbId: 75,
        name: 'ExpandedAmmoPack',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      }
    ]
    this.movementPrices = [
      {
        id: 401,
        dbId: 176,
        name: 'SmallWheel',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 402,
        dbId: 126,
        name: 'SmallWheelST',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 403,
        dbId: 186,
        name: 'MediumWheel',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 404,
        dbId: 163,
        name: 'MediumWheelST',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 405,
        dbId: 104,
        name: 'StuddedWheel',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 406,
        dbId: 59,
        name: 'StuddedWheelST',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 407,
        dbId: 121,
        name: 'ChainedWheel',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 408,
        dbId: 87,
        name: 'ChainedWheelST',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 409,
        dbId: 390,
        name: 'BalloonTyre',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 410,
        dbId: 388,
        name: 'BalloonTyreST',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 411,
        dbId: 383,
        name: 'RacingWheel',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 412,
        dbId: 379,
        name: 'RacingWheelST',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 413,
        dbId: 395,
        name: 'LandingGear',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 414,
        dbId: 389,
        name: 'LandingGearST',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 415,
        dbId: 116,
        name: 'LargeWheel',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 416,
        dbId: 113,
        name: 'LargeWheelST',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 417,
        dbId: 483,
        name: 'LunarIV',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 418,
        dbId: 482,
        name: 'LunarIVST',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 419,
        dbId: 1253,
        name: 'Camber',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 420,
        dbId: 1254,
        name: 'CamberST',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 421,
        dbId: 602,
        name: 'Shiv',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 422,
        dbId: 600,
        name: 'ShivST',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 423,
        dbId: 384,
        name: 'APCWheel',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 424,
        dbId: 380,
        name: 'APCWheelST',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 425,
        dbId: 91,
        name: 'TwinWheel',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 426,
        dbId: 83,
        name: 'TwinWheelST',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 427,
        dbId: 1318,
        name: 'BuggyWheel',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 428,
        dbId: 1319,
        name: 'BuggyWheelST',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 429,
        dbId: 611,
        name: 'Bigfoot',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 430,
        dbId: 610,
        name: 'BigfootST',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 431,
        dbId: 1252,
        name: 'Omni',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 432,
        dbId: 62,
        name: 'SmallTrack',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 433,
        dbId: 63,
        name: 'HardenedTrack',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 434,
        dbId: 42,
        name: 'ArmoredTrack',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 435,
        dbId: 497,
        name: 'IcarusVII',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 436,
        dbId: 385,
        name: 'ML200',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      },
      {
        id: 437,
        dbId: 595,
        name: 'MeatGrinder',
        dbName: '',
        buyPrice: 0,
        sellPrice: 0
      }
    ]
    this.allPrices = {
      resourcePrices: this.resourcePrices,
      cabinPrices: this.cabinPrices,
      weaponPrices: this.weaponPrices,
      hardwarePrices: this.hardwarePrices,
      movementPrices: this.movementPrices
    }
    this.allVehicleComponents = [
      [new Sprinter(), new Huntsman(), new WWT1(), new Docker()],
      [new Growl(), new Wyvern(), new Trucker()],
      [new Bat(), new Pilgrim(), new Jawbreaker()],
      [new Jannabi(), new Harpy(), new Werewolf(), new Aggressor(), new Quantum(), new Photon(), new Humpback(), new Bastion()],

      [new P54MAccord(), new Lupara(), new Avenger57mm()],
      [new STM23Defender(), new Vector(), new Sledgehammer(), new Spitfire(), new AC43Rapier(), new LittleBoy6LB(), new Judge76mm(), new Wasp(), new Borer(), new AD12Falcon(), new DTCobra()],
      [new M37Piercer(), new Sinus0(), new Goblin(), new Junkbow(), new Mace(), new AC50Storm(), new ZS33Hulk(), new Prosecutor76mm(), new Synthesis(), new Boom(), new Tempura(), new Buzzsaw(), new AD13Hawk(), new Sidekick(), new T3Python()],
      [new M29Protector(), new M38Fidget(), new Spectre2(), new MG13Equalizer(), new Caucasus(), new Gremlin(), new Fafnir(), new Thunderbolt(), new Rupture(), new AC72Whirlwind(), new ZS34FatMan(), new Executioner88mm(), new Cricket(), new Pyre(), new ClarinetTOW(), new Thresher(), new GL55Impulse(), new Aurora(), new Quasar(), new PrometheusV(), new Phoenix(), new Lancelot(), new Mauler(), new Incinerator(), new MD3Owl(), new Fuze(), new RTAnaconda(), new BarrierIX(), new Yaoguai(), new Skinner()],

      [new FuelBarrel(), new CarJack(), new Radio(), new RS1Ruby(), new B1Aviator(), new R1Breese()],
      [new FuelTank(), new RD1Listener(), new TS1Horizon(), new BigG(), new Blastoff(), new R2Chill(), new CSTaymyr(), new AmmoPack()],
      [new Chameleon(), new KA1Discharger(), new OculusVI(), new Maxwell(), new PU1Charge(), new Ampere(), new Hardcore(), new Razorback(), new DunHorse(), new Genesis()],
      [new Tormentor(), new ChameleonMk2(), new KA2Flywheel(), new Doppler(), new RD2Keen(), new Neutrino(), new Gasgen(), new Oppressor(), new HotRed(), new Colossus(), new Cheetah(), new Hermes(), new RNSeal(), new Shiver(), new ExpandedAmmoPack()],

      [new SmallWheel(), new SmallWheelST(), new MediumWheel(), new MediumWheelST()],
      [new StuddedWheel(), new StuddedWheelST(), new ChainedWheel(), new ChainedWheelST(), new BalloonTyre(), new BalloonTyreST(), new RacingWheel(), new RacingWheelST(), new LandingGear(), new LandingGearST(), new LargeWheel(), new LargeWheelST()],
      [new LunarIV(), new LunarIVST(), new Camber(), new CamberST(), new Shiv(), new ShivST(), new APCWheel(), new APCWheelST(), new TwinWheel(), new TwinWheelST()],
      [new BuggyWheel(), new BuggyWheelST(), new Bigfoot(), new BigfootST(), new Omni(), new SmallTrack(), new HardenedTrack(), new ArmoredTrack(), new IcarusVII(), new ML200(), new MeatGrinder()]
    ]
  }

  async startGettingPrices(): Promise<IAllPrices> {

    const prices = await getPricesFromDbAPI(this.allPrices)

    function addPriceToComponent(component, price): boolean {
      if (component.id === price.id) {
        component.buyPrice = price.buyPrice
        component.sellPrice = price.sellPrice
        return true
      }
      return false
    }
    function getComponentPrice(componentId: number, сomponentsPrices: IAllPrices): number {
      for (const item of сomponentsPrices.cabinPrices) {
        if (componentId === item.id) {
          return item.sellPrice
        }
      }
      for (const item of сomponentsPrices.weaponPrices) {
        if (componentId === item.id) {
          return item.sellPrice
        }
      }
      for (const item of сomponentsPrices.hardwarePrices) {
        if (componentId === item.id) {
          return item.sellPrice
        }
      }
      for (const item of сomponentsPrices.movementPrices) {
        if (componentId === item.id) {
          return item.sellPrice
        }
      }
      return 0
    }
    function calculateProfitRareComponents(rareVehicleComponents: IRareVehicleComponent[], allСomponentsPrices: IAllPrices): IListItem[] {
      const result: IListItem[] = []
      for (const item of rareVehicleComponents) {
        const scrapMetalAllCost = Math.ceil((item.getAllScrapMetal() / 100)) * scrapMetalPrice
        const copperAllCost = Math.ceil((item.getAllCopper() / 100)) * copperPrice
        const allCost = scrapMetalAllCost + copperAllCost + item.benchCost

        const scrapMetalCost = Math.ceil((item.getScrapMetal() / 100)) * scrapMetalPrice
        const copperCost = Math.ceil((item.getCopper() / 100)) * copperPrice
        let componentsCost = 0
        for (const i of item.ingredients) {
          componentsCost += getComponentPrice(i.id, allСomponentsPrices)
        }
        const allCostWithComponents = scrapMetalCost + copperCost + item.benchCost + componentsCost

        const profitWithout = Math.round((item.buyPrice - allCost) * 100) / 100
        const profitWith = Math.round((item.buyPrice - allCostWithComponents) * 100) / 100

        if (profitWithout > 0 && profitWith > 0) {
          const listItem: IListItem = {
            id: item.id,
            name: item.name,
            profitRatio: profitWithout + profitWith
          }
          result.push(listItem)
        }

        // console.log(item.name, item.rarity)
        // console.log('sellPrice - allCost:', item.buyPrice, '-', Math.round(allCost * 100) / 100, 'profit without = ', profitWithout);
        // console.log('sellPrice - allCost:', item.buyPrice, '-', Math.round(allCostWithComponents * 100) / 100, 'profit with = ', profitWith);
        // console.log('componentsCost', componentsCost);
        // console.log('------------------------------');
      }
      return result
    }
    function calculateProfitSpecialComponents(specialVehicleComponents: ISpecialVehicleComponent[], allСomponentsPrices: IAllPrices): IListItem[] {
      const result: IListItem[] = []
      for (const item of specialVehicleComponents) {
        const scrapMetalAllCost = Math.ceil((item.getAllScrapMetal() / 100)) * scrapMetalPrice
        const copperAllCost = Math.ceil((item.getAllCopper() / 100)) * copperPrice
        const wiresCost = Math.ceil((item.getWires() / 100)) * wiresPrice
        const plasticCost = Math.ceil((item.getPlastic() / 100)) * plasticPrice
        const engravedCasingsCost = Math.ceil((item.getEngravedCasings() / 100)) * engravedCasingsPrice
        const allCost = scrapMetalAllCost + copperAllCost + wiresCost + plasticCost + engravedCasingsCost + item.benchCost

        const scrapMetalCost = Math.ceil((item.getScrapMetal() / 100)) * scrapMetalPrice
        const copperCost = Math.ceil((item.getCopper() / 100)) * copperPrice
        let componentsCost = 0
        for (const i of item.ingredients) {
          componentsCost += getComponentPrice(i.id, allСomponentsPrices)
        }
        const allCostWithComponents = scrapMetalCost + copperCost + wiresCost + plasticCost + engravedCasingsCost + item.benchCost + componentsCost

        const profitWithout = Math.round((item.buyPrice - allCost) * 100) / 100
        const profitWith = Math.round((item.buyPrice - allCostWithComponents) * 100) / 100

        if (profitWithout > 0 && profitWith > 0) {
          const listItem: IListItem = {
            id: item.id,
            name: item.name,
            profitRatio: profitWithout + profitWith
          }
          result.push(listItem)
        }

        // console.log(item.name, item.rarity)
        // console.log('sellPrice - allCost:', item.buyPrice, '-', Math.round(allCost * 100) / 100, 'profit without = ', profitWithout);
        // console.log('sellPrice - allCost:', item.buyPrice, '-', Math.round(allCostWithComponents * 100) / 100, 'profit with = ', profitWith);
        // console.log('componentsCost', componentsCost);
        // console.log('------------------------------');
      }
      return result
    }
    function calculateProfitEpicComponents(epicVehicleComponents: IEpicVehicleComponent[], allСomponentsPrices: IAllPrices): IListItem[] {
      const result: IListItem[] = []
      for (const item of epicVehicleComponents) {
        const scrapMetalAllCost = Math.ceil((item.getAllScrapMetal() / 100)) * scrapMetalPrice
        const copperAllCost = Math.ceil((item.getAllCopper() / 100)) * copperPrice
        const wiresAllCost = Math.ceil((item.getAllWires() / 100)) * wiresPrice
        const plasticAllCost = Math.ceil((item.getAllPlastic() / 100)) * plasticPrice
        const batteriesCost = Math.ceil((item.getBatteries() / 100)) * batteriesPrice
        const engravedCasingsCost = Math.ceil((item.getEngravedCasings() / 100)) * engravedCasingsPrice
        const allCost = scrapMetalAllCost + copperAllCost + wiresAllCost + plasticAllCost + batteriesCost + engravedCasingsCost + item.benchCost

        const scrapMetalCost = Math.ceil((item.getScrapMetal() / 100)) * scrapMetalPrice
        const copperCost = Math.ceil((item.getCopper() / 100)) * copperPrice
        const wiresCost = Math.ceil((item.getWires() / 100)) * wiresPrice
        const plasticCost = Math.ceil((item.getPlastic() / 100)) * plasticPrice
        let componentsCost = 0
        for (const i of item.ingredients) {
          componentsCost += getComponentPrice(i.id, allСomponentsPrices)
        }
        const allCostWithComponents = scrapMetalCost + copperCost + wiresCost + plasticCost + engravedCasingsCost + item.benchCost + componentsCost

        const profitWithout = Math.round((item.buyPrice - allCost) * 100) / 100
        const profitWith = Math.round((item.buyPrice - allCostWithComponents) * 100) / 100

        if (profitWithout > 0 && profitWith > 0) {
          const listItem: IListItem = {
            id: item.id,
            name: item.name,
            profitRatio: profitWithout + profitWith
          }
          result.push(listItem)
        }

        // console.log(item.name, item.rarity)
        // console.log('sellPrice - allCost:', item.buyPrice, '-', Math.round(allCost * 100) / 100, 'profit without = ', profitWithout);
        // console.log('sellPrice - allCost:', item.buyPrice, '-', Math.round(allCostWithComponents * 100) / 100, 'profit with = ', profitWith);
        // console.log('componentsCost', componentsCost);
        // console.log('------------------------------');
      }
      return result
    }

    for (const price of prices.cabinPrices) {
      for (const item of this.allVehicleComponents[0]) {
        if (addPriceToComponent(item, price)) break
      }
      for (const item of this.allVehicleComponents[1]) {
        if (addPriceToComponent(item, price)) break
      }
      for (const item of this.allVehicleComponents[2]) {
        if (addPriceToComponent(item, price)) break
      }
      for (const item of this.allVehicleComponents[3]) {
        if (addPriceToComponent(item, price)) break
      }
    }
    for (const price of prices.weaponPrices) {
      for (const item of this.allVehicleComponents[4]) {
        if (addPriceToComponent(item, price)) break
      }
      for (const item of this.allVehicleComponents[5]) {
        if (addPriceToComponent(item, price)) break
      }
      for (const item of this.allVehicleComponents[6]) {
        if (addPriceToComponent(item, price)) break
      }
      for (const item of this.allVehicleComponents[7]) {
        if (addPriceToComponent(item, price)) break
      }
    }
    for (const price of prices.hardwarePrices) {
      for (const item of this.allVehicleComponents[8]) {
        if (addPriceToComponent(item, price)) break
      }
      for (const item of this.allVehicleComponents[9]) {
        if (addPriceToComponent(item, price)) break
      }
      for (const item of this.allVehicleComponents[10]) {
        if (addPriceToComponent(item, price)) break
      }
      for (const item of this.allVehicleComponents[11]) {
        if (addPriceToComponent(item, price)) break
      }
    }
    for (const price of prices.movementPrices) {
      for (const item of this.allVehicleComponents[12]) {
        if (addPriceToComponent(item, price)) break
      }
      for (const item of this.allVehicleComponents[13]) {
        if (addPriceToComponent(item, price)) break
      }
      for (const item of this.allVehicleComponents[14]) {
        if (addPriceToComponent(item, price)) break
      }
      for (const item of this.allVehicleComponents[15]) {
        if (addPriceToComponent(item, price)) break
      }
    }

    const scrapMetalPrice = prices.resourcePrices[0].sellPrice
    const copperPrice = prices.resourcePrices[1].sellPrice
    const wiresPrice = prices.resourcePrices[2].sellPrice
    const plasticPrice = prices.resourcePrices[3].sellPrice
    const batteriesPrice = prices.resourcePrices[4].sellPrice
    const electronicsPrice = prices.resourcePrices[5].sellPrice
    const engravedCasingsPrice = prices.resourcePrices[6].sellPrice
    // console.log('scrapMetalPrice', scrapMetalPrice);
    // console.log('copperPrice', copperPrice);
    // console.log('wiresPrice', wiresPrice);
    // console.log('plasticPrice', plasticPrice);
    // console.log('batteries', batteriesPrice);
    // console.log('electronics', electronicsPrice);
    // console.log('engravedCasings', engravedCasingsPrice);
    // console.log('------------------------------');

    
    for (const item of calculateProfitRareComponents(this.allVehicleComponents[1] as IRareVehicleComponent[], this.allPrices)) {
      console.log(item);
    }
    for (const item of calculateProfitSpecialComponents(this.allVehicleComponents[2] as ISpecialVehicleComponent[], this.allPrices)) {
      console.log(item);
    }
    for (const item of calculateProfitEpicComponents(this.allVehicleComponents[3] as IEpicVehicleComponent[], this.allPrices)) {
      console.log(item);
    }
    

    return prices


    // this.intervalId = setInterval(async () => {
    // }, 300000)

  }

  stopGettingPrices(): string {
    // clearInterval(this.intervalId)
    return 'stop getting prices';
  }
}

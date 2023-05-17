import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { getPricesFromDbAPI } from '../helpers/db/helpers'
import { IResourcePrices, ICabinPrices, IWeaponPrices, IHardwarePrices, IMovementPrices } from './prices.interface'



@Injectable()
export class PricesService {
  // private intervalId: NodeJS.Timer
  // resourcePrices: IResourcePrices
  resourcePrices: IResourcePrices
  cabinPrices: ICabinPrices
  weaponPrices: IWeaponPrices
  hardwarePrices: IHardwarePrices
  movementPrices: IMovementPrices

  constructor() {
    this.resourcePrices = {
      resources: [
        {
          dbId: 53,
          name: 'scrapMetal',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 43,
          name: 'copper',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 85,
          name: 'wires',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 785,
          name: 'plastic',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 783,
          name: 'batteries',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 201,
          name: 'electronics',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 919,
          name: 'engravedCasings',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        }
      ]
    }
    this.cabinPrices = {
      cabins: [
        {
          dbId: 960,
          name: 'Sprinter',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 120,
          name: 'Huntsman',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 88,
          name: 'WWT1',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 96,
          name: 'Docker',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 60,
          name: 'Growl',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 64,
          name: 'Wyvern',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 39,
          name: 'Trucker',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 599,
          name: 'Bat',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 506,
          name: 'Pilgrim',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 371,
          name: 'Jawbreaker',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 1237,
          name: 'Jannabi',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 927,
          name: 'Harpy',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 613,
          name: 'Werewolf',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 1307,
          name: 'Aggressor',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 505,
          name: 'Quantum',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 926,
          name: 'Photon',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 372,
          name: 'Humpback',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 925,
          name: 'Bastion',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        }
      ]
    }
    this.weaponPrices = {
      weapons: [
        {
          dbId: 93,
          name: 'P54MAccord',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 5,
          name: 'Lupara',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 99,
          name: 'Avenger57mm',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 74,
          name: 'STM23Defender',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 7,
          name: 'Vector',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 2,
          name: 'Sledgehammer',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 4,
          name: 'Spitfire',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 34,
          name: 'AC43Rapier',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 61,
          name: 'LittleBoy6LB',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 70,
          name: 'Judge76mm',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 44,
          name: 'Wasp',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 51,
          name: 'Borer',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 94,
          name: 'AD12Falcon',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 123,
          name: 'DTCobra',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 763,
          name: 'M37Piercer',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 1053,
          name: 'Sinus0',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 457,
          name: 'Goblin',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 598,
          name: 'Junkbow',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 1057,
          name: 'Mace',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 1051,
          name: 'AC50Storm',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 1050,
          name: 'ZS33Hulk',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 1049,
          name: 'Prosecutor76mm',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 475,
          name: 'Synthesis',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 72,
          name: 'Boom',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 1251,
          name: 'Tempura',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 73,
          name: 'Buzzsaw',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 1060,
          name: 'AD13Hawk',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 373,
          name: 'Sidekick',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 1065,
          name: 'T3Python',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 928,
          name: 'M29Protector',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 865,
          name: 'M38Fidget',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 40,
          name: 'Spectre2',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 31,
          name: 'MG13Equalizer',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 375,
          name: 'Caucasus',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 1316,
          name: 'Gremlin',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 765,
          name: 'Fafnir',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 1,
          name: 'Thunderbolt',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 1012,
          name: 'Rupture',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 32,
          name: 'AC72Whirlwind',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 8,
          name: 'ZS34FatMan',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 45,
          name: 'Executioner88mm',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 38,
          name: 'Cricket',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 6,
          name: 'Pyre',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 374,
          name: 'ClarinetTOW',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 1314,
          name: 'Thresher',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 30,
          name: 'GL55Impulse',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 498,
          name: 'Aurora',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 490,
          name: 'Quasar',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 764,
          name: 'PrometheusV',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 609,
          name: 'Phoenix',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 84,
          name: 'Lancelot',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 92,
          name: 'Mauler',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 618,
          name: 'Incinerator',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 79,
          name: 'MD3Owl',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 455,
          name: 'Fuze',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 124,
          name: 'RTAnaconda',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 508,
          name: 'BarrierIX',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 1248,
          name: 'Yaoguai',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 594,
          name: 'Skinner',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        }
      ]
    }
    this.hardwarePrices = {
      hardwares: [
        {
          dbId: 139,
          name: 'FuelBarrel',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 165,
          name: 'CarJack',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 172,
          name: 'Radio',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 173,
          name: 'RS1Ruby',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 107,
          name: 'B1Aviator',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 109,
          name: 'R1Breese',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 433,
          name: 'FuelTank',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 152,
          name: 'RD1Listener',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 69,
          name: 'TS1Horizon',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 77,
          name: 'BigG',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 129,
          name: 'Blastoff',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 108,
          name: 'R2Chill',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 78,
          name: 'CSTaymyr',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 68,
          name: 'AmmoPack',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 100,
          name: 'Chameleon',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 1312,
          name: 'KA1Discharger',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 830,
          name: 'OculusVI',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 142,
          name: 'Maxwell',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 41,
          name: 'PU1Charge',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 52,
          name: 'Ampere',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 80,
          name: 'Hardcore',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 65,
          name: 'Razorback',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 112,
          name: 'DunHorse',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 510,
          name: 'Genesis',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 614,
          name: 'Tormentor',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 82,
          name: 'ChameleonMk2',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 1311,
          name: 'KA2Flywheel',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 122,
          name: 'Doppler',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 136,
          name: 'RD2Keen',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 488,
          name: 'Neutrino',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 48,
          name: 'Gasgen',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 612,
          name: 'Oppressor',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 131,
          name: 'HotRed',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 117,
          name: 'Colossus',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 71,
          name: 'Cheetah',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 143,
          name: 'Hermes',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 86,
          name: 'RNSeal',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 66,
          name: 'Shiver',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 75,
          name: 'ExpandedAmmoPack',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        }
      ]
    }
    this.movementPrices = {
      movements: [
        {
          dbId: 176,
          name: 'SmallWheel',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 126,
          name: 'SmallWheelST',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 186,
          name: 'MediumWheel',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 163,
          name: 'MediumWheelST',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 104,
          name: 'StuddedWheel',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 59,
          name: 'StuddedWheelST',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 121,
          name: 'ChainedWheel',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 87,
          name: 'ChainedWheelST',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 390,
          name: 'BalloonTyre',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 388,
          name: 'BalloonTyreST',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 383,
          name: 'RacingWheel',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 379,
          name: 'RacingWheelST',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 395,
          name: 'LandingGear',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 389,
          name: 'LandingGearST',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 116,
          name: 'LargeWheel',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 113,
          name: 'LargeWheelST',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 483,
          name: 'LunarIV',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 482,
          name: 'LunarIVST',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 1253,
          name: 'Camber',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 1254,
          name: 'CamberST',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 602,
          name: 'Shiv',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 600,
          name: 'ShivST',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 384,
          name: 'APCWheel',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 380,
          name: 'APCWheelST',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 91,
          name: 'TwinWheel',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 83,
          name: 'TwinWheelST',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 1318,
          name: 'BuggyWheel',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 1319,
          name: 'BuggyWheelST',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 611,
          name: 'Bigfoot',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 610,
          name: 'BigfootST',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 1252,
          name: 'Omni',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 62,
          name: 'SmallTrack',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 63,
          name: 'HardenedTrack',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 42,
          name: 'ArmoredTrack',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 497,
          name: 'IcarusVII',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 385,
          name: 'ML200',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        },
        {
          dbId: 595,
          name: 'MeatGrinder',
          dbName: '',
          buyPrice: 0,
          sellPrice: 0
        }
      ]
    }
  }

  getResourcePrices(): string {
    return JSON.stringify(this.resourcePrices)
  }
  getCabinPrices(): string {
    return JSON.stringify(this.cabinPrices)
  }

  startGettingPrices(): void {
    getPricesFromDbAPI(this.resourcePrices, this.cabinPrices, this.weaponPrices, this.hardwarePrices, this.movementPrices)

    // for (const item of resourceIdsArr()) {
    //   getResourcePricesFromDbById(item, this.resourcePrices)
    // }
    // for (const item of cabinIdsArr()) {
    //   getCabinPricesFromDbById(item, this.cabinPrices)
    // }

    // this.intervalId = setInterval(async () => {

    // }, 300000)

  }
  stopGettingPrices(): string {
    // clearInterval(this.intervalId)
    return 'stop getting prices';
  }
}

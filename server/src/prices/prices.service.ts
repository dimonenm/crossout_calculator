import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { getCabinPricesFromDbById, resourceIdsArr, cabinIdsArr, getPricesFromDbAPI } from '../helpers/db/helpers'
import { IResourcePrices, ICabinPrices, IPrices, IWeaponPrices } from './prices.interface'



@Injectable()
export class PricesService {
  // private intervalId: NodeJS.Timer
  // resourcePrices: IResourcePrices
  resourcePrices: IResourcePrices
  cabinPrices: ICabinPrices
  weaponPrices: IWeaponPrices

  constructor() {
    this.resourcePrices = {
      resources:
        [
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

        

     
      case '6':
      weaponPrices.Pyre.name = res.data[0].name
        weaponPrices.Pyre.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.Pyre.sellPrice = res.data[0].formatSellPrice
        break;
      case '374':
      weaponPrices.ClarinetTOW.name = res.data[0].name
        weaponPrices.ClarinetTOW.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.ClarinetTOW.sellPrice = res.data[0].formatSellPrice
        break;
      case '1314':
      weaponPrices.Thresher.name = res.data[0].name
        weaponPrices.Thresher.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.Thresher.sellPrice = res.data[0].formatSellPrice
        break;
      case '30':
      weaponPrices.GL55Impulse.name = res.data[0].name
        weaponPrices.GL55Impulse.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.GL55Impulse.sellPrice = res.data[0].formatSellPrice
        break;
      case '498':
      weaponPrices.Aurora.name = res.data[0].name
        weaponPrices.Aurora.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.Aurora.sellPrice = res.data[0].formatSellPrice
        break;
      case '490':
      weaponPrices.Quasar.name = res.data[0].name
        weaponPrices.Quasar.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.Quasar.sellPrice = res.data[0].formatSellPrice
        break;
      case '764':
      weaponPrices.PrometheusV.name = res.data[0].name
        weaponPrices.PrometheusV.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.PrometheusV.sellPrice = res.data[0].formatSellPrice
        break;
      case '609':
      weaponPrices.Phoenix.name = res.data[0].name
        weaponPrices.Phoenix.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.Phoenix.sellPrice = res.data[0].formatSellPrice
        break;
      case '84':
      weaponPrices.Lancelot.name = res.data[0].name
        weaponPrices.Lancelot.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.Lancelot.sellPrice = res.data[0].formatSellPrice
        break;
      case '92':
      weaponPrices.Mauler.name = res.data[0].name
        weaponPrices.Mauler.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.Mauler.sellPrice = res.data[0].formatSellPrice
        break;
      case '618':
      weaponPrices.Incinerator.name = res.data[0].name
        weaponPrices.Incinerator.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.Incinerator.sellPrice = res.data[0].formatSellPrice
        break;
      case '79':
      weaponPrices.MD3Owl.name = res.data[0].name
        weaponPrices.MD3Owl.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.MD3Owl.sellPrice = res.data[0].formatSellPrice
        break;
      case '455':
      weaponPrices.Fuze.name = res.data[0].name
        weaponPrices.Fuze.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.Fuze.sellPrice = res.data[0].formatSellPrice
        break;
      case '124':
      weaponPrices.RTAnaconda.name = res.data[0].name
        weaponPrices.RTAnaconda.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.RTAnaconda.sellPrice = res.data[0].formatSellPrice
        break;
      case '508':
      weaponPrices.BarrierIX.name = res.data[0].name
        weaponPrices.BarrierIX.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.BarrierIX.sellPrice = res.data[0].formatSellPrice
        break;
      case '1248':
      weaponPrices.Yaoguai.name = res.data[0].name
        weaponPrices.Yaoguai.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.Yaoguai.sellPrice = res.data[0].formatSellPrice
        break;
      case '594':
      weaponPrices.Skinner.name = res.data[0].name
        weaponPrices.Skinner.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.Skinner.sellPrice = res.data[0].formatSellPrice
        break;
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
    getPricesFromDbAPI(this.resourcePrices, this.cabinPrices)

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

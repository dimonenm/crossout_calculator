import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { getCabinPricesFromDbById, resourceIdsArr, cabinIdsArr, getPricesFromDbAPI } from '../helpers/db/helpers'
import { IResourcePrices, ICabinPrices, IPrices } from './prices.interface'



@Injectable()
export class PricesService {
  // private intervalId: NodeJS.Timer
  // resourcePrices: IResourcePrices
  resourcePrices: IResourcePrices
  cabinPrices: IPrices[]

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
    this.cabinPrices = [
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

  getResourcePrices(): string {
    return JSON.stringify(this.resourcePrices)
  }
  getCabinPrices(): string {
    return JSON.stringify(this.cabinPrices)
  }

  startGettingPrices(): void {
    getPricesFromDbAPI(this.resourcePrices)

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

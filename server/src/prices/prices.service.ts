import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { getResourcePricesFromDbById, getCabinPricesFromDbById, resourceIdsArr, cabinIdsArr } from '../helpers/db/helpers'
import { IResourcePrices, ICabinPrices } from './prices.interface'



@Injectable()
export class PricesService {
  // private intervalId: NodeJS.Timer
  resourcePrices: IResourcePrices
  cabinPrices: ICabinPrices

  constructor() {
    this.resourcePrices = {
      scrapMetal: {
        name: '',
        buyPrice: 0,
        sellPrice: 0
      },
      copper: {
        name: '',
        buyPrice: 0,
        sellPrice: 0
      },
      wires: {
        name: '',
        buyPrice: 0,
        sellPrice: 0
      },
      plastic: {
        name: '',
        buyPrice: 0,
        sellPrice: 0
      },
      batteries: {
        name: '',
        buyPrice: 0,
        sellPrice: 0
      },
      electronics: {
        name: '',
        buyPrice: 0,
        sellPrice: 0
      },
      engravedCasings: {
        name: '',
        buyPrice: 0,
        sellPrice: 0
      }
    }
    this.cabinPrices = {
      Sprinter: {
        name: '',
        buyPrice: 0,
        sellPrice: 0
      },
      Huntsman: {
        name: '',
        buyPrice: 0,
        sellPrice: 0
      },
      WWT1: {
        name: '',
        buyPrice: 0,
        sellPrice: 0
      },
      Docker: {
        name: '',
        buyPrice: 0,
        sellPrice: 0
      },
      Growl: {
        name: '',
        buyPrice: 0,
        sellPrice: 0
      },
      Wyvern: {
        name: '',
        buyPrice: 0,
        sellPrice: 0
      },
      Trucker: {
        name: '',
        buyPrice: 0,
        sellPrice: 0
      },
      Bat: {
        name: '',
        buyPrice: 0,
        sellPrice: 0
      },
      Pilgrim: {
        name: '',
        buyPrice: 0,
        sellPrice: 0
      },
      Jawbreaker: {
        name: '',
        buyPrice: 0,
        sellPrice: 0
      },
      Jannabi: {
        name: '',
        buyPrice: 0,
        sellPrice: 0
      },
      Harpy: {
        name: '',
        buyPrice: 0,
        sellPrice: 0
      },
      Werewolf: {
        name: '',
        buyPrice: 0,
        sellPrice: 0
      },
      Aggressor: {
        name: '',
        buyPrice: 0,
        sellPrice: 0
      },
      Quantum: {
        name: '',
        buyPrice: 0,
        sellPrice: 0
      },
      Photon: {
        name: '',
        buyPrice: 0,
        sellPrice: 0
      },
      Humpback: {
        name: '',
        buyPrice: 0,
        sellPrice: 0
      },
      Bastion: {
        name: '',
        buyPrice: 0,
        sellPrice: 0
      },
    }
  }

  getResourcePrices(): string {
    return JSON.stringify(this.resourcePrices)
  }
  getCabinPrices(): string {
    return JSON.stringify(this.cabinPrices)
  }

  startGettingPrices(): void {

    for (const item of resourceIdsArr()) {
      getResourcePricesFromDbById(item, this.resourcePrices)
    }
    for (const item of cabinIdsArr()) {
      getCabinPricesFromDbById(item, this.cabinPrices)
    }

    // this.intervalId = setInterval(async () => {
    
    // }, 300000)

  }
  stopGettingPrices(): string {
    // clearInterval(this.intervalId)
    return 'stop getting prices';
  }
}

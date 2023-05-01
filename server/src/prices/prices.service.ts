import { Injectable } from '@nestjs/common';
import axios from 'axios';

interface IPrices {
  name: string
  buyPrice: number
  sellPrice: number
}
interface IResourcePrices {
  scrapMetal: IPrices
  copper: IPrices
  wires: IPrices
  plastic: IPrices
  batteries: IPrices
  electronics: IPrices
  engravedCasings: IPrices
}

@Injectable()
export class PricesService {
  private intervalId: NodeJS.Timer
  resourcePrices: IResourcePrices

  constructor() {
    this.resourcePrices = {
      scrapMetal: {
        name:'',
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
  }

  getResourcePrices(): string {
    return JSON.stringify(this.resourcePrices)
  }

  startGettingPrices(): string {
    this.intervalId = setInterval(async () => {

      await axios.get('https://crossoutdb.com/api/v1/item/53').then(res => {
        this.resourcePrices.scrapMetal.name = res.data[0].name
        this.resourcePrices.scrapMetal.buyPrice = Number(res.data[0].formatBuyPrice)
        this.resourcePrices.scrapMetal.sellPrice = Number(res.data[0].formatSellPrice)
      })

      await axios.get('https://crossoutdb.com/api/v1/item/43').then(res => {
        this.resourcePrices.copper.name = res.data[0].name
        this.resourcePrices.copper.buyPrice = Number(res.data[0].formatBuyPrice)
        this.resourcePrices.copper.sellPrice = Number(res.data[0].formatSellPrice)
      })

      await axios.get('https://crossoutdb.com/api/v1/item/85').then(res => {
        this.resourcePrices.wires.name = res.data[0].name
        this.resourcePrices.wires.buyPrice = Number(res.data[0].formatBuyPrice)
        this.resourcePrices.wires.sellPrice = Number(res.data[0].formatSellPrice)
      })

      await axios.get('https://crossoutdb.com/api/v1/item/785').then(res => {
        this.resourcePrices.plastic.name = res.data[0].name
        this.resourcePrices.plastic.buyPrice = Number(res.data[0].formatBuyPrice)
        this.resourcePrices.plastic.sellPrice = Number(res.data[0].formatSellPrice)
      })

      await axios.get('https://crossoutdb.com/api/v1/item/783').then(res => {
        this.resourcePrices.batteries.name = res.data[0].name
        this.resourcePrices.batteries.buyPrice = Number(res.data[0].formatBuyPrice)
        this.resourcePrices.batteries.sellPrice = Number(res.data[0].formatSellPrice)
      })

      await axios.get('https://crossoutdb.com/api/v1/item/201').then(res => {
        this.resourcePrices.electronics.name = res.data[0].name
        this.resourcePrices.electronics.buyPrice = Number(res.data[0].formatBuyPrice)
        this.resourcePrices.electronics.sellPrice = Number(res.data[0].formatSellPrice)
      })

      await axios.get('https://crossoutdb.com/api/v1/item/919').then(res => {
        this.resourcePrices.engravedCasings.name = res.data[0].name
        this.resourcePrices.engravedCasings.buyPrice = Number(res.data[0].formatBuyPrice)
        this.resourcePrices.engravedCasings.sellPrice = Number(res.data[0].formatSellPrice)
      })
    }, 5000)
    return 'start getting prices';
  }
  stopGettingPrices(): string {
    clearInterval(this.intervalId)
    return 'stop getting prices';
  }
}

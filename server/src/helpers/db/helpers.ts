import axios from 'axios';
import { ICabinPrices, IResourcePrices } from 'src/prices/prices.interface';

export function getResourcePricesFromDbById(id: string, resourcePrices: IResourcePrices): void {
  axios.get('https://crossoutdb.com/api/v1/item/' + id).then(res => {
    switch (id) {
      case '53':
        resourcePrices.scrapMetal.name = res.data[0].name
        resourcePrices.scrapMetal.buyPrice = res.data[0].formatBuyPrice
        resourcePrices.scrapMetal.sellPrice = res.data[0].formatSellPrice
        console.log(`resource 1/7`);
        break;
      case '43':
        resourcePrices.copper.name = res.data[0].name
        resourcePrices.copper.buyPrice = res.data[0].formatBuyPrice
        resourcePrices.copper.sellPrice = res.data[0].formatSellPrice
        console.log(`resource 2/7`);
        break;
      case '85':
        resourcePrices.wires.name = res.data[0].name
        resourcePrices.wires.buyPrice = res.data[0].formatBuyPrice
        resourcePrices.wires.sellPrice = res.data[0].formatSellPrice
        console.log(`resource 3/7`);
        break;
      case '785':
        resourcePrices.plastic.name = res.data[0].name
        resourcePrices.plastic.buyPrice = res.data[0].formatBuyPrice
        resourcePrices.plastic.sellPrice = res.data[0].formatSellPrice
        console.log(`resource 4/7`);
        break;
      case '783':
        resourcePrices.batteries.name = res.data[0].name
        resourcePrices.batteries.buyPrice = res.data[0].formatBuyPrice
        resourcePrices.batteries.sellPrice = res.data[0].formatSellPrice
        console.log(`resource 5/7`);
        break;
      case '201':
        resourcePrices.electronics.name = res.data[0].name
        resourcePrices.electronics.buyPrice = res.data[0].formatBuyPrice
        resourcePrices.electronics.sellPrice = res.data[0].formatSellPrice
        console.log(`resource 6/7`);
        break;
      case '919':
        resourcePrices.engravedCasings.name = res.data[0].name
        resourcePrices.engravedCasings.buyPrice = res.data[0].formatBuyPrice
        resourcePrices.engravedCasings.sellPrice = res.data[0].formatSellPrice
        console.log(`resource 7/7`);
        break;
      default:
        break;
    }
  })
}
export function getCabinPricesFromDbById(id: string, cabinPrices: ICabinPrices): void {
  axios.get('https://crossoutdb.com/api/v1/item/' + id).then(res => {
    switch (id) {
      //common
      case '960':
        cabinPrices.Sprinter.name = res.data[0].name
        cabinPrices.Sprinter.buyPrice = res.data[0].formatBuyPrice
        cabinPrices.Sprinter.sellPrice = res.data[0].formatSellPrice
        console.log(`cabin 1/18`);
        break;
      case '120':
        cabinPrices.Huntsman.name = res.data[0].name
        cabinPrices.Huntsman.buyPrice = res.data[0].formatBuyPrice
        cabinPrices.Huntsman.sellPrice = res.data[0].formatSellPrice
        console.log(`cabin 2/18`);
        break;
      case '88':
        cabinPrices.WWT1.name = res.data[0].name
        cabinPrices.WWT1.buyPrice = res.data[0].formatBuyPrice
        cabinPrices.WWT1.sellPrice = res.data[0].formatSellPrice
        console.log(`cabin 3/18`);
        break;
      case '96':
        cabinPrices.Docker.name = res.data[0].name
        cabinPrices.Docker.buyPrice = res.data[0].formatBuyPrice
        cabinPrices.Docker.sellPrice = res.data[0].formatSellPrice
        console.log(`cabin 4/18`);
        break;
      //rare
      case '60':
        cabinPrices.Growl.name = res.data[0].name
        cabinPrices.Growl.buyPrice = res.data[0].formatBuyPrice
        cabinPrices.Growl.sellPrice = res.data[0].formatSellPrice
        console.log(`cabin 5/18`);
        break;
      case '64':
        cabinPrices.Wyvern.name = res.data[0].name
        cabinPrices.Wyvern.buyPrice = res.data[0].formatBuyPrice
        cabinPrices.Wyvern.sellPrice = res.data[0].formatSellPrice
        console.log(`cabin 6/18`);
        break;
      case '39':
        cabinPrices.Trucker.name = res.data[0].name
        cabinPrices.Trucker.buyPrice = res.data[0].formatBuyPrice
        cabinPrices.Trucker.sellPrice = res.data[0].formatSellPrice
        console.log(`cabin 7/18`);
        break;
      //special
      case '599':
        cabinPrices.Bat.name = res.data[0].name
        cabinPrices.Bat.buyPrice = res.data[0].formatBuyPrice
        cabinPrices.Bat.sellPrice = res.data[0].formatSellPrice
        console.log(`cabin 8/18`);
        break;
      case '506':
        cabinPrices.Pilgrim.name = res.data[0].name
        cabinPrices.Pilgrim.buyPrice = res.data[0].formatBuyPrice
        cabinPrices.Pilgrim.sellPrice = res.data[0].formatSellPrice
        console.log(`cabin 9/18`);
        break;
      case '371':
        cabinPrices.Jawbreaker.name = res.data[0].name
        cabinPrices.Jawbreaker.buyPrice = res.data[0].formatBuyPrice
        cabinPrices.Jawbreaker.sellPrice = res.data[0].formatSellPrice
        console.log(`cabin 10/18`);
        break;
      //epic
      case '1237':
        cabinPrices.Jannabi.name = res.data[0].name
        cabinPrices.Jannabi.buyPrice = res.data[0].formatBuyPrice
        cabinPrices.Jannabi.sellPrice = res.data[0].formatSellPrice
        console.log(`cabin 11/18`);
        break;
      case '927':
        cabinPrices.Harpy.name = res.data[0].name
        cabinPrices.Harpy.buyPrice = res.data[0].formatBuyPrice
        cabinPrices.Harpy.sellPrice = res.data[0].formatSellPrice
        console.log(`cabin 12/18`);
        break;
      case '613':
        cabinPrices.Werewolf.name = res.data[0].name
        cabinPrices.Werewolf.buyPrice = res.data[0].formatBuyPrice
        cabinPrices.Werewolf.sellPrice = res.data[0].formatSellPrice
        console.log(`cabin 13/18`);
        break;
      case '1307':
        cabinPrices.Aggressor.name = res.data[0].name
        cabinPrices.Aggressor.buyPrice = res.data[0].formatBuyPrice
        cabinPrices.Aggressor.sellPrice = res.data[0].formatSellPrice
        console.log(`cabin 14/18`);
        break;
      case '505':
        cabinPrices.Quantum.name = res.data[0].name
        cabinPrices.Quantum.buyPrice = res.data[0].formatBuyPrice
        cabinPrices.Quantum.sellPrice = res.data[0].formatSellPrice
        console.log(`cabin 15/18`);
        break;
      case '926':
        cabinPrices.Photon.name = res.data[0].name
        cabinPrices.Photon.buyPrice = res.data[0].formatBuyPrice
        cabinPrices.Photon.sellPrice = res.data[0].formatSellPrice
        console.log(`cabin 16/18`);
        break;
      case '372':
        cabinPrices.Humpback.name = res.data[0].name
        cabinPrices.Humpback.buyPrice = res.data[0].formatBuyPrice
        cabinPrices.Humpback.sellPrice = res.data[0].formatSellPrice
        console.log(`cabin 17/18`);
        break;
      case '925':
        cabinPrices.Bastion.name = res.data[0].name
        cabinPrices.Bastion.buyPrice = res.data[0].formatBuyPrice
        cabinPrices.Bastion.sellPrice = res.data[0].formatSellPrice
        console.log(`cabin 18/18`);
        break;
      //legendary
      default:
        break;
    }
  })
}
export function getWeaponPricesFromDbById(id: string, cabinPrices: ICabinPrices): void {
  axios.get('https://crossoutdb.com/api/v1/item/' + id).then(res => {
    switch (id) {
      //common
      case '960':
        cabinPrices.Sprinter.name = res.data[0].name
        cabinPrices.Sprinter.buyPrice = res.data[0].formatBuyPrice
        cabinPrices.Sprinter.sellPrice = res.data[0].formatSellPrice
        console.log(`cabin 1/18`);
        break;
      case '120':
        cabinPrices.Huntsman.name = res.data[0].name
        cabinPrices.Huntsman.buyPrice = res.data[0].formatBuyPrice
        cabinPrices.Huntsman.sellPrice = res.data[0].formatSellPrice
        console.log(`cabin 2/18`);
        break;
      case '88':
        cabinPrices.WWT1.name = res.data[0].name
        cabinPrices.WWT1.buyPrice = res.data[0].formatBuyPrice
        cabinPrices.WWT1.sellPrice = res.data[0].formatSellPrice
        console.log(`cabin 3/18`);
        break;
      case '96':
        cabinPrices.Docker.name = res.data[0].name
        cabinPrices.Docker.buyPrice = res.data[0].formatBuyPrice
        cabinPrices.Docker.sellPrice = res.data[0].formatSellPrice
        console.log(`cabin 4/18`);
        break;
      //rare
      case '60':
        cabinPrices.Growl.name = res.data[0].name
        cabinPrices.Growl.buyPrice = res.data[0].formatBuyPrice
        cabinPrices.Growl.sellPrice = res.data[0].formatSellPrice
        console.log(`cabin 5/18`);
        break;
      case '64':
        cabinPrices.Wyvern.name = res.data[0].name
        cabinPrices.Wyvern.buyPrice = res.data[0].formatBuyPrice
        cabinPrices.Wyvern.sellPrice = res.data[0].formatSellPrice
        console.log(`cabin 6/18`);
        break;
      case '39':
        cabinPrices.Trucker.name = res.data[0].name
        cabinPrices.Trucker.buyPrice = res.data[0].formatBuyPrice
        cabinPrices.Trucker.sellPrice = res.data[0].formatSellPrice
        console.log(`cabin 7/18`);
        break;
      //special
      case '599':
        cabinPrices.Bat.name = res.data[0].name
        cabinPrices.Bat.buyPrice = res.data[0].formatBuyPrice
        cabinPrices.Bat.sellPrice = res.data[0].formatSellPrice
        console.log(`cabin 8/18`);
        break;
      case '506':
        cabinPrices.Pilgrim.name = res.data[0].name
        cabinPrices.Pilgrim.buyPrice = res.data[0].formatBuyPrice
        cabinPrices.Pilgrim.sellPrice = res.data[0].formatSellPrice
        console.log(`cabin 9/18`);
        break;
      case '371':
        cabinPrices.Jawbreaker.name = res.data[0].name
        cabinPrices.Jawbreaker.buyPrice = res.data[0].formatBuyPrice
        cabinPrices.Jawbreaker.sellPrice = res.data[0].formatSellPrice
        console.log(`cabin 10/18`);
        break;
      //epic
      case '1237':
        cabinPrices.Jannabi.name = res.data[0].name
        cabinPrices.Jannabi.buyPrice = res.data[0].formatBuyPrice
        cabinPrices.Jannabi.sellPrice = res.data[0].formatSellPrice
        console.log(`cabin 11/18`);
        break;
      case '927':
        cabinPrices.Harpy.name = res.data[0].name
        cabinPrices.Harpy.buyPrice = res.data[0].formatBuyPrice
        cabinPrices.Harpy.sellPrice = res.data[0].formatSellPrice
        console.log(`cabin 12/18`);
        break;
      case '613':
        cabinPrices.Werewolf.name = res.data[0].name
        cabinPrices.Werewolf.buyPrice = res.data[0].formatBuyPrice
        cabinPrices.Werewolf.sellPrice = res.data[0].formatSellPrice
        console.log(`cabin 13/18`);
        break;
      case '1307':
        cabinPrices.Aggressor.name = res.data[0].name
        cabinPrices.Aggressor.buyPrice = res.data[0].formatBuyPrice
        cabinPrices.Aggressor.sellPrice = res.data[0].formatSellPrice
        console.log(`cabin 14/18`);
        break;
      case '505':
        cabinPrices.Quantum.name = res.data[0].name
        cabinPrices.Quantum.buyPrice = res.data[0].formatBuyPrice
        cabinPrices.Quantum.sellPrice = res.data[0].formatSellPrice
        console.log(`cabin 15/18`);
        break;
      case '926':
        cabinPrices.Photon.name = res.data[0].name
        cabinPrices.Photon.buyPrice = res.data[0].formatBuyPrice
        cabinPrices.Photon.sellPrice = res.data[0].formatSellPrice
        console.log(`cabin 16/18`);
        break;
      case '372':
        cabinPrices.Humpback.name = res.data[0].name
        cabinPrices.Humpback.buyPrice = res.data[0].formatBuyPrice
        cabinPrices.Humpback.sellPrice = res.data[0].formatSellPrice
        console.log(`cabin 17/18`);
        break;
      case '925':
        cabinPrices.Bastion.name = res.data[0].name
        cabinPrices.Bastion.buyPrice = res.data[0].formatBuyPrice
        cabinPrices.Bastion.sellPrice = res.data[0].formatSellPrice
        console.log(`cabin 18/18`);
        break;
      //legendary
      default:
        break;
    }
  })
}

export function resourceIdsArr(): string[] {
  return [
    '53', //scrapMetal
    '43', //copper
    '85', //wires
    '785', //plastic
    '783', //batteries
    '201', //electronics
    '919', //engravedCasings
  ]
}
export function cabinIdsArr(): string[] {
  return [
    '960', //Sprinter
    '120', //Huntsman
    '88', //WWT1
    '96', //Docker
    //rare
    '60', //Growl
    '64', //Wyvern
    '39', //Trucker
    //special
    '599', //Bat
    '506', //Pilgrim
    '371', //Jawbreaker
    //epic
    '1237', //Jannabi
    '927', //Harpy
    '613', //Werewolf
    '1307', //Aggressor
    '505', //Quantum
    '926', //Photon
    '372', //Humpback
    '925', //Bastion
  ]
}
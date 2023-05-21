import axios from 'axios';
import { IAllPrices, ICabinPrices, IHardwarePrices, IMovementPrices, IResourcePrices, IWeaponPrices } from 'src/prices/prices.interface';

export async function getPricesFromDbAPI(allPrices: IAllPrices): Promise<IAllPrices> {
  const items: any = await axios.get('https://crossoutdb.com/api/v1/items').then(res => res.data)
  
  function addData(dbItemData, itemData) {
    if (dbItemData['id'] === itemData.dbId) {
      itemData.dbName = dbItemData['name']
      itemData.buyPrice = Number(dbItemData['formatBuyPrice'])
      itemData.sellPrice = Number(dbItemData['formatSellPrice'])
    }
  }

  for (const dbItem of items) {
    for (const item of allPrices.resourcePrices) {
      addData(dbItem, item)
    }
    for (const item of allPrices.cabinPrices) {
      addData(dbItem, item)
    }
    for (const item of allPrices.weaponPrices) {
      addData(dbItem, item)
    }
    for (const item of allPrices.hardwarePrices) {
      addData(dbItem, item)
    }
    for (const item of allPrices.movementPrices) {
      addData(dbItem, item)
    }
  }

  return allPrices
}
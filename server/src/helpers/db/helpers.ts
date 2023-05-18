import axios from 'axios';
import { IAllPrices, ICabinPrices, IHardwarePrices, IMovementPrices, IResourcePrices, IWeaponPrices } from 'src/prices/prices.interface';

export async function getPricesFromDbAPI(allPrices: IAllPrices): Promise<void | IAllPrices> {
  await axios.get('https://crossoutdb.com/api/v1/items').then(res => {
    const items: any = res.data

    function addData(dbItemData, itemData) {
      if (dbItemData['id'] === itemData.dbId) {
        itemData.dbName = dbItemData['name']
        itemData.buyPrice = dbItemData['formatBuyPrice']
        itemData.sellPrice = dbItemData['formatSellPrice']
      }
    }

    for (const dbItem of items) {
      for (const item of allPrices.resourcePrices.resources) {
        addData(dbItem, item)
      }
      for (const item of allPrices.cabinPrices.cabins) {
        addData(dbItem, item)
      }
      for (const item of allPrices.weaponPrices.weapons) {
        addData(dbItem, item)
      }
      for (const item of allPrices.hardwarePrices.hardwares) {
        addData(dbItem, item)
      }
      for (const item of allPrices.movementPrices.movements) {
        addData(dbItem, item)
      }
    }

    return allPrices
  }).catch(e => { return e })
}
import axios from 'axios';
import { ICabinPrices, IHardwarePrices, IMovementPrices, IResourcePrices, IWeaponPrices } from 'src/prices/prices.interface';
import { writeFile, appendFile } from 'fs/promises'

async function saveFile(txtContent: string) {
  try {
    await appendFile('./test.txt', txtContent);
  } catch (err) {
    console.log(err);
  }
}

export async function getPricesFromDbAPI(resourcePrices: IResourcePrices, cabinPrices: ICabinPrices, weaponPrices: IWeaponPrices, hardwarePrices: IHardwarePrices, movementPrices: IMovementPrices): Promise<void> {
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
      for (const item of resourcePrices.resources) {
        addData(dbItem, item)
      }
      for (const item of cabinPrices.cabins) {
        addData(dbItem, item)
      }
      for (const item of weaponPrices.weapons) {
        addData(dbItem, item)
      }
      for (const item of hardwarePrices.hardwares) {
        addData(dbItem, item)
      }
      for (const item of movementPrices.movements) {
        addData(dbItem, item)
      }
    }
    
    saveFile(JSON.stringify(resourcePrices))
    saveFile(JSON.stringify(cabinPrices))
    saveFile(JSON.stringify(weaponPrices))
    saveFile(JSON.stringify(hardwarePrices))
    saveFile(JSON.stringify(movementPrices))
  })
}
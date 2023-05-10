import axios from 'axios';
import { ICabinPrices, IResourcePrices, IWeaponPrices } from 'src/prices/prices.interface';

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
export function getWeaponPricesFromDbById(id: string, weaponPrices: IWeaponPrices): void {
  axios.get('https://crossoutdb.com/api/v1/item/' + id).then(res => {
    switch (id) {
      //common
      case '93':
        weaponPrices.P54MAccord.name = res.data[0].name
        weaponPrices.P54MAccord.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.P54MAccord.sellPrice = res.data[0].formatSellPrice
        break;
      case '5':
        weaponPrices.Lupara.name = res.data[0].name
        weaponPrices.Lupara.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.Lupara.sellPrice = res.data[0].formatSellPrice
        break;
      case '99':
        weaponPrices.Avenger57mm.name = res.data[0].name
        weaponPrices.Avenger57mm.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.Avenger57mm.sellPrice = res.data[0].formatSellPrice
        break;
      //rare
      case '74':
        weaponPrices.STM23Defender.name = res.data[0].name
        weaponPrices.STM23Defender.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.STM23Defender.sellPrice = res.data[0].formatSellPrice
        break;
      case '7':
        weaponPrices.Vector.name = res.data[0].name
        weaponPrices.Vector.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.Vector.sellPrice = res.data[0].formatSellPrice
        break;
      case '2':
        weaponPrices.Sledgehammer.name = res.data[0].name
        weaponPrices.Sledgehammer.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.Sledgehammer.sellPrice = res.data[0].formatSellPrice
        break;
      case '4':
        weaponPrices.Spitfire.name = res.data[0].name
        weaponPrices.Spitfire.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.Spitfire.sellPrice = res.data[0].formatSellPrice
        break;
      case '34':
        weaponPrices.AC43Rapier.name = res.data[0].name
        weaponPrices.AC43Rapier.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.AC43Rapier.sellPrice = res.data[0].formatSellPrice
        break;
      case '61':
        weaponPrices.LittleBoy6LB.name = res.data[0].name
        weaponPrices.LittleBoy6LB.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.LittleBoy6LB.sellPrice = res.data[0].formatSellPrice
        break;
      case '70':
        weaponPrices.Judge76mm.name = res.data[0].name
        weaponPrices.Judge76mm.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.Judge76mm.sellPrice = res.data[0].formatSellPrice
        break;
      case '44':
        weaponPrices.Wasp.name = res.data[0].name
        weaponPrices.Wasp.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.Wasp.sellPrice = res.data[0].formatSellPrice
        break;
      case '51':
        weaponPrices.Borer.name = res.data[0].name
        weaponPrices.Borer.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.Borer.sellPrice = res.data[0].formatSellPrice
        break;
      case '94':
        weaponPrices.AD12Falcon.name = res.data[0].name
        weaponPrices.AD12Falcon.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.AD12Falcon.sellPrice = res.data[0].formatSellPrice
        break;
      case '123':
        weaponPrices.DTCobra.name = res.data[0].name
        weaponPrices.DTCobra.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.DTCobra.sellPrice = res.data[0].formatSellPrice
        break;
      //special
      case '763':
        weaponPrices.M37Piercer.name = res.data[0].name
        weaponPrices.M37Piercer.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.M37Piercer.sellPrice = res.data[0].formatSellPrice
        break;
      case '1053':
        weaponPrices.Sinus0.name = res.data[0].name
        weaponPrices.Sinus0.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.Sinus0.sellPrice = res.data[0].formatSellPrice
        break;
      case '457':
        weaponPrices.Goblin.name = res.data[0].name
        weaponPrices.Goblin.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.Goblin.sellPrice = res.data[0].formatSellPrice
        break;
      case '598':
        weaponPrices.Junkbow.name = res.data[0].name
        weaponPrices.Junkbow.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.Junkbow.sellPrice = res.data[0].formatSellPrice
        break;
      case '1057':
        weaponPrices.Mace.name = res.data[0].name
        weaponPrices.Mace.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.Mace.sellPrice = res.data[0].formatSellPrice
        break;
      case '1051':
        weaponPrices.AC50Storm.name = res.data[0].name
        weaponPrices.AC50Storm.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.AC50Storm.sellPrice = res.data[0].formatSellPrice
        break;
      case '1050':
        weaponPrices.ZS33Hulk.name = res.data[0].name
        weaponPrices.ZS33Hulk.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.ZS33Hulk.sellPrice = res.data[0].formatSellPrice
        break;
      case '1049':
        weaponPrices.Prosecutor76mm.name = res.data[0].name
        weaponPrices.Prosecutor76mm.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.Prosecutor76mm.sellPrice = res.data[0].formatSellPrice
        break;
      case '475':
        weaponPrices.Synthesis.name = res.data[0].name
        weaponPrices.Synthesis.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.Synthesis.sellPrice = res.data[0].formatSellPrice
        break;
      case '72':
        weaponPrices.Boom.name = res.data[0].name
        weaponPrices.Boom.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.Boom.sellPrice = res.data[0].formatSellPrice
        break;
      case '1251':
        weaponPrices.Tempura.name = res.data[0].name
        weaponPrices.Tempura.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.Tempura.sellPrice = res.data[0].formatSellPrice
        break;
      case '73':
        weaponPrices.Buzzsaw.name = res.data[0].name
        weaponPrices.Buzzsaw.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.Buzzsaw.sellPrice = res.data[0].formatSellPrice
        break;
      case '1060':
        weaponPrices.AD13Hawk.name = res.data[0].name
        weaponPrices.AD13Hawk.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.AD13Hawk.sellPrice = res.data[0].formatSellPrice
        break;
      case '373':
        weaponPrices.Sidekick.name = res.data[0].name
        weaponPrices.Sidekick.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.Sidekick.sellPrice = res.data[0].formatSellPrice
        break;
      case '1065':
        weaponPrices.T3Python.name = res.data[0].name
        weaponPrices.T3Python.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.T3Python.sellPrice = res.data[0].formatSellPrice
        break;
      //epic
      case '928':
        weaponPrices.M29Protector.name = res.data[0].name
        weaponPrices.M29Protector.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.M29Protector.sellPrice = res.data[0].formatSellPrice
        break;
      case '865':
        weaponPrices.M38Fidget.name = res.data[0].name
        weaponPrices.M38Fidget.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.M38Fidget.sellPrice = res.data[0].formatSellPrice
        break;
      case '40':
        weaponPrices.Spectre2.name = res.data[0].name
        weaponPrices.Spectre2.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.Spectre2.sellPrice = res.data[0].formatSellPrice
        break;
      case '31':
        weaponPrices.MG13Equalizer.name = res.data[0].name
        weaponPrices.MG13Equalizer.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.MG13Equalizer.sellPrice = res.data[0].formatSellPrice
        break;
      case '375':
        weaponPrices.Caucasus.name = res.data[0].name
        weaponPrices.Caucasus.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.Caucasus.sellPrice = res.data[0].formatSellPrice
        break;
      case '1316':
        weaponPrices.Gremlin.name = res.data[0].name
        weaponPrices.Gremlin.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.Gremlin.sellPrice = res.data[0].formatSellPrice
        break;
      case '765':
        weaponPrices.Fafnir.name = res.data[0].name
        weaponPrices.Fafnir.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.Fafnir.sellPrice = res.data[0].formatSellPrice
        break;
      case '1':
        weaponPrices.Thunderbolt.name = res.data[0].name
        weaponPrices.Thunderbolt.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.Thunderbolt.sellPrice = res.data[0].formatSellPrice
        break;
      case '1012':
        weaponPrices.Rupture.name = res.data[0].name
        weaponPrices.Rupture.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.Rupture.sellPrice = res.data[0].formatSellPrice
        break;
      case '32':
        weaponPrices.AC72Whirlwind.name = res.data[0].name
        weaponPrices.AC72Whirlwind.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.AC72Whirlwind.sellPrice = res.data[0].formatSellPrice
        break;
      case '8':
        weaponPrices.ZS34FatMan.name = res.data[0].name
        weaponPrices.ZS34FatMan.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.ZS34FatMan.sellPrice = res.data[0].formatSellPrice
        break;
      case '45':
        weaponPrices.Executioner88mm.name = res.data[0].name
        weaponPrices.Executioner88mm.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.Executioner88mm.sellPrice = res.data[0].formatSellPrice
        break;
      case '38':
        weaponPrices.Cricket.name = res.data[0].name
        weaponPrices.Cricket.buyPrice = res.data[0].formatBuyPrice
        weaponPrices.Cricket.sellPrice = res.data[0].formatSellPrice
        break;
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
export function weaponIdsArr(): string[] {
  return [
    '93', //P54MAccord
    '5', //Lupara
    '99', //Avenger57mm

    '74', //STM23Defender
    '7', //Vector
    '2', //Sledgehammer
    '4', //Spitfire
    '34', //AC43Rapier
    '61', //LittleBoy6LB
    '70', //Judge76mm
    '44', //Wasp
    '51', //Borer
    '94', //AD12Falcon
    '123', //DTCobra

    '763', //M37Piercer
    '1053', //Sinus0
    '457', //Goblin
    '598', //Junkbow
    '1057', //Mace
    '1051', //AC50Storm
    '1050', //ZS33Hulk
    '1049', //Prosecutor76mm
    '475', //Synthesis
    '72', //Boom
    '1251', //Tempura
    '73', //Buzzsaw
    '1060', //AD13Hawk
    '373', //Sidekick
    '1065', //T3Python

    '928', //M29Protector
    '865', //M38Fidget
    '40', //Spectre2
    '31', //MG13Equalizer
    '375', //Caucasus
    '1316', //Gremlin
    '765', //Fafnir
    '1', //Thunderbolt
    '1012', //Rupture
    '32', //AC72Whirlwind
    '8', //ZS34FatMan
    '45', //Executioner88mm
    '38', //Cricket
    '6', //Pyre
    '374', //ClarinetTOW
    '1314', //Thresher
    '30', //GL55Impulse
    '498', //Aurora
    '490', //Quasar
    '764', //PrometheusV
    '609', //Phoenix
    '84', //Lancelot
    '92', //Mauler
    '618', //Incinerator
    '79', //MD3Owl
    '455', //Fuze
    '124', //RTAnaconda
    '508', //BarrierIX
    '1248', //Yaoguai
    '594', //Skinner
  ]
}
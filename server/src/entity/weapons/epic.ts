import { ICarComponent } from '../../interfaces/carComponent.interface'
import { Pilgrim, Jawbreaker } from '../cabins/special'
import { Ampere, PU1Charge, Chameleon, DunHorse, Maxwell, Hardcore, Genesis, OculusVI } from '../hardware/special'
import { LunarIVST, LunarIV, Shiv, APCWheel, TwinWheel, APCWheelST, TwinWheelST, ShivST } from '../movement/special'
import { Synthesis, Prosecutor76mm, T4Python, AC50Storm, Sinus0, ZS33Hulk, Mace, Goblin, Boom, Buzzsaw, Junkbow, Sidekick, AD13Hawk } from './special'

export class Aurora implements ICarComponent {
  name = 'Аврора'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 100
  ingredients = [new Synthesis(), new LunarIVST(), new Ampere()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class GL55Impulse implements ICarComponent {
  name = 'АГС-55 Импульс'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 150
  copper = 200
  plastic = 100
  ingredients = [new Prosecutor76mm(), new T4Python(), new PU1Charge()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class AC72Whirlwind implements ICarComponent {
  name = 'АП72 Вихрь'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 150
  copper = 200
  plastic = 100
  ingredients = [new AC50Storm(), new Chameleon(), new Sinus0()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class BarrierIX implements ICarComponent {
  name = 'Барьер IX'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 100
  ingredients = [new Pilgrim(), new LunarIV(), new T4Python()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class Nest implements ICarComponent {
  name = 'Гнездо'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 100
  ingredients = [new ZS33Hulk(), new PU1Charge(), new T4Python()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class Gravastar implements ICarComponent {
  name = 'Гравастар'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 100
  copper = 100
  plastic = 100
  ingredients = [new Synthesis(), new LunarIV(), new Mace()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class Gremlin implements ICarComponent {
  name = 'Гремлин'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 250
  wires = 200
  copper = 250
  plastic = 60
  batteries = 100
  ingredients = [new Goblin(), new Mace(), new Boom()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class Thunderbolt implements ICarComponent {
  name = 'Гром'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 150
  copper = 200
  plastic = 100
  ingredients = [new Mace(), new Goblin(), new Buzzsaw()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class Thresher implements ICarComponent {
  name = 'Дробитель'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 250
  wires = 200
  copper = 250
  plastic = 60
  batteries = 100
  ingredients = [new AC50Storm(), new DunHorse(), new Maxwell()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class Fuze implements ICarComponent {
  name = 'Запал'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 100
  ingredients = [new Hardcore(), new Boom(), new Goblin()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class ZS34FatMan implements ICarComponent {
  name = 'ЗИС-34 Толстяк'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 100
  ingredients = [new TwinWheelST(), new ZS33Hulk()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class Incinerator implements ICarComponent {
  name = 'Испепелитель'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 100
  ingredients = [new Shiv(), new Junkbow(), new PU1Charge()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class Caucasus implements ICarComponent {
  name = 'Кавказ'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 100
  ingredients = [new Prosecutor76mm(), new Jawbreaker(), new APCWheel()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class Quasar implements ICarComponent {
  name = 'Квазар'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 100
  ingredients = [new ZS33Hulk(), new Synthesis(), new Genesis()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class Lancelot implements ICarComponent {
  name = 'Ланселот'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 150
  copper = 200
  plastic = 100
  ingredients = [new Boom(), new Goblin(), new Hardcore()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class M29Protector implements ICarComponent {
  name = 'П-29 Заступник'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 100
  ingredients = [new Sinus0(), new DunHorse(), new Chameleon()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
// export class M38Fidget implements ICarComponent {
//   name = 'П-38 Егоза'
//   rarity = 'epic'
//   benchCost = 15
//   scrapMetal = 600
//   wires = 200
//   copper = 600
//   plastic = 1
//   ingredients = [new Plastic x100(), new Engraved casings x100(), new M - 37 Piercer()]
//   getScrapMetal = () => {
//     return this.scrapMetal
//   }
//   getAllScrapMetal = () => {
//     let scrapMetalCount = this.getScrapMetal()
//     for (let item of this.ingredients) {
//       scrapMetalCount += item.getScrapMetal()
//     }
//     return scrapMetalCount
//   }
// }
export class Executioner88mm implements ICarComponent {
  name = 'Палач 88мм'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 150
  copper = 200
  plastic = 100
  ingredients = [new Prosecutor76mm(), new TwinWheel(), new OculusVI()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class Pyre implements ICarComponent {
  name = 'Пламя'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 150
  copper = 200
  plastic = 100
  ingredients = [new Prosecutor76mm(), new OculusVI(), new T4Python()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class PrometheusV implements ICarComponent {
  name = 'Прометей V'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 100
  ingredients = [new Synthesis(), new Genesis(), new Maxwell()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
// export class Enlightenment implements ICarComponent {
//   name = 'Просветление'
//   rarity = 'epic'
//   benchCost = 15
//   scrapMetal = 250
//   wires = 250
//   copper = 200
//   plastic = 1
//   ingredients = [new Batteries x100(), new Plastic x100(), new Tempura()]
//   getScrapMetal = () => {
//     return this.scrapMetal
//   }
//   getAllScrapMetal = () => {
//     let scrapMetalCount = this.getScrapMetal()
//     for (let item of this.ingredients) {
//       scrapMetalCount += item.getScrapMetal()
//     }
//     return scrapMetalCount
//   }
// }
export class ClarinetTOW implements ICarComponent {
  name = 'ПТУР Кларнет-С'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 100
  ingredients = [new T4Python(), new Sidekick(), new APCWheelST()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class MG13Equalizer implements ICarComponent {
  name = 'ПУ13 Уравнитель'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 150
  copper = 200
  plastic = 100
  ingredients = [new AC50Storm(), new Sinus0(), new Ampere()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
// export class Rupture implements ICarComponent {
//   name = 'Разрыватель'
//   rarity = 'epic'
//   benchCost = 15
//   scrapMetal = 100
//   wires = 150
//   copper = 200
//   plastic = 1
//   ingredients = [new Plastic x100(), new Goblin(), new Hardcore()]
//   getScrapMetal = () => {
//     return this.scrapMetal
//   }
//   getAllScrapMetal = () => {
//     let scrapMetalCount = this.getScrapMetal()
//     for (let item of this.ingredients) {
//       scrapMetalCount += item.getScrapMetal()
//     }
//     return scrapMetalCount
//   }
// }
export class MD3Owl implements ICarComponent {
  name = 'РД-3 Филин'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 150
  copper = 200
  plastic = 100
  ingredients = [new AD13Hawk(), new Ampere(), new Sinus0()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class Cricket implements ICarComponent {
  name = 'Сверчок'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 150
  copper = 200
  plastic = 100
  ingredients = [new Goblin(), new Boom(), new Mace()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class Spectre2 implements ICarComponent {
  name = 'Спектр-2'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 150
  copper = 200
  plastic = 100
  ingredients = [new Sinus0(), new AD13Hawk(), new Maxwell()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class Mauler implements ICarComponent {
  name = 'Терзатель'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 150
  copper = 200
  plastic = 100
  ingredients = [new Buzzsaw(), new Boom(), new Goblin()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class RTAnaconda implements ICarComponent {
  name = 'ТР Анаконда'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 150
  copper = 200
  plastic = 100
  ingredients = [new T4Python(), new PU1Charge(), new TwinWheelST()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
// export class Trigger implements ICarComponent {
//   name = 'Триггер'
//   rarity = 'epic'
//   benchCost = 15
//   scrapMetal = 100
//   wires = 150
//   copper = 200
//   plastic = 2
//   ingredients = [new Plastic x100(), new Summator(), new Oculus VI()]
//   getScrapMetal = () => {
//     return this.scrapMetal
//   }
//   getAllScrapMetal = () => {
//     let scrapMetalCount = this.getScrapMetal()
//     for (let item of this.ingredients) {
//       scrapMetalCount += item.getScrapMetal()
//     }
//     return scrapMetalCount
//   }
// }
// export class Trombone implements ICarComponent {
//   name = 'Тромбон'
//   rarity = 'epic'
//   benchCost = 15
//   scrapMetal = 250
//   wires = 250
//   copper = 200
//   plastic = 1
//   ingredients = [new Batteries x100(), new Plastic x100(), new Sidekick()]
//   getScrapMetal = () => {
//     return this.scrapMetal
//   }
//   getAllScrapMetal = () => {
//     let scrapMetalCount = this.getScrapMetal()
//     for (let item of this.ingredients) {
//       scrapMetalCount += item.getScrapMetal()
//     }
//     return scrapMetalCount
//   }
// }
export class Fafnir implements ICarComponent {
  name = 'Фафнир'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 100
  ingredients = [new Junkbow(), new ZS33Hulk()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
export class Phoenix implements ICarComponent {
  name = 'Феникс'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 100
  ingredients = [new Junkbow(), new Shiv(), new Boom()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
// export class Whirl implements ICarComponent {
//   name = 'Циклон'
//   rarity = 'epic'
//   benchCost = 15
//   scrapMetal = 100
//   wires = 200
//   copper = 150
//   plastic = 100
//   ingredients = [new Plastic x100(), new AC50 Storm(), new APC wheel()]
//   getScrapMetal = () => {
//     return this.scrapMetal
//   }
//   getAllScrapMetal = () => {
//     let scrapMetalCount = this.getScrapMetal()
//     for (let item of this.ingredients) {
//       scrapMetalCount += item.getScrapMetal()
//     }
//     return scrapMetalCount
//   }
// }
export class Skinner implements ICarComponent {
  name = 'Шкуродер'
  rarity = 'epic'
  benchCost = 15
  scrapMetal = 100
  wires = 200
  copper = 150
  plastic = 100
  ingredients = [new Junkbow(), new ShivST(), new Mace()]
  getScrapMetal = () => {
    return this.scrapMetal
  }
  getAllScrapMetal = () => {
    let scrapMetalCount = this.getScrapMetal()
    for (let item of this.ingredients) {
      scrapMetalCount += item.getScrapMetal()
    }
    return scrapMetalCount
  }
}
// export class Yaoguai implements ICarComponent {
//   name = 'Яогуай'
//   rarity = 'epic'
//   benchCost = 15
//   scrapMetal = 250
//   wires = 250
//   copper = 200
//   plastic = 1
//   ingredients = [new Batteries x100(), new Plastic x100(), new Tempura()]
//   getScrapMetal = () => {
//     return this.scrapMetal
//   }
//   getAllScrapMetal = () => {
//     let scrapMetalCount = this.getScrapMetal()
//     for (let item of this.ingredients) {
//       scrapMetalCount += item.getScrapMetal()
//     }
//     return scrapMetalCount
//   }
// }

//Аргумент
//Блокчейн
//Гунгнир
//Мельник


















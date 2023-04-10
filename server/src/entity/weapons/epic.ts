import { EpicVehicleComponent } from '../epicVehicleComponent'
import { Pilgrim, Jawbreaker } from '../cabins/special'
import { Ampere, PU1Charge, Chameleon, DunHorse, Maxwell, Hardcore, Genesis, OculusVI, Iris, Razorback } from '../hardware/special'
import { LunarIVST, LunarIV, Shiv, APCWheel, TwinWheel, APCWheelST, TwinWheelST, ShivST } from '../movement/special'
import { Synthesis, Prosecutor76mm, T3Python, AC50Storm, Sinus0, ZS33Hulk, Mace, Goblin, Boom, Buzzsaw, Junkbow, Sidekick, AD13Hawk, M37Piercer, Tempura } from './special'

export class Aurora extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Аврора'
    this.type = ''
    this.ingredients = [new Synthesis(), new LunarIVST(), new Ampere()]
  }
}
export class GL55Impulse extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'АГС-55 Импульс'
    this.type = ''
    this.ingredients = [new Prosecutor76mm(), new T3Python(), new PU1Charge()]
  }
}
export class AC72Whirlwind extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'АП72 Вихрь'
    this.type = ''
    this.ingredients = [new AC50Storm(), new Chameleon(), new Sinus0()]
  }
}
export class BarrierIX extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Барьер IX'
    this.type = ''
    this.ingredients = [new Pilgrim(), new LunarIV(), new T3Python()]
  }
}
export class Nest extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Гнездо'
    this.type = ''
    this.ingredients = [new ZS33Hulk(), new PU1Charge(), new T3Python()]
  }
}
export class Gravastar extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Гравастар'
    this.type = ''
    this.ingredients = [new Synthesis(), new LunarIV(), new Mace()]
  }
}
export class Gremlin extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Гремлин'
    this.type = ''
    this.scrapMetal = 250
    this.wires = 200
    this.copper = 250
    this.plastic = 60
    this.batteries = 100
    this.ingredients = [new Goblin(), new Mace(), new Boom()]
  }
}
export class Thunderbolt extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Гром'
    this.type = ''
    this.ingredients = [new Mace(), new Goblin(), new Buzzsaw()]
  }
}
export class Thresher extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Дробитель'
    this.type = ''
    this.scrapMetal = 250
    this.wires = 200
    this.copper = 250
    this.plastic = 60
    this.batteries = 100
    this.ingredients = [new AC50Storm(), new DunHorse(), new Maxwell()]
  }

  
}
export class Fuze extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Запал'
    this.type = ''
    this.ingredients = [new Hardcore(), new Boom(), new Goblin()]
  }
}
export class ZS34FatMan extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'ЗИС-34 Толстяк'
    this.type = ''
    this.ingredients = [new TwinWheelST(), new ZS33Hulk()]
  }
}
export class Incinerator extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Испепелитель'
    this.type = ''
    this.ingredients = [new Shiv(), new Junkbow(), new PU1Charge()]
  }
}
export class Caucasus extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Кавказ'
    this.type = ''
    this.ingredients = [new Prosecutor76mm(), new Jawbreaker(), new APCWheel()]
  }
}
export class Quasar extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Квазар'
    this.type = ''
    this.ingredients = [new ZS33Hulk(), new Synthesis(), new Genesis()]
  }
}
export class Lancelot extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Ланселот'
    this.type = ''
    this.ingredients = [new Boom(), new Goblin(), new Hardcore()]
  }
}
export class M29Protector extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'П-29 Заступник'
    this.type = ''
    this.ingredients = [new Sinus0(), new DunHorse(), new Chameleon()]
  }
}
export class M38Fidget extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'П-38 Егоза'
    this.type = ''
    this.scrapMetal = 600
    this.wires = 200
    this.copper = 600
    this.plastic = 100
    this.engravedCasings = 200
    this.ingredients = [new M37Piercer(), new AC50Storm(), new Razorback()]
  }
}
export class Executioner88mm extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Палач 88мм'
    this.type = ''
    this.ingredients = [new Prosecutor76mm(), new TwinWheel(), new OculusVI()]
  }
}
export class Pyre extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Пламя'
    this.type = ''
    this.ingredients = [new Prosecutor76mm(), new OculusVI(), new T3Python()]
  }
}
export class PrometheusV extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Прометей V'
    this.type = ''
    this.ingredients = [new Synthesis(), new Genesis(), new Maxwell()]
  }
}
export class ClarinetTOW extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'ПТУР Кларнет-С'
    this.type = ''
    this.ingredients = [new T3Python(), new Sidekick(), new APCWheelST()]
  }
}
export class MG13Equalizer extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'ПУ13 Уравнитель'
    this.type = ''
    this.ingredients = [new AC50Storm(), new Sinus0(), new Ampere()]
  }
}
export class Rupture extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Разрыватель'
    this.type = ''
    this.ingredients = [new Goblin(), new Hardcore(), new Buzzsaw()]
  }
}
export class MD3Owl extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'РД-3 Филин'
    this.type = ''
    this.ingredients = [new AD13Hawk(), new Ampere(), new Sinus0()]
  }
}
export class Cricket extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Сверчок'
    this.type = ''
    this.ingredients = [new Goblin(), new Boom(), new Mace()]
  }
}
export class Spectre2 extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Спектр-2'
    this.type = ''
    this.ingredients = [new Sinus0(), new AD13Hawk(), new Maxwell()]
  }
}
export class Mauler extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Терзатель'
    this.type = ''
    this.ingredients = [new Buzzsaw(), new Boom(), new Goblin()]
  }
}
export class RTAnaconda extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'ТР Анаконда'
    this.type = ''
    this.ingredients = [new T3Python(), new PU1Charge(), new TwinWheelST()]
  }
}
export class Fafnir extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Фафнир'
    this.type = ''
    this.ingredients = [new Junkbow(), new ZS33Hulk()]
  }
}
export class Phoenix extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Феникс'
    this.type = ''
    this.ingredients = [new Junkbow(), new Shiv(), new Boom()]
  }
}
export class Whirl extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Циклон'
    this.type = ''
    this.ingredients = [new AC50Storm(), new APCWheel(), new Sidekick()]
  }
}
export class Skinner extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Шкуродер'
    this.type = ''
    this.ingredients = [new Junkbow(), new ShivST(), new Mace()]
  }
}
export class Yaoguai extends EpicVehicleComponent {
  constructor() {
    super()
    this.name = 'Яогуай'
    this.type = ''
    this.scrapMetal = 250
    this.wires = 200
    this.copper = 250
    this.plastic = 60
    this.batteries = 100
    this.ingredients = [new Tempura(), new Sidekick(), new AD13Hawk()]
  }
}


















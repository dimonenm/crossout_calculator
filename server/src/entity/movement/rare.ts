import { ICarComponent } from '../../interfaces/carComponent.interface'
import { WWT1 } from '../cabins/common'
import { MediumWheel, MediumWheelST, SmallWheel, SmallWheelST } from './common'

export class LargeWheel implements ICarComponent {
  name = ''
  rarity = 'rare'
  benchCost = 3
  scrapMetal = 600
  copper = 130
  ingredients = [new SmallWheel(), new WWT1()]

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
export class LargeWheelST implements ICarComponent {
  name = ''
  rarity = 'rare'
  benchCost = 3
  scrapMetal = 600
  copper = 130
  ingredients = [new MediumWheelST(), new WWT1()]

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
export class RacingWheel implements ICarComponent {
  name = ''
  rarity = 'rare'
  benchCost = 3
  scrapMetal = 600
  copper = 130
  ingredients = [new MediumWheel(), new SmallWheel()]

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

export class RacingWheelST implements ICarComponent {
  name = ''
  rarity = 'rare'
  benchCost = 3
  scrapMetal = 600
  copper = 130
  ingredients = [new MediumWheelST(), new SmallWheelST()]

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

export class ChainedWheel implements ICarComponent {
  name = ''
  rarity = 'rare'
  benchCost = 3
  scrapMetal = 600
  copper = 130
  ingredients = [new MediumWheel(), new SmallWheel()]

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

export class ChainedWheelST implements ICarComponent {
  name = ''
  rarity = 'rare'
  benchCost = 3
  scrapMetal = 600
  copper = 130
  ingredients = [new MediumWheelST(), new SmallWheelST()]

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

export class StuddedWheel implements ICarComponent {
  name = ''
  rarity = 'rare'
  benchCost = 3
  scrapMetal = 600
  copper = 130
  ingredients = [new SmallWheel(), new MediumWheel()]

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

export class StuddedWheelST implements ICarComponent {
  name = ''
  rarity = 'rare'
  benchCost = 3
  scrapMetal = 600
  copper = 130
  ingredients = [new SmallWheelST(), new MediumWheelST()]

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

export class LandingGear implements ICarComponent {
  name = ''
  rarity = 'rare'
  benchCost = 3
  scrapMetal = 600
  copper = 130
  ingredients = [new SmallWheel(), new MediumWheel()]

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

export class LandingGearST implements ICarComponent {
  name = ''
  rarity = 'rare'
  benchCost = 3
  scrapMetal = 600
  copper = 130
  ingredients = [new SmallWheelST(), new MediumWheelST()]

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

export class BalloonTyre implements ICarComponent {
  name = ''
  rarity = 'rare'
  benchCost = 3
  scrapMetal = 600
  copper = 130
  ingredients = [new MediumWheel()]

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

export class BalloonTyreST implements ICarComponent {
  name = ''
  rarity = 'rare'
  benchCost = 3
  scrapMetal = 600
  copper = 130
  ingredients = [new SmallWheelST()]

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
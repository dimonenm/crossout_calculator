import { Controller, Get } from '@nestjs/common';
import axios from 'axios';
import { IAllPrices, IResponse } from './prices.interface';
import { PricesService } from './prices.service';

@Controller('prices')
export class PricesController {
  constructor(private readonly pricesService: PricesService) {}

  @Get('start')
  startGettingPrices(): Promise<IResponse> {
    return this.pricesService.startGettingPrices()
  }
  @Get('stop')
  stopGettingPrices(): string {
    return this.pricesService.stopGettingPrices();
  }
  // @Get('weaponPrices')
  // getCabinPrices(): string {
  //   return this.pricesService.getCabinPrices();
  // }
}

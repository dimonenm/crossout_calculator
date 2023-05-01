import { Injectable } from '@nestjs/common';

@Injectable()
export class PricesService {
  getScrapMetalPrice() {
    return 4.95;
  }
}

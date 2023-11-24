import { Injectable } from '@nestjs/common';
import { GoodsCreateDto } from './dto/goods.dto';

@Injectable()
export class CommonService {
  private goods: GoodsCreateDto[] = [
    {
      name: 'Butter',
      description: 'goods milk',
      price: 20,
      image:
        'https://users-buy-market.s3.amazonaws.com/goods/6532a8a129723c213c0766f7/35e461c1-7e9c-401a-9357-292f974eb184.jpg',
    },
    {
      name: 'Milk',
      description: 'goods milk',
      price: 40,
      image:
        'https://users-buy-market.s3.amazonaws.com/goods/6532a8ac29723c213c076700/6deaf44b-94fa-4c9a-a1aa-b2b3a7d9d5e9.jpg',
    },
  ];
  constructor() {}

  async removeTodo(id: string) {
    console.log(id);
    return this.goods.filter((el) => el.name !== id);
  }
  async getGoodsList() {
    return this.goods;
  }

  async createGood(goodsData: GoodsCreateDto) {
    if (goodsData) {
      this.goods.push(goodsData);
    }
    return this.goods;
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import * as db from '../../db.json';
import { Product } from 'src/interfaces/product.interface';
import { PaginatedDto, PaginateMetadata } from 'src/dto/paginated.dto';

export type PaginateProductsContext = {
  start: number;
  limit?: number;
};

@Injectable()
export class ProductsService {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  private products: Product[] = db;

  constructor() {}

  paginate({ start, limit = 10 }: PaginateProductsContext) {
    console.log({ start, limit });

    const total = this.products.length;
    const remaining = Math.max(0, total - (start + limit));
    const hasMore = start + limit < total;
    const data = this.products.slice(start, start + limit);

    return new PaginatedDto({
      data,
      metadata: new PaginateMetadata({
        total,
        remaining,
        hasMore,
        limit,
        start,
        nextStart: start + limit,
      }),
    });
  }

  findOne(id: string) {
    const product = this.products.find((product) => product.id === id);

    if (!product) {
      throw new NotFoundException('product cannot be found');
    }

    return product;
  }
}

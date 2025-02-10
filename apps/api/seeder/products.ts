import { Product } from 'src/interfaces/product.interface';
import { faker } from '@faker-js/faker';
import { writeFileSync } from 'fs';
import { join } from 'path';
function main() {
  const products: Product[] = [
    {
      id: '0',
      title: 'Microsoft Surface Laptop',
      description: faker.commerce.productDescription(),
      price: `${faker.number.int({ min: 100, max: 1599 })} $`,
      discountPercentage: faker.number.float({ min: 0.15, max: 0.7 }),
      rating: faker.number.float({ min: 2, max: 5 }),
      stock: Math.random() > 0.5,
      brand: 'Microsoft',
      category: faker.commerce.productAdjective(),
      images: Array(5)
        .fill(null)
        .map(
          (_, i) =>
            ({
              width: 720,
              height: 480,
              url: `https://prd.place/720/480?id=${faker.number.int({ min: 1, max: 45 })}`,
              isThumbnail: i === 0,
            }) satisfies Product['images'][0],
        ),
    },
  ];
  for (let i = 1; i < 100; i++) {
    products.push({
      id: String(i),
      title: faker.commerce.product(),
      description: faker.commerce.productDescription(),
      price: `${faker.number.int({ min: 100, max: 1599 })} $`,
      discountPercentage: faker.number.float({ min: 0.15, max: 0.7 }),
      rating: faker.number.float({ min: 2, max: 5 }),
      stock: Math.random() > 0.5,
      brand: faker.commerce.productAdjective(),
      category: faker.commerce.productAdjective(),
      images: Array(5)
        .fill(null)
        .map(
          (_, i) =>
            ({
              width: 720,
              height: 480,
              //url: `https://picsum.photos/id/${faker.number.int({ min: 1, max: 155 })}/720/480`,
              url: `https://prd.place/720/480?id=${faker.number.int({ min: 1, max: 45 })}`,
              isThumbnail: i === 0,
            }) satisfies Product['images'][0],
        ),
    });
  }
  writeFileSync(
    join(process.cwd(), 'db.json'),
    JSON.stringify(products, null, 2),
  );
}

main();

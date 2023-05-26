const { faker } = require("@faker-js/faker");
const { writeFileSync } = require("fs");

async function seed() {
  // generate 100 products
  const products = Array.from(new Array(100), () => {
    const price = parseInt(
      faker.commerce.price({ dec: 0, max: 1000, min: 50 })
    );
    return {
      productName: faker.commerce.productName(),
      category: faker.commerce.department(),
      price: price,
      description: faker.commerce.productDescription(),
      material: faker.commerce.productMaterial(),
    };
  });
  writeFileSync("./products.json", JSON.stringify(products, null, 4));
}

seed();

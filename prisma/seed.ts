import { PrismaClient } from "@prisma/client";
import { categories, users } from "data";
import { createRef } from "./utils";

const prisma = new PrismaClient();

async function main() {
  await prisma.feedback.deleteMany();
  await prisma.orders.deleteMany();
  await prisma.items.deleteMany();
  await prisma.subcategories.deleteMany();
  await prisma.categories.deleteMany();
  await prisma.users.deleteMany();

  await prisma.users.createMany({
    data: users,
  });

  const categoryRecords = await (async () => {
    return await prisma.$transaction(
      categories.map((category) =>
        prisma.categories.create({ data: { category_name: category.name } }),
      ),
    );
  })();

  const categoryRef = createRef(categoryRecords, "category_name", "id");

  const subcategoryRecords = await (async () => {
    const data = categories
      .map(({ name, subcategories }) => {
        const category_id = categoryRef[name] || 0;
        return subcategories.map((subcategory_name) => {
          return {category_id, subcategory_name};
        });
      })
      .flat();
    return await prisma.$transaction(
      data.map(({category_id, subcategory_name}) =>
        prisma.subcategories.create({
          data: { category_id, subcategory_name },
        }),
      ),
    );
  })();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

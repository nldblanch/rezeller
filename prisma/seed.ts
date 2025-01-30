import { PrismaClient } from "@prisma/client";
import { categories, items, users } from "data";
import { convertDateToTimestamp, createLookup } from "./utils";

const prisma = new PrismaClient();

async function main() {
  await dropRecords();

  const usersRecords = await createUsers();

  const userLookup = createLookup(usersRecords, "username", "id");

  const categoryRecords = await createCategories();

  const categoryLookup = createLookup(categoryRecords, "category_name", "id");

  const subcategoryRecords = await createSubcategories(categoryLookup);

  const subcategoryLookup = createLookup(
    subcategoryRecords,
    "subcategory_name",
    "id",
  );

  const itemRecords = await createItems(
    userLookup,
    categoryLookup,
    subcategoryLookup,
  );
}

async function dropRecords() {
  await prisma.feedback.deleteMany();
  await prisma.orders.deleteMany();
  await prisma.items.deleteMany();
  await prisma.subcategories.deleteMany();
  await prisma.categories.deleteMany();
  await prisma.users.deleteMany();
}

async function createUsers() {
  return await prisma.$transaction(
    users.map((user) => prisma.users.create({ data: user })),
  );
}

async function createCategories() {
  return await prisma.$transaction(
    categories.map((category) =>
      prisma.categories.create({ data: { category_name: category.name } }),
    ),
  );
}

async function createSubcategories(
  categoryLookup: Record<string | number | symbol, number>,
) {
  const data = categories
    .map(({ name, subcategories }) => {
      const category_id = categoryLookup[name] || 0;
      return subcategories.map((subcategory_name) => {
        return { category_id, subcategory_name };
      });
    })
    .flat();
  return await prisma.$transaction(
    data.map(({ category_id, subcategory_name }) =>
      prisma.subcategories.create({
        data: { category_id, subcategory_name },
      }),
    ),
  );
}

async function createItems(
  userLookup: Record<string, number>,
  categoryLookup: Record<string, number>,
  subcategoryLookup: Record<string, number>,
) {
  const data = items.map(
    ({
      username,
      name,
      description,
      category,
      subcategory,
      tag,
      price,
      date_listed,
      photo_description,
      photo_source,
      available_item,
    }) => {
      const user_id = userLookup[username] || 0;
      const category_id = categoryLookup[category] || 0;
      const subcategory_id = subcategoryLookup[subcategory] || 0;
      return {
        user_id,
        name,
        description,
        tag,
        category_id,
        subcategory_id,
        price,
        date_listed: convertDateToTimestamp(date_listed),
        photo_description,
        photo_source,
        available_item,
      };
    },
  );

  return await prisma.$transaction(
    data.map((item) => prisma.items.create({ data: item })),
  );
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

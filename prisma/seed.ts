import { PrismaClient } from "@prisma/client";
import { categories, feedback, items, orders, users } from "data";
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

  const itemLookup = createLookup(itemRecords, "name", "id");

  const orderRecords = await createOrders(itemLookup, userLookup);

  const orderLookup = createLookup(orderRecords, "item_id", "id");

  await createFeedback(itemLookup, orderLookup, userLookup);
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

async function createSubcategories(categoryLookup: Record<string, number>) {
  const data = categories
    .map(({ name, subcategories }) => {
      const category_id = categoryLookup[name] ?? 0;
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
      const user_id = userLookup[username] ?? 0;
      const category_id = categoryLookup[category] ?? 0;
      const subcategory_id = subcategoryLookup[subcategory] ?? 0;
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

async function createOrders(
  itemLookup: Record<string, number>,
  userLookup: Record<string, number>,
) {
  const data = orders.map((order) => {
    return {
      buyer_id: userLookup[order.buyer] ?? 0,
      seller_id: userLookup[order.seller] ?? 0,
      item_id: itemLookup[order.item_name] ?? 0,
    };
  });
  return await prisma.$transaction(
    data.map((order) => prisma.orders.create({ data: order })),
  );
}

async function createFeedback(
  itemLookup: Record<string, number>,
  orderLookup: Record<string, number>,
  userLookup: Record<string, number>,
) {
  const data = feedback.map((comment) => {
    const item_id = itemLookup[comment.item_name] ?? 0;

    return {
      buyer_id: userLookup[comment.buyer] ?? 0,
      seller_id: userLookup[comment.seller] ?? 0,
      order_id: orderLookup[item_id] ?? 0,
      rating: comment.rating,
      comment: comment.comment,
      date_left: convertDateToTimestamp(comment.date_left),
    };
  });
  return await prisma.$transaction(
    data.map((feedback) => prisma.feedback.create({ data: feedback })),
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

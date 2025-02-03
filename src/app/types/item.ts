import type { Prisma } from "@prisma/client";

export type User = Prisma.UsersGetPayload<undefined>;

export type Item = Prisma.ItemsGetPayload<undefined>;

export type Category = Prisma.CategoriesGetPayload<undefined>;

export type Subcategory = Prisma.SubcategoriesGetPayload<undefined>;

export type Order = Prisma.OrdersGetPayload<undefined>;

export type Feedback = Prisma.FeedbackGetPayload<undefined>;

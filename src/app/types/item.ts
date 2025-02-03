import { Prisma } from "@prisma/client";

export type User = Prisma.UsersGetPayload<{}>;

export type Item = Prisma.ItemsGetPayload<{}>;

export type Category = Prisma.CategoriesGetPayload<{}>;

export type Subcategory = Prisma.SubcategoriesGetPayload<{}>;

export type Order = Prisma.OrdersGetPayload<{}>;

export type Feedback = Prisma.FeedbackGetPayload<{}>;

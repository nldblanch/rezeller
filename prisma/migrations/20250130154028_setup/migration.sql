/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "avatar_url" TEXT,
    "date_registered" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "balance" INTEGER NOT NULL,
    "ordersId" INTEGER,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categories" (
    "id" SERIAL NOT NULL,
    "category_name" TEXT NOT NULL,

    CONSTRAINT "Categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subcategories" (
    "id" SERIAL NOT NULL,
    "category_id" INTEGER NOT NULL,
    "subcategory_name" TEXT NOT NULL,

    CONSTRAINT "Subcategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Items" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "category_id" INTEGER NOT NULL,
    "subcategory_id" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "date_listed" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "available_item" BOOLEAN NOT NULL DEFAULT true,
    "photo_description" TEXT NOT NULL,
    "photo_source" TEXT[],

    CONSTRAINT "Items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Orders" (
    "id" SERIAL NOT NULL,
    "buyer_id" INTEGER NOT NULL,
    "seller_id" INTEGER NOT NULL,
    "item_id" INTEGER NOT NULL,
    "pending_order" BOOLEAN NOT NULL DEFAULT true,
    "date_ordered" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Feedback" (
    "id" SERIAL NOT NULL,
    "order_id" INTEGER NOT NULL,
    "buyer_id" INTEGER NOT NULL,
    "seller_id" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "date_left" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Subcategories_category_id_key" ON "Subcategories"("category_id");

-- CreateIndex
CREATE UNIQUE INDEX "Items_user_id_key" ON "Items"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Items_category_id_key" ON "Items"("category_id");

-- CreateIndex
CREATE UNIQUE INDEX "Items_subcategory_id_key" ON "Items"("subcategory_id");

-- CreateIndex
CREATE UNIQUE INDEX "Orders_buyer_id_key" ON "Orders"("buyer_id");

-- CreateIndex
CREATE UNIQUE INDEX "Orders_seller_id_key" ON "Orders"("seller_id");

-- CreateIndex
CREATE UNIQUE INDEX "Orders_item_id_key" ON "Orders"("item_id");

-- CreateIndex
CREATE UNIQUE INDEX "Feedback_order_id_key" ON "Feedback"("order_id");

-- CreateIndex
CREATE UNIQUE INDEX "Feedback_buyer_id_key" ON "Feedback"("buyer_id");

-- CreateIndex
CREATE UNIQUE INDEX "Feedback_seller_id_key" ON "Feedback"("seller_id");

-- AddForeignKey
ALTER TABLE "Subcategories" ADD CONSTRAINT "Subcategories_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Items" ADD CONSTRAINT "Items_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Items" ADD CONSTRAINT "Items_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Items" ADD CONSTRAINT "Items_subcategory_id_fkey" FOREIGN KEY ("subcategory_id") REFERENCES "Subcategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_buyer_id_fkey" FOREIGN KEY ("buyer_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_seller_id_fkey" FOREIGN KEY ("seller_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orders" ADD CONSTRAINT "Orders_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "Items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_buyer_id_fkey" FOREIGN KEY ("buyer_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_seller_id_fkey" FOREIGN KEY ("seller_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

import { api } from "~/trpc/server";
import OrdersModalClient from "./orders-modal-client";
import type { Order } from "~/app/types/item";

export default async function OrdersModalServer({
  orders,
}: {
  orders: Order[];
}) {
  const items = await api.items.fetchOrderItems(
    orders.map((order) => order.item_id),
  );

  return <OrdersModalClient orders={orders} items={items} />;
}

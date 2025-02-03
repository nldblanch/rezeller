import { api } from "~/trpc/server";
import ItemListClient from "./item-list-client";
import { notFound } from "next/navigation";

export default async function ItemListServer({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const searchTerm = searchParams.search?.toString();
  const category_id = searchParams.category?.toString();
  const subcategory_id = searchParams.subcategory?.toString();
  const min_price = searchParams.min_price?.toString();
  const max_price = searchParams.max_price?.toString();
  const sort_by = searchParams.sort_by as
    | "name"
    | "price"
    | "date_listed"
    | undefined;
  const order = searchParams.order as "asc" | "desc" | undefined;
  const p = Number(searchParams.p?.toString()) || 1;
  try {
    const items = await api.items.fetchAllItems({
      category_id,
      subcategory_id,
      price_from: min_price,
      price_to: max_price,
      tag: searchTerm,
      sort_by,
      order,
      p,
    });
    return <ItemListClient items={items} />;
  } catch {
    return notFound();
  }
}

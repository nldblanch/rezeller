import { api } from "~/trpc/server";
import ItemListClient from "./item-list-client";
import { NoItemError } from "~/server/api/routers/items";
import { TRPCError } from "@trpc/server";
export default async function ItemListServer({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) {
  const searchTerm = searchParams.search?.toString();
  const category_id = searchParams.category_id?.toString();
  const category = searchParams.category?.toString();
  const subcategory_id = searchParams.subcategory_id?.toString();
  const subcategory = searchParams.subcategory?.toString();
  const min_price = searchParams.min_price?.toString();
  const max_price = searchParams.max_price?.toString();
  const sort_by = searchParams.sort_by as
    | "name"
    | "price"
    | "date_listed"
    | undefined;
  const order = searchParams.order as "asc" | "desc" | undefined;
  const p = searchParams.p?.toString() ?? "1";
  try {
    const items = await api.items.fetchAllItems({
      category_id,
      category,
      subcategory_id,
      subcategory,
      price_from: min_price,
      price_to: max_price,
      tag: searchTerm,
      sort_by,
      order,
      p,
    });
    return <ItemListClient items={items} />;
  } catch (error) {
    if (error instanceof TRPCError && error.cause instanceof NoItemError) {
      const noItemError = error.cause;
      const { youMightLike } = noItemError;
      return (
        <section className="col-span-8">
          <h2 className="col-span-8 col-start-4 row-span-1 py-2 text-xl">
            We didn&apos;t find anything.
          </h2>
          {youMightLike && (
            <h3 className="col-span-8 col-start-4 row-start-2 py-2">
              You might like...
            </h3>
          )}
          {youMightLike && <ItemListClient items={youMightLike} />}
        </section>
      );
    }

    console.error("Unexpected error:", error);
    return <p>Something went wrong</p>;
  }
}

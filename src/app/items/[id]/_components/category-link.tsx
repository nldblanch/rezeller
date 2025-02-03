import Link from "next/link";

export default async function CategoryLink({ id }: { id: number }) {
  // transform: (categories) =>categories.filter((category) => category.id === id),
  // const extractCategory = (filteredCategory: Category[] | null) => {
  //   if (!filteredCategory) return { id: -1, category_name: "" };
  //   return filteredCategory[0];
  // };
  // const getCategoryName = (category: Category) => {
  //   return convertCategory(category.category_name);
  // };
  return (
    <Link href={`/items?category=${id}`}>
      <p className="p-1 text-[8px] italic hover:bg-zinc-950">
        {/* {getCategoryName(extractCategory(category))}, */}
        category name
      </p>
    </Link>
  );
}

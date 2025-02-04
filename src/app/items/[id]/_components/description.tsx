import type { Item } from "~/app/types/item";

export const Description = ({ item }: { item: Item }) => {
  const { description } = item;
  return (
    <section className="m-2 p-2 mobileLandscape:mx-0 mobileLandscape:px-0">
      <h4>Item description from the seller</h4>
      <p className="text-sm">{description}</p>
    </section>
  );
};

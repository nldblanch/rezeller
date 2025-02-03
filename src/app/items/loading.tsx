export default function Loading() {
  const styles = {
    square_image_skeleton:
      "aspect-square object-cover bg-zinc-500 animate-pulse",
    header_skeleton: "h-20 bg-zinc-500 animate-pulse",
    small_header_skeleton: "h-8 bg-zinc-500 animate-pulse",
    text_skeleton: "bg-zinc-500 animate-pulse",
    small_text_skeleton: "h-2 bg-zinc-500 animate-pulse",
  };
  return (
    <ul className="tablet:col-span-6 tablet:col-start-4 col-span-full grid grid-cols-12 gap-4">
      <li className="col-span-full">
        <section className="desktop:grid-rows-1 grid w-full grid-cols-12 grid-rows-6">
          <img
            className={`desktop:col-span-3 col-span-5 row-span-full ${styles.square_image_skeleton} h-full w-full`}
          />

          <h3
            className={`col-span-7 ml-1 ${styles.header_skeleton} h-6 text-black`}
          ></h3>
          <p className={`col-span-3 ml-1 mt-1 h-4 ${styles.text_skeleton}`}></p>
        </section>
      </li>
      <li className="col-span-full">
        <section className="desktop:grid-rows-1 grid w-full grid-cols-12 grid-rows-6">
          <img
            className={`desktop:col-span-3 col-span-5 row-span-full ${styles.square_image_skeleton} h-full w-full`}
          />

          <h3
            className={`col-span-7 ml-1 ${styles.header_skeleton} h-6 text-black`}
          ></h3>
          <p className={`col-span-3 ml-1 mt-1 h-4 ${styles.text_skeleton}`}></p>
        </section>
      </li>
      <li className="col-span-full">
        <section className="desktop:grid-rows-1 grid w-full grid-cols-12 grid-rows-6">
          <img
            className={`desktop:col-span-3 col-span-5 row-span-full ${styles.square_image_skeleton} h-full w-full`}
          />

          <h3
            className={`col-span-7 ml-1 ${styles.header_skeleton} h-6 text-black`}
          ></h3>
          <p className={`col-span-3 ml-1 mt-1 h-4 ${styles.text_skeleton}`}></p>
        </section>
      </li>
    </ul>
  );
}

const styles = {
  square_image_skeleton:
    "aspect-square object-cover bg-zinc-500 animate-pulse",
  header_skeleton: "h-20 bg-zinc-500 animate-pulse",
  small_header_skeleton: "h-8 bg-zinc-500 animate-pulse",
  text_skeleton: "bg-zinc-500 animate-pulse",
  small_text_skeleton: "h-2 bg-zinc-500 animate-pulse",
};

export default function Loading() {
  return (
    <>
      <main className="mobile-landscape:mx-2 mobile-landscape:px-2">
        <section className="grid grid-cols-12">
          <img className={`w-full col-span-12 mobile-landscape:col-span-6 col-start-1 ${styles.square_image_skeleton}`} />
          <div className="col-span-12 mobile-landscape:col-span-6 p-4">
            <h2 className={`text-2xl w-full ${styles.header_skeleton} h-10`} />
            <div className="my-2" />
            <p className={`w-2/3 h-6 ${styles.text_skeleton}`} />
            <div className="my-2" />
            <p className={`w-4/5 h-6 ${styles.text_skeleton}`} />
          </div>
        </section>
        <section className="grid grid-cols-12 m-2 p-2 mobile-landscape:px-0 mobile-landscape:mx-0 opacity-50">
          <div className="col-span-12 mb-3" />
          <h4
            className={`col-span-full w-full mb-1 ${styles.small_header_skeleton}`}
          />

          <div className="col-span-full flex gap-1">
            <p className={`w-1/5 ${styles.small_text_skeleton}`} />
            <p className={`w-1/5 ${styles.small_text_skeleton}`} />
            <p className={`w-1/5 ${styles.small_text_skeleton}`} />
          </div>
          <p
            className={`col-span-12 w-5/6 mt-1 ${styles.small_text_skeleton}`}
          />
          <div className="col-span-12 mt-3" />
        </section>
        <section className="m-2 p-2 mobile-landscape:px-0 mobile-landscape:mx-0">
          <h4 className={`w-full ${styles.small_header_skeleton}`} />
          <p className={`w-5/6 mt-1 ${styles.small_text_skeleton}`} />
        </section>
      </main>
    </>
  );
};

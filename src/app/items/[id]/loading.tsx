import Image from "next/image";

const styles = {
  square_image_skeleton: "aspect-square object-cover bg-zinc-500 animate-pulse",
  header_skeleton: "h-20 bg-zinc-500 animate-pulse",
  small_header_skeleton: "h-8 bg-zinc-500 animate-pulse",
  text_skeleton: "bg-zinc-500 animate-pulse",
  small_text_skeleton: "h-2 bg-zinc-500 animate-pulse",
};

export default function Loading() {
  return (
    <>
      <main className="mobileLandscape:mx-2 mobileLandscape:px-2">
        <section className="grid grid-cols-12">
          <Image
            src="/loading_background.png"
            alt="loading"
            className={`col-span-12 col-start-1 w-full mobileLandscape:col-span-6 ${styles.square_image_skeleton}`}
            width="20"
            height="20"
          />
          <div className="col-span-12 p-4 mobileLandscape:col-span-6">
            <h2 className={`w-full text-2xl ${styles.header_skeleton} h-10`} />
            <div className="my-2" />
            <p className={`h-6 w-2/3 ${styles.text_skeleton}`} />
            <div className="my-2" />
            <p className={`h-6 w-4/5 ${styles.text_skeleton}`} />
          </div>
        </section>
        <section className="m-2 grid grid-cols-12 p-2 opacity-50 mobileLandscape:mx-0 mobileLandscape:px-0">
          <div className="col-span-12 mb-3" />
          <h4
            className={`col-span-full mb-1 w-full ${styles.small_header_skeleton}`}
          />

          <div className="col-span-full flex gap-1">
            <p className={`w-1/5 ${styles.small_text_skeleton}`} />
            <p className={`w-1/5 ${styles.small_text_skeleton}`} />
            <p className={`w-1/5 ${styles.small_text_skeleton}`} />
          </div>
          <p
            className={`col-span-12 mt-1 w-5/6 ${styles.small_text_skeleton}`}
          />
          <div className="col-span-12 mt-3" />
        </section>
        <section className="m-2 p-2 mobileLandscape:mx-0 mobileLandscape:px-0">
          <h4 className={`w-full ${styles.small_header_skeleton}`} />
          <p className={`mt-1 w-5/6 ${styles.small_text_skeleton}`} />
        </section>
      </main>
    </>
  );
}

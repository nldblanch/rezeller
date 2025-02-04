import Image from "next/image";
import Link from "next/link";

export default function FrontPageHero() {
//   const styles = {
//     light: "b46bef",
//     text: "511f60",
//     dark: "2c051c",
//   };
  return (
    <section className="col-span-full flex h-[34rem] flex-col items-center justify-center gap-16 bg-[#b46bef] p-6 tabletLandscape:h-80 tabletLandscape:flex-row">
      <div className="flex h-full w-full flex-col justify-between tabletLandscape:w-1/4">
        <div className="flex flex-grow flex-col items-start justify-center gap-4">
          <h1 className={`text-3xl font-semibold text-[#511f60]`}>
            10% off? Yes, please!
          </h1>
          <p className={`font-semibold text-[#511f60]`}>
            Shop whatever you love with selected sellers.
          </p>
          <button
            className={`rounded-full bg-[#2c051c] px-4 py-2 font-bold text-[#b46bef]`}
          >
            Use code SWEET10
          </button>
        </div>
        <div className="mt-6 flex">
          <Link
            href="/"
            className="self-end text-sm font-bold text-[#511f60] underline"
          >
            Ends 9 Feb. Min spend £9.99. Max disc £75. T&Cs.
          </Link>
        </div>
      </div>
      <Link href={"/items"}>
        <Image src={"/coupons.png"} alt="coupons" width={500} height={500} />
      </Link>
    </section>
  );
}

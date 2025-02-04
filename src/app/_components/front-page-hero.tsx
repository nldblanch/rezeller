import Image from "next/image";
import Link from "next/link";

export default function FrontPageHero() {
  const styles = {
    light: "b46bef",
    text: "511f60",
    dark: "2c051c",
  };
  return (
    <section className="tabletLandscape:flex-row col-span-full flex tabletLandscape:h-80 h-[34rem] flex-col items-center justify-center gap-16 bg-[#b46bef] p-6">
      <div className="flex h-full tabletLandscape:w-1/4 flex-col justify-between w-full">
        <div className="flex-grow flex flex-col items-start justify-center gap-4">
          <h1 className={`text-3xl font-semibold text-[#511f60]`}>
            10% off? Yes, please!
          </h1>
          <p className={`font-semibold text-[#511f60]`}>
            Shop whatever you love with selected sellers.
          </p>
          <button className={`bg-[#2c051c] font-bold text-[#b46bef] px-4 py-2 rounded-full`}>
            Use code SWEET10
          </button>
        </div>
        <div className="flex mt-6">
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

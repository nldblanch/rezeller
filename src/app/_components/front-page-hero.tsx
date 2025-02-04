import Image from "next/image";
import Link from "next/link";

export default function FrontPageHero() {
  return (
    <section className="col-span-full h-80 bg-[#b46bef] flex justify-around items-center gap-16">
      <div>
        <h1 className="text-3xl text-black font-medium">10% off? Yes, please!</h1>
        <p className="text-black font-medium">Shop whatever you love with selected sellers.</p>
      </div>
      <Link href={"/items"}>
        <Image src={"/coupons.png"} alt="coupons" width={500} height={500}/>
      </Link>
    </section>
  );
}

import { cookies } from "next/headers";
import Link from "next/link";
import HeaderLinks from "./header-links";
import SearchBar from "./search-bar";

export default async function Header({ searchbar }: { searchbar: boolean }) {
  const user_id = (await cookies()).get("user_id");

  return (
    <header className="">
      <nav className="grid grid-cols-12 gap-2 p-2">
        <div className="mobile-landscape:col-span-3 col-span-6">
          <Link href="/">REZELLER</Link>
        </div>
        <div className="mobile-landscape:block mobile-landscape:col-span-6 mobile-landscape:col-start-4 hidden">
          {searchbar && <SearchBar />}
        </div>
        <ul className="mobile-landscape:col-span-3 mobile-landscape:col-start-10 col-span-6 flex justify-end gap-4">
          <HeaderLinks user_id={user_id} />
        </ul>
        <div className="mobile-landscape:hidden col-span-full">
          {searchbar && <SearchBar />}
        </div>
      </nav>
    </header>
  );
}

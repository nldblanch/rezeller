import { cookies } from "next/headers";
import Link from "next/link";
import HeaderLinks from "./header-links";
import SearchBar from "./search-bar";

export default async function Header({ searchbar }: { searchbar: boolean }) {
  const user_id = (await cookies()).get("user_id");

  return (
    <header className="">
      <nav className="grid grid-cols-12 gap-2 p-2">
        <div className="col-span-6 mobile-landscape:col-span-3">
          <Link href="/">REZELLER</Link>
        </div>
        <div className="hidden mobile-landscape:col-span-6 mobile-landscape:col-start-4 mobile-landscape:block">
          {searchbar && <SearchBar />}
        </div>
        <ul className="col-span-6 flex justify-end gap-4 mobile-landscape:col-span-3 mobile-landscape:col-start-10">
          <HeaderLinks user_id={user_id} />
        </ul>
        <div className="col-span-full mobile-landscape:hidden">
          {searchbar && <SearchBar />}
        </div>
      </nav>
    </header>
  );
}

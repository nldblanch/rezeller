import { cookies } from "next/headers";
import Link from "next/link";
import HeaderLinks from "./header-links";
import SearchBar from "./search-bar";
import { Suspense } from "react";

export default async function Header({ searchbar }: { searchbar: boolean }) {
  const user_id = (await cookies()).get("user_id");

  return (
    <header className="mb-2">
      <nav className="grid grid-cols-12 gap-2 p-2">
        <div className="col-span-6 mobileLandscape:col-span-3">
          <Link className="text-2xl tabletLandscape:text-3xl" href="/">
            REZELLER
          </Link>
        </div>
        <div className="hidden tablet:col-span-6 tablet:col-start-4 tablet:block">
          <Suspense fallback={<div>Loading search...</div>}>
            {searchbar && <SearchBar />}
          </Suspense>
        </div>
        <ul className="col-span-6 flex justify-end gap-4 mobileLandscape:col-span-3 mobileLandscape:col-start-10">
          <HeaderLinks user_id={user_id} />
        </ul>
        <div className="col-span-full tablet:hidden">
          <Suspense fallback={<div>Loading search...</div>}>
            {searchbar && <SearchBar />}
          </Suspense>
        </div>
      </nav>
    </header>
  );
}

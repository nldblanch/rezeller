"use client";
import { useRouter } from "next/navigation";

export default function Account() {
  const router = useRouter();
  const activeTab = "Account";

  return (
    <main className="mx-2 grid grid-cols-12 px-2">
      <h1 className="bold col-span-full col-start-1 mt-2 py-4 text-left text-2xl">
        My profile
      </h1>
      <nav className="col-span-full flex justify-between mb-2">
        <ul className="tablet:gap-8 justify-left flex h-full w-full items-center gap-4">
          {["Activity", "Account"].map((tab) => {
            return (
              <li
                key={tab}
                className={`text-lg font-bold hover:underline ${activeTab === tab ? "underline" : "text-zinc-400"}`}
                onClick={() =>
                  tab === "Activity"
                    ? router.push(`/profile`)
                    : router.push(`/profile/${tab.toLowerCase()}`)
                }
              >
                {tab}
              </li>
            );
          })}
        </ul>
      </nav>
      <section className="col-span-12 grid grid-cols-12 gap-6">
        <hgroup className="max-tablet:col-span-12 col-span-4">
          <h2 className="py-2 text-lg font-bold">
            Personal information and privacy
          </h2>
          <ul className="flex flex-col gap-2">
            <li>Personal information</li>
            <li>Sign-in and security</li>
            <li>Addresses</li>
            <li>Feedback</li>
            <li>Request your eBay data</li>
            <li>Resolution Hub</li>
          </ul>
        </hgroup>

        <hgroup className="max-tablet:col-span-full col-span-4">
          <h2 className="py-2 text-lg font-bold">Payment information</h2>
          <ul className="flex flex-col gap-2">
            <li>Payments</li>
          </ul>
        </hgroup>

        <hgroup className="max-tablet:col-span-full col-span-4">
          <h2 className="py-2 text-lg font-bold">Account preferences</h2>
          <ul className="flex flex-col gap-2">
            <li>Permissions</li>
            <li>Advertisement preferences</li>
            <li>Communication preferences</li>
            <li>Close account</li>
          </ul>
        </hgroup>

        <hgroup className="max-tablet:col-span-full col-span-4">
          <h2 className="py-2 text-lg font-bold">Selling</h2>

          <ul className="flex flex-col gap-2">
            <li>Seller Dashboard</li>

            <li>Seller account</li>
            <li>Communication with buyers</li>
            <li>Subscriptions</li>
            <li>Time Away</li>
            <li>Applications</li>
            <li>Business Policies</li>
            <li>Postage preferences</li>
            <li>Selling preferences</li>
            <li>Seller disclosures</li>
          </ul>
        </hgroup>
      </section>
    </main>
  );
}

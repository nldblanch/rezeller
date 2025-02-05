import { Skeleton, SVGSkeleton } from "~/app/_components/skeleton";

export default function Loading() {
  return (
    <>
      <main className="grid grid-cols-12 tablet:mx-2 tablet:px-2">
        <section className="col-span-3 h-full pr-2 max-tablet:hidden">
          <hgroup className="ml-auto max-w-96">
            <h2>
              <Skeleton className="w-[64px] max-w-full" />
            </h2>
            <ul>
              <div>
                <a>
                  <li className="items-left flex h-full w-full flex-col">
                    <p className="h-full p-1">
                      <Skeleton className="w-[192px] max-w-full" />
                    </p>
                  </li>
                </a>
              </div>
              <div>
                <a>
                  <li className="items-left flex h-full w-full flex-col">
                    <p className="h-full p-1">
                      <Skeleton className="w-[192px] max-w-full" />
                    </p>
                  </li>
                </a>
              </div>
              <div>
                <a>
                  <li className="items-left flex h-full w-full flex-col">
                    <p className="h-full p-1">
                      <Skeleton className="w-[120px] max-w-full" />
                    </p>
                  </li>
                </a>
              </div>
              <div>
                <a>
                  <li className="items-left flex h-full w-full flex-col">
                    <p className="h-full p-1">
                      <Skeleton className="w-[184px] max-w-full" />
                    </p>
                  </li>
                </a>
              </div>
              <div>
                <a>
                  <li className="items-left flex h-full w-full flex-col">
                    <p className="h-full p-1">
                      <Skeleton className="w-[144px] max-w-full" />
                    </p>
                  </li>
                </a>
              </div>
              <div>
                <a>
                  <li className="items-left flex h-full w-full flex-col">
                    <p className="h-full p-1">
                      <Skeleton className="w-[112px] max-w-full" />
                    </p>
                  </li>
                </a>
              </div>
              <div>
                <a>
                  <li className="items-left flex h-full w-full flex-col">
                    <p className="h-full p-1">
                      <Skeleton className="w-[152px] max-w-full" />
                    </p>
                  </li>
                </a>
              </div>
            </ul>
          </hgroup>
          <hgroup className="ml-auto max-w-96 pt-2">
            <h2>
              <Skeleton className="w-[40px] max-w-full" />
            </h2>
          </hgroup>
          <hgroup className="ml-auto max-w-96 pt-2">
            <h2>
              <Skeleton className="w-[48px] max-w-full" />
            </h2>
            <p className="p-1">
              <Skeleton className="w-[152px] max-w-full" />
            </p>
            <p className="p-1">
              <Skeleton className="w-[120px] max-w-full" />
            </p>
          </hgroup>
        </section>
        <ul className="col-span-full flex flex-col gap-4 tablet:col-span-6 tablet:col-start-4">
          <li className="max-h-40 w-full">
            <a className="flex h-full">
              <SVGSkeleton className="aspect-square h-[500px] max-h-40 w-[500px] max-w-40 object-cover" />
              <hgroup>
                <h3 className="px-2">
                  <Skeleton className="w-[136px] max-w-full" />
                </h3>
                <p className="px-2">
                  <Skeleton className="w-[40px] max-w-full" />
                </p>
              </hgroup>
            </a>
          </li>
          <li className="max-h-40 w-full">
            <a className="flex h-full">
              <SVGSkeleton className="aspect-square h-[500px] max-h-40 w-[500px] max-w-40 object-cover" />
              <hgroup>
                <h3 className="px-2">
                  <Skeleton className="w-[120px] max-w-full" />
                </h3>
                <p className="px-2">
                  <Skeleton className="w-[40px] max-w-full" />
                </p>
              </hgroup>
            </a>
          </li>
          <li className="max-h-40 w-full">
            <a className="flex h-full">
              <SVGSkeleton className="aspect-square h-[500px] max-h-40 w-[500px] max-w-40 object-cover" />
              <hgroup>
                <h3 className="px-2">
                  <Skeleton className="w-[280px] max-w-full" />
                </h3>
                <p className="px-2">
                  <Skeleton className="w-[48px] max-w-full" />
                </p>
              </hgroup>
            </a>
          </li>
          <li className="max-h-40 w-full">
            <a className="flex h-full">
              <SVGSkeleton className="aspect-square h-[500px] max-h-40 w-[500px] max-w-40 object-cover" />
              <hgroup>
                <h3 className="px-2">
                  <Skeleton className="w-[128px] max-w-full" />
                </h3>
                <p className="px-2">
                  <Skeleton className="w-[48px] max-w-full" />
                </p>
              </hgroup>
            </a>
          </li>
          <li className="max-h-40 w-full">
            <a className="flex h-full">
              <SVGSkeleton className="aspect-square h-[500px] max-h-40 w-[500px] max-w-40 object-cover" />
              <hgroup>
                <h3 className="px-2">
                  <Skeleton className="w-[40px] max-w-full" />
                </h3>
                <p className="px-2">
                  <Skeleton className="w-[56px] max-w-full" />
                </p>
              </hgroup>
            </a>
          </li>
          <li className="max-h-40 w-full">
            <a className="flex h-full">
              <SVGSkeleton className="aspect-square h-[500px] max-h-40 w-[500px] max-w-40 object-cover" />
              <hgroup>
                <h3 className="px-2">
                  <Skeleton className="w-[120px] max-w-full" />
                </h3>
                <p className="px-2">
                  <Skeleton className="w-[48px] max-w-full" />
                </p>
              </hgroup>
            </a>
          </li>
          <li className="max-h-40 w-full">
            <a className="flex h-full">
              <SVGSkeleton className="aspect-square h-[500px] max-h-40 w-[500px] max-w-40 object-cover" />
              <hgroup>
                <h3 className="px-2">
                  <Skeleton className="w-[248px] max-w-full" />
                </h3>
                <p className="px-2">
                  <Skeleton className="w-[48px] max-w-full" />
                </p>
              </hgroup>
            </a>
          </li>
        </ul>
      </main>
    </>
  );
}

import { Skeleton, SVGSkeleton } from "~/app/_components/skeleton";

export default async function Loading() {
  return (
    <>
      <>
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
      </>
    </>
  );
}

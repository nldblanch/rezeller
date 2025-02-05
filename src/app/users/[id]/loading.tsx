import { Skeleton, SVGSkeleton } from "~/app/_components/skeleton";

const LoadingSkeleton = () => (
  <>
    <main className="mobileLandscape:mx-2 mobileLandscape:px-2">
      <section className="grid grid-cols-12 gap-1 mobileLandscape:mx-0 mobileLandscape:px-0">
        <div className="col-span-full row-span-12 flex justify-center mobileLandscape:col-span-6 mobileLandscape:col-start-1 tabletLandscape:col-span-3">
          <SVGSkeleton className="aspect-square w-[500px] h-[500px]" />
        </div>
        <h2 className="col-span-5 col-start-2 mobileLandscape:col-start-8 tabletLandscape:col-span-4 tabletLandscape:col-start-5">
          <Skeleton className="w-[104px] max-w-full" />
        </h2>
      </section>
      <section className="my-4 grid grid-cols-12 mobileLandscape:mx-0 mobileLandscape:px-0">
        <h2 className="col-span-full">
          <Skeleton className="w-[176px] max-w-full" />
        </h2>
      </section>
      <section className="grid grid-cols-12 mobileLandscape:mx-0 mobileLandscape:px-0">
        <h3 className="col-span-full col-start-2">
          <Skeleton className="w-[112px] max-w-full" />
        </h3>
        <ul className="col-span-full grid grid-cols-3 gap-4">
          <div className="aspect-square">
            <li className="col-span-full aspect-square mobileLandscape:col-span-6 tabletLandscape:col-span-4 desktop:col-span-2">
              <a>
                <SVGSkeleton className="aspect-square rounded-lg object-cover w-[500px] h-[500px]" />
                <h3 className="px-2 pt-2">
                  <Skeleton className="w-[120px] max-w-full" />
                </h3>
                <p className="px-2">
                  <Skeleton className="w-[40px] max-w-full" />
                </p>
              </a>
            </li>
          </div>
          <div className="aspect-square">
            <li className="col-span-full aspect-square mobileLandscape:col-span-6 tabletLandscape:col-span-4 desktop:col-span-2">
              <a>
                <SVGSkeleton className="aspect-square rounded-lg object-cover w-[500px] h-[500px]" />
                <h3 className="px-2 pt-2">
                  <Skeleton className="w-[136px] max-w-full" />
                </h3>
                <p className="px-2">
                  <Skeleton className="w-[40px] max-w-full" />
                </p>
              </a>
            </li>
          </div>
          <div className="aspect-square">
            <li className="col-span-full aspect-square mobileLandscape:col-span-6 tabletLandscape:col-span-4 desktop:col-span-2">
              <a>
                <SVGSkeleton className="aspect-square rounded-lg object-cover w-[500px] h-[500px]" />
                <h3 className="px-2 pt-2">
                  <Skeleton className="w-[104px] max-w-full" />
                </h3>
                <p className="px-2">
                  <Skeleton className="w-[40px] max-w-full" />
                </p>
              </a>
            </li>
          </div>
          <div className="aspect-square">
            <li className="col-span-full aspect-square mobileLandscape:col-span-6 tabletLandscape:col-span-4 desktop:col-span-2">
              <a>
                <SVGSkeleton className="aspect-square rounded-lg object-cover w-[500px] h-[500px]" />
                <h3 className="px-2 pt-2">
                  <Skeleton className="w-[128px] max-w-full" />
                </h3>
                <p className="px-2">
                  <Skeleton className="w-[48px] max-w-full" />
                </p>
              </a>
            </li>
          </div>
          <div className="aspect-square">
            <li className="col-span-full aspect-square mobileLandscape:col-span-6 tabletLandscape:col-span-4 desktop:col-span-2">
              <a>
                <SVGSkeleton className="aspect-square rounded-lg object-cover w-[500px] h-[500px]" />
                <h3 className="px-2 pt-2">
                  <Skeleton className="w-[96px] max-w-full" />
                </h3>
                <p className="px-2">
                  <Skeleton className="w-[48px] max-w-full" />
                </p>
              </a>
            </li>
          </div>
        </ul>
      </section>
    </main>
  </>
);

const SandboxPreview = () => (
  <div className="flex justify-center w-full h-full p-10">
    <LoadingSkeleton />
  </div>
);

export default SandboxPreview;
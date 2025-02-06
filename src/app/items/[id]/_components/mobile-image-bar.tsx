import Image from "next/image";

export default function MobileImageBar({
  photo_source,
  setMainPhoto,
}: {
  photo_source: string[];
  setMainPhoto: React.Dispatch<React.SetStateAction<string | undefined>>;
}) {
  return (
    <ul className="tabletLandscape:hidden col-span-full mt-2 grid grid-cols-3 gap-2">
      {photo_source.map((photo, index) => {
        return (
          <li key={index} className="aspect-square">
            <button
              className="h-full w-full"
              onClick={() =>
                setMainPhoto((prev) => {
                  if (prev !== photo) return photo;
                  return prev;
                })
              }
            >
              <Image
                src={photo}
                alt="hero shot"
                className="col-span-1 h-full w-full rounded-lg object-cover"
                height={500}
                width={500}
              />
            </button>
          </li>
        );
      })}
    </ul>
  );
}

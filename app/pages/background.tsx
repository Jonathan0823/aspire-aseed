// Background.tsx
import Image from "next/image";
import background from "./background.png";
 // Adjust the path as necessary

export default function Background() {
  return (
    <div className="absolute inset-0">
      <Image
        src={background}
        alt="background"
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          zIndex: -1,
        }}
      />
    </div>
  );
}

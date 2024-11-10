// Background.tsx
import Image from "next/image";

export default function Background() {
  return (
    <div className="absolute inset-0">
      <Image
        src="/background.png"
        alt="background"
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

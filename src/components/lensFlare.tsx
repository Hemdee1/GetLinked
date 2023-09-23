import Image from "next/image";

const LensFlare = () => {
  return (
    <Image
      src="/icons/lens-flare.png"
      alt="flare icon"
      height={0}
      width={0}
      sizes="100vw"
      className="w-auto h-auto scale-[2] md:scale-100 bg-blend-hard-light -z-20"
    />
  );
};

export default LensFlare;

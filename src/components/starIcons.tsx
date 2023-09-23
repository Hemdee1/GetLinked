import Image from "next/image";
interface Star {
  colour?: "white" | "grey" | "purple";
}

const Star = ({ colour = "white" }: Star) => {
  return (
    <Image
      src={`/icons/${colour}-star.svg`}
      alt="bulb icon"
      height={0}
      width={0}
      sizes="100vw"
      className="w-auto h-[20px] md:h-auto animate-spin"
    />
  );
};

export default Star;

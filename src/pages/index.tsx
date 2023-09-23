import Footer from "@/components/footer";
import Header from "@/components/header";
import LensFlare from "@/components/lensFlare";
import LineBottom from "@/components/lineBottom";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* HERO SECTION */}
        <section className="border-y border-white/20">
          <div className="h-[789px] md:h-[868px] pt-8 w-fullscreen mx-auto max-w-full">
            <div className="mb-[58px] md:mb-20 md:px-[55px]">
              <h2 className="text-base italic font-bold text-center md:text-3xl md:text-right lg:text-4xl font-Montserat">
                Igniting a Revolution in{" "}
                <span className="relative">
                  HR Innovation
                  <span className="absolute left-0 -bottom-3 md:-bottom-5">
                    <LineBottom />
                  </span>
                </span>
              </h2>
            </div>

            <div className="relative flex flex-col items-center justify-end w-full md:flex-row">
              <div className="left-0 z-10 padding-left md:absolute">
                <h1 className="text-[32px] text-center md:text-left md:text-[65px] xl:text-[80px] font-black">
                  <span>getlinked</span>
                  <span className="relative">
                    {" "}
                    Tech
                    <Image
                      src="/icons/bulb.svg"
                      alt="bulb icon"
                      height={0}
                      width={0}
                      sizes="100vw"
                      className="absolute w-auto h-[26px] md:h-auto right-4 md:right-8 -top-5 md:-top-14"
                    />
                  </span>
                  <br />
                  <span className="flex items-center justify-center gap-1 md:gap-3 md:justify-start">
                    Hackathon
                    <span className=" text-tertiary">1.0</span>
                    <Image
                      src="/icons/chain.svg"
                      alt="chain icon"
                      height={0}
                      width={0}
                      sizes="100vw"
                      className="w-auto h-[32px] md:h-auto"
                    />
                    <Image
                      src="/icons/bang.svg"
                      alt="bang icon"
                      height={0}
                      width={0}
                      sizes="100vw"
                      className="w-auto h-[22px] md:h-auto"
                    />
                  </span>
                </h1>
                <p className="mt-2 w-[525px] text-center md:text-start text-[13px] max-w-full md:text-[20px] font-Montserat">
                  Participate in getlinked tech Hackathon{" "}
                  <br className="md:hidden" /> 2023 stand a chance to win a Big
                  prize
                </p>
                <div className="flex justify-center mt-6 md:mt-10 md:justify-start">
                  <button className="btn">Register</button>
                </div>

                <div className="mt-[14px] md:mt-[77px] flex gap-6 md:gap-12 justify-center md:justify-start font-Unica-One text-[48px] md:text-[64px]">
                  <h1 className="flex items-end">
                    00 <span className="mb-5 text-sm font-Montserat">H</span>
                  </h1>
                  <h1 className="flex items-end">
                    00 <span className="mb-5 text-sm font-Montserat">M</span>
                  </h1>
                  <h1 className="flex items-end">
                    00 <span className="mb-5 text-sm font-Montserat">S</span>
                  </h1>
                </div>
              </div>

              <div className="relative w-[828px] h-[715px] -translate-y-40 md:translate-y-0 scale-50 md:scale-100 md:opacity-60 lg:opacity-100">
                <span className="hidden md:block">
                  <span className="absolute pointer-events-none -top[170px] -right-[170px">
                    <LensFlare />
                  </span>
                </span>
                <Image
                  src="/images/hackathonguy.png"
                  height={715}
                  width={828}
                  sizes="100vw"
                  alt="hackathon guy"
                  className="object-cover w-[828px] h-[715px] bg-blend-luminosity"
                />
                <Image
                  alt="cloud-tech"
                  src="/images/cloud-tech.png"
                  height={641}
                  width={667}
                  sizes="100vw"
                  className="absolute w-[667px] h-[641px] top-0 left-20 bg-blend-hard-light"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="min-h-screen"></section>
      </main>
      <Footer />
    </>
  );
}

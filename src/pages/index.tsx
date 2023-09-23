import Footer from "@/components/footer";
import Header from "@/components/header";
import LensFlare from "@/components/lensFlare";
import LineBottom from "@/components/lineBottom";
import QABox from "@/components/qaBox";
import { faqData, timeline } from "@/utils";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {/* HERO SECTION */}
        <section className="overflow-hidden border-y border-white/20">
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
                  <Link href="/register" className="btn">
                    Register
                  </Link>
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
                  <span className="absolute pointer-events-none -top-[170px] -right-[100px]">
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
            <span className="absolute w-full pointer-events-none scale-150 opacity-70 top-20 md:-top-[100px] left-[100px]">
              <LensFlare />
            </span>
          </div>
        </section>

        <section className="w-full">
          <div className="mt-10 md:mt-[62px] w-full flex-col md:flex-row items-center justify-center relative border-b border-white/20 pb-10 md:pb-[78px] flex gap-[109px] md:items-center md:justify-center">
            <Image
              src="/images/The-big-idea.png"
              alt=""
              sizes="100vw"
              height={0}
              width={0}
              className="w-auto h-[256px] md:h-auto"
            />
            <div>
              <h3 className="block text-[20px] md:text-[32px] text-center md:text-left font-bold">
                Introduction to getlinked <br />
                <span className="text-tertiary">techHackathon 1.0</span>
              </h3>
              <span className="block text-[14px] w-[300px] m-auto text-center md:text-left md:w-[535px] md:h-[165px] mt-[18px] font-Montserat font-normal">
                Our tech hackathon is a melting pot of visionaries, and its
                purpose is as clear as day: to shape the future. Whether
                you&apos;re a coding genius, a design maverick, or a concept
                wizard, you&apos;ll have the chance to transform your ideas into
                reality. Solving real-world problems, pushing the boundaries of
                technology, and creating solutions that can change the world,
                that&apos;s what we&apos;re all about!
              </span>
            </div>
          </div>
        </section>

        <section className="relative">
          <div className="mt-[62px] w-full flex-col-reverse md:flex-row items-center justify-center relative border-b border-white/20 pb-10 md:pb-[78px] flex gap-[48px] md:items-center md:justify-center">
            <div>
              <h3 className="block text-center md:text-left text-[20px] md:text-[32px] font-bold">
                Rules and <br />{" "}
                <span className="text-tertiary">Guidelines</span>
              </h3>
              <span className="block text-[14px] w-[300px] m-auto text-center md:text-left md:w-[535px] md:h-[165px] mt-[18px] font-Montserat font-normal">
                Our tech hackathon is a melting pot of visionaries, and its
                purpose is as clear as day: to shape the future. Whether
                you&apos;re a coding genius, a design maverick, or a concept
                wizard, you&apos;ll have the chance to transform your ideas into
                reality. Solving real-world problems, pushing the boundaries of
                technology, and creating solutions that can change the world,
                that&apos;s what we&apos;re all about!
              </span>
            </div>
            <Image
              src="/images/sit.png"
              alt=""
              sizes="100vw"
              height={0}
              width={0}
              className="w-auto h-[382px] md:h-auto"
            />
          </div>
          <span className="absolute w-full pointer-events-none scale-150 opacity-70 -top-20 md:-top-[100px] left-[100px]">
            <LensFlare />
          </span>
          <span className="absolute w-full pointer-events-none scale-150 opacity-70 top-20 md:-bottom-[100px] left-[1000px]">
            <LensFlare />
          </span>
        </section>

        <section className="w-full" id="overview">
          <div className="mt-[62px] w-full flex-col md:flex-row items-center justify-center relative border-b border-white/20 pb-10 md:pb-[78px] flex gap-[53px] md:items-center md:justify-center">
            <Image
              src="/images/section3.png"
              alt=""
              sizes="100vw"
              height={0}
              width={0}
              className="w-auto h-[275px] md:h-auto"
            />
            <div className="px-10">
              <h3 className="block text-[20px] md:text-[32px] text-center md:text-left font-bold">
                Judging Criteria
                <br /> <span className="text-tertiary">Key attributes</span>
              </h3>
              <span className="block text-sm w-[316px] m-auto text-center md:text-left md:w-[497px]  mt-[18px] font-Montserat font-normal">
                <p className="text-terborder-tertiary">
                  Innovation and Creativity:
                </p>
                Evaluate the uniqueness and creativity of the solution. Consider
                whether it addresses a real-world problem in a novel way or
                introduces innovative features.
              </span>
              <span className="block text-sm w-[316px] m-auto text-center md:text-left md:w-[497px] mt-[22px] font-Montserat font-normal">
                <p className="text-terborder-tertiary">Functionality:</p>Assess
                how well the solution works. Does it perform its intended
                functions effectively and without major issues? Judges would
                consider the completeness and robustness of the solution.
              </span>
              <span className="block text-sm w-[316px] m-auto text-center md:text-left md:w-[497px] mt-[18px] font-Montserat font-normal">
                <p className="text-terborder-tertiary">
                  {" "}
                  Impact and Relevance:
                </p>
                Determine the potential impact of the solution in the real
                world. Does it address a significant problem, and is it relevant
                to the target audience? Judges would assess the potential
                social, economic, or environmental benefits.
              </span>
              <span className="block text-sm w-[316px] m-auto text-center md:text-left md:w-[497px] mt-[18px] font-Montserat font-normal">
                <p className="text-terborder-tertiary">
                  {" "}
                  Technical Complexity:
                </p>
                Evaluate the technical sophistication of the solution. Judges
                would consider the complexity of the code, the use of advanced
                technologies or algorithms, and the scalability of the solution.
              </span>
              <span className="block text-sm w-[316px] m-auto text-center md:text-left md:w-[497px] mt-[18px] font-Montserat font-normal">
                <p className="text-terborder-tertiary">
                  {" "}
                  Adherence to Hackathon Rules:
                </p>
                Judges will Ensure that the team adhered to the rules and
                guidelines of the hackathon, including deadlines, use of
                specific technologies or APIs, and any other
                competition-specific requirements.
              </span>
              <button className="btn mt-[50px] mx-[147px] md:mx-0  ">
                Read More
              </button>
            </div>
            <span className="absolute w-full pointer-events-none scale-150 opacity-70 top-20 md:top-[300px] left-[100px]">
              <LensFlare />
            </span>
            <span className="absolute w-full pointer-events-none scale-150 opacity-70 top-20 left-0 md:bottom-[800px] md:left-[1000px]">
              <LensFlare />
            </span>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTION */}
        <section className="w-full" id="faq">
          <div className="mt-[62px] w-full flex-col md:flex-row items-center justify-center relative border-b border-white/20 pb-10 md:pb-[78px] flex gap-[53px] md:items-center md:justify-center">
            <div>
              <span className="block text-[20px] md:text-[32px] text-center md:text-left font-bold">
                Frequently Ask
                <br /> <span className="text-tertiary">Question</span>
              </span>
              <span className="block text-xs md:text-sm w-[316px] m-auto text-center md:text-left md:w-[497px] mt-[18px] px-5 font-Montserat font-normal">
                We got answers to the questions that you might want to ask about
                getlinked Hackathon 1.0
              </span>

              <div className="mt-16 sm:w-[430px] px-5 max-w-full gap-4">
                {faqData.map((data, index) => (
                  <QABox data={data} key={index} />
                ))}
              </div>
            </div>
            <Image
              src="/images/group.png"
              alt=""
              sizes="100vw"
              height={0}
              width={0}
              className="w-auto h-[327px] md:h-auto"
            />
          </div>
        </section>

        <section
          className="max-w-full pb-20 mx-auto mt-20 padding w-fullscreen"
          id="timeline"
        >
          <h3 className="text-center text[20px] font-bold md:text-[32px] font-Clash-Display mb-3">
            Timeline
          </h3>
          <p className="text-sm text-center">
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>

          <div className="md:space-y-[100px] mt-10">
            {timeline.map((data, index) => {
              const { date, info, title } = data;
              const odd = index % 2 === 1;

              return (
                <div
                  key={index}
                  className={`mt-4 md:mt-[200px] px-5 flex flex-col gap-2 md:gap-28 justify-between md:items-center relative ${
                    odd ? "md:flex-row-reverse" : "md:flex-row"
                  }`}
                >
                  <div
                    className={`md:w-[436px] text-left ${
                      odd ? "md:text-left" : "md:text-right"
                    }`}
                  >
                    <span className="block mb-3 text-base font-bold md:text-2xl text-tertiary">
                      {title}
                    </span>
                    <span className="block text-xs md:text-sm">{info}</span>
                  </div>
                  <span
                    className={`mb-3 md:w-[436px] text-left text-base md:text-2xl font-bold text-tertiary ${
                      odd ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    {date}
                  </span>

                  <div className="absolute flex flex-col items-center gap-3 md:-translate-x-1/2 md:-translate-y-[40%] -left-3 md:left-1/2">
                    <div className="w-0.5 md:w-1 rounded-full h-20 md:h-28 bg-tertiary"></div>
                    <div className="grid w-5 h-5 text-sm font-bold rounded-full md:text-2xl md:w-10 md:h-10 bg-linear-radial place-content-center">
                      {index + 1}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="w-full">
          <div className="flex md:items-center md:justify-between padding w-fullscreen max-w-full mx-auto flex-col xl:flex-row gap-[30px]">
            <div>
              <Image
                src="/images/cup.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                className="w-auto md:mt-[100px] md:scale-125 h-[300px] md:h-auto"
              />
            </div>
            <div>
              <div className="mt-[71px] mb-[250px] w-full flex flex-col">
                <h3 className="block text-[20px] md:text-[32px] text-center md:text-left font-bold">
                  Prizes and <br />
                  <span className="text-tertiary">Rewards</span>
                </h3>
                <span className="block text-[16px] w-[316px]  md:w-[497px]  mt-[18px] font-Montserat font-normal">
                  Highlights of the prize or rewards for winnners and for
                  participant
                </span>
              </div>
              <div className="flex scale-[.5] -mt-40 -translate-x-20 md:scale-100 gap-[20px] md:gap-[30px]">
                <div className="relative ">
                  <span className="h-[296px] block w-[212px] border border-tertiary rounded-[8px] bg-[rgba(212,52,254,0.12)] font-Montserat">
                    <div className="flex flex-col items-center justify-center">
                      <p className="text-[36px] font-bold mt-[111px]">2nd</p>
                      <p className="text-[24px] font-semibold">Runner</p>
                      <p className="text-[36px] font-bold text-terborder-tertiary">
                        N300,000
                      </p>
                    </div>
                  </span>
                  <Image
                    src="/images/silver.png"
                    alt=""
                    width={0}
                    height={0}
                    className="h-[180PX] -top-[90px] left-[20px] absolute w-[179PX]"
                    sizes="100vw"
                  />
                </div>

                <div className="relative">
                  <span className="h-[347px] block w-[212px] border border-tertiary rounded-[8px] bg-[rgba(212,52,254,0.12)] font-Montserat">
                    {" "}
                    <div className="flex justify-center mt-[167px] flex-col items-center">
                      <p className="text-[36px] font-bold ">1st</p>
                      <p className="text-[24px] font-semibold">Runner</p>
                      <p className="text-[36px] font-bold text-[#903AFF]">
                        N400,000
                      </p>
                    </div>
                  </span>
                  <Image
                    src="/images/gold.png"
                    alt=""
                    width={0}
                    height={0}
                    className="h-[200px] md:scale-150 md:-top-[95px] -top-[150px] left-[8.5px] md:w-auto scale-150 md:h-auto  absolute w-[296px]"
                    sizes="100vw"
                  />
                </div>
                <div className="relative ">
                  <span className="h-[296px] block w-[212px] border border-tertiary rounded-[8px] bg-[rgba(212,52,254,0.12)] font-Montserat">
                    {" "}
                    <div className="flex flex-col items-center justify-center">
                      <p className="text-[36px] font-bold mt-[111px]">3rd</p>
                      <p className="text-[24px] font-semibold">Runner</p>
                      <p className="text-[36px] font-bold text-terborder-tertiary">
                        N150,000
                      </p>
                    </div>
                  </span>
                  <Image
                    src="/images/bronze.png"
                    alt=""
                    width={0}
                    height={0}
                    className="h-[180PX] -top-[90px] left-[20px] absolute w-[179PX]"
                    sizes="100vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-full pb-20 mx-auto mt-10 md:mt-20 padding w-fullscreen">
          <h3 className="text-center text[20px] font-bold md:text-[32px] font-Clash-Display mb-3">
            Partners and Sponsors
          </h3>
          <p className="text-sm text-center w-[450px] max-w-full mx-auto">
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>

          <div className="relative flex flex-col items-center justify-center w-full px-8 mt-16 overflow-hidden border rounded border-tertiary py-9">
            <div className="flex">
              <div className="w-[120px] md:w-[250px] h-[100px] md:h-[150px] grid place-content-center  border-b-2 md:border-b-4 border-r-2 md:border-r-4  border-tertiary">
                <Image
                  src="/images/liberty.png"
                  alt="liberty"
                  height={0}
                  width={0}
                  sizes="100vw"
                  className="w-auto h-[20px] md:h-auto"
                />
              </div>
              <div className="w-[120px] md:w-[250px] h-[100px] md:h-[150px] grid place-content-center border-b-2 md:border-b-4 border-r-2 md:border-r-4 border-tertiary">
                <Image
                  src="/images/Liberty company logo white.png"
                  alt="liberty"
                  height={0}
                  width={0}
                  sizes="100vw"
                  className="w-auto h-[20px] md:h-auto"
                />
              </div>
              <div className="w-[120px] md:w-[250px] h-[100px] md:h-[150px] grid place-content-center border-b-2 md:border-b-4 border-tertiary">
                <Image
                  src="/images/Winwise logo White colour 1.png"
                  alt="liberty"
                  height={0}
                  width={0}
                  sizes="100vw"
                  className="w-auto h-[20px] md:h-auto"
                />
              </div>
            </div>
            <div className="flex">
              <div className="w-[120px] md:w-[250px] h-[100px] md:h-[150px] grid place-content-center border-r-2 md:border-r-4  border-tertiary relative">
                <Image
                  src="/images/wisper logo white.png"
                  alt="liberty"
                  height={0}
                  width={0}
                  sizes="100vw"
                  className="w-auto h-[20px] md:h-auto"
                />
              </div>
              <div className="w-[120px] md:w-[250px] h-[100px] md:h-[150px] grid place-content-center border-r-2 md:border-r-4 border-tertiary">
                <Image
                  src="/images/Paybox.png"
                  alt="liberty"
                  height={0}
                  width={0}
                  sizes="100vw"
                  className="w-auto h-[20px] md:h-auto"
                />
              </div>
              <div className="w-[120px] md:w-[250px] h-[100px] md:h-[150px] grid place-content-center border-tertiary">
                <Image
                  src="/images/Vizual Plus.png"
                  alt="liberty"
                  height={0}
                  width={0}
                  sizes="100vw"
                  className="w-auto h-[20px] md:h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full">
          <div className="mt-[62px] w-full flex-col md:flex-row items-center justify-center md:gap-[200px]  relative mb-[78px] flex gap-[53px] padding">
            <div>
              <h3 className="block text-[20px] md:text-[32px] text-center md:text-left font-bold">
                Privacy Policy and <br />{" "}
                <span className="text-tertiary">Terms</span>
              </h3>
              <span className="block text-[14px] text-center md:text-left mt-[18px] font-Montserat font-normal">
                Last updated on September 12, 2023
              </span>
              <span className="block text-[14px] mt-[30px] text-center w-[289px]  md:text-left font-Montserat md:w-[438px] font-semibold">
                Below are our privacy & policy, which outline a lot of goodies.
                it’s our aim to always take of our participant
              </span>
              <div
                className="md:w-[569px] md:h-[608px] border w-[330px] h-[635px] px-5 flex items-center flex-col border-tertiary rounded-[1px] mt-[69px] bg-[rgba(217,217,217,0.03)
"
              >
                <div className="md:mt-[59px] mt-[30px] w-full px-2 md:px-0 md:ml-[72px]">
                  <span className="block text-[14px] md:w-[425px] w-[264px] md:text-left text-center md:mt-[18px]  font-Montserat font-normal">
                    At getlinked tech Hackathon 1.0, we value your privacy and
                    are committed to protecting your personal information. This
                    Privacy Policy outlines how we collect, use, disclose, and
                    safeguard your data when you participate in our tech
                    hackathon event. By participating in our event, you consent
                    to the practices described in this policy.
                  </span>

                  <span className="block md:text-left text-center text-[16px] mt-[24px] text-terborder-tertiary font-bold">
                    Licensing Policy
                  </span>
                  <span className="block text-[14px] md:text-left text-center  font-bold">
                    Here are terms of our Standard License:
                  </span>
                  <div className=" flex gap-[14px]  mt-[18px]">
                    <List />
                    <span className="block text-[14px] w-[401px] font-normal">
                      The Standard License grants you a non-exclusive right to
                      navigate and register for our event
                    </span>
                  </div>
                  <div className=" flex gap-[14px] mt-[18px]">
                    <List />
                    <span className="block text-[14px] w-[401px] font-normal">
                      You are licensed to use the item available at any free
                      source sites, for your project developement
                    </span>
                  </div>
                </div>
                <button className="btn  mt-[50px]">Read More</button>
              </div>
            </div>
            <div className="">
              <Image
                src="/images/padlock.png"
                width={0}
                height={0}
                sizes="100vh"
                alt=""
                className="w-auto h-[400px] md:h-auto md:scale-150"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

const List = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100" />
    <path d="M5 8L7 10.5L13.5 6" stroke="white" stroke-width="2" />
  </svg>
);

import Header from "@/components/header";
import { Facebook, Instagram, Linkedin, Twitter } from "../components/icons";
import LensFlare from "@/components/lensFlare";
import Star from "@/components/starIcons";
import Image from "next/image";

const Register = () => {
  return (
    <>
      <Header />
      <main className="pt-20 xl:pt-[140px] w-fullscreen mx-auto max-w-full pb-10 md:pb-[115px] relative overflow-hidden">
        <div className="md:w-[90%] flex flex-col lg:flex-row gap-5 justify-between items-center mx-auto">
          <div className="pt-10 w-[200px] md:w-[400px] xl:w-[650px] max-w-full h-[160px] mx-auto md:h-[400px] xl:h-[650px] relative">
            <Image
              src="/images/designer.png"
              alt="designer icon"
              fill
              className="object-cover"
            />
          </div>

          <div className="w-[740px] max-w-full md:h-[740px] px-[30px] md:px-[52px] flex flex-col justify-center md:bg-white md:bg-opacity-[0.03] rounded-xl md:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] font-Montserat">
            <h5 className="text-2xl md:text-[32px] absolute top-5 left-8 lg:static font-semibold font-Clash-Display text-tertiary">
              Register
            </h5>

            <div className="flex items-center gap-2">
              <span className="mt-6 text-sm font-medium">
                Be part of this movement!
              </span>
              <div className="flex justify-center mt-3 border-b border-dashed md:w-24 border-tertiary">
                <Image
                  src="/icons/girl.svg"
                  alt="bulb icon"
                  height={0}
                  width={0}
                  sizes="100vw"
                  className="w-auto h-auto"
                />
                <Image
                  src="/icons/boy.svg"
                  alt="bulb icon"
                  height={0}
                  width={0}
                  sizes="100vw"
                  className="w-auto h-auto"
                />
              </div>
            </div>

            <h4 className="mt-5 text-xl font-bold md:text-2xl">
              CREATE YOUR ACCOUNT
            </h4>

            <div className="mt-6 space-y-7 md:space-y-10 md:mt-9">
              <div className="flex flex-col gap-8 md:flex-row">
                <div className="flex-1">
                  <label htmlFor="teamsName" className="mb-3 text-sm">
                    Team’s Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter the name of your group"
                    className="px-4 md:px-6 py-3 text-sm md:py-3 bg-white bg-opacity-[0.03] outline-none border-white border rounded shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-full font-Montserat"
                  />
                </div>
                <div className="flex-1">
                  <label className="mb-3 text-sm">Phone</label>
                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    className="px-4 md:px-6 py-3 text-sm md:py-3 bg-white bg-opacity-[0.03] outline-none border-white border rounded shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-full font-Montserat"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-8 md:flex-row">
                <div className="flex-1">
                  <label className="mb-3 text-sm">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="px-4 md:px-6 py-3 text-sm md:py-3 bg-white bg-opacity-[0.03] outline-none border-white border rounded shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-full font-Montserat"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="" className="mb-3 text-sm">
                    Project Topic
                  </label>
                  <input
                    type="text"
                    placeholder="What is your group project topic"
                    className="px-4 md:px-6 py-3 text-sm md:py-3 bg-white bg-opacity-[0.03] outline-none border-white border rounded shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-full font-Montserat"
                  />
                </div>
              </div>
              <div className="flex gap-8">
                <div className="flex-1">
                  <label htmlFor="category" className="mb-3 text-sm">
                    Category
                  </label>
                  <select
                    name="category"
                    id="category"
                    className="px-4 md:px-6 py-3 text-sm md:py-3 bg-white bg-opacity-[0.03] outline-none border-white border rounded shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-full font-Montserat"
                  >
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                  </select>
                </div>

                <div className="flex-1">
                  <label htmlFor="groupSize" className="mb-3 text-sm">
                    Group Size
                  </label>
                  <select
                    name="groupSize"
                    id="groupSize"
                    className="px-4 md:px-6 py-3 text-sm md:py-3 bg-white bg-opacity-[0.03] outline-none border-white border rounded shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-full font-Montserat"
                  >
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                  </select>
                </div>
              </div>
            </div>

            <div className="my-6">
              <span className="block mb-4 text-xs italic text-tertiary">
                Please review your registration details before submitting
              </span>
              <div className="flex gap-2">
                <input type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms" className="text-xs">
                  I agreed with the event terms and conditions and privacy
                  policy
                </label>
              </div>
            </div>

            <div className="flex justify-center">
              <button className="!w-full btn">Register Now</button>
            </div>
          </div>
        </div>

        <span className="pointer-events-none hidden md:block absolute scale-125 -right-[300px] -bottom-[200px]">
          <LensFlare />
        </span>
      </main>
      <span className="pointer-events-none absolute scale-125 left-5 md:-left-[150px] top-36 md:top-0">
        <LensFlare />
      </span>
      <span className="pointer-events-none absolute left-[10px] top-80 md:top-[200px]">
        <Star colour="purple" />
      </span>
      <span className="pointer-events-none absolute right-10 md:right-[200px] top-[150px]">
        <Star colour="grey" />
      </span>
      <span className="pointer-events-none absolute left-2 md:left-[600px] bottom-0 md:-bottom-[50px]">
        <Star colour="purple" />
      </span>
      <span className="pointer-events-none  absolute right-[10px] -bottom-80 md:-bottom-[250px]">
        <Star colour="white" />
      </span>

      {/* SUCCESS MODAL */}
      <div className="fixed inset-0 flex items-center justify-center bg-[rgba(21,4,40,0.93)]">
        <div className="w-[700px] h-[664px] flex flex-col items-center justify-center">
          <Image
            src="/images/congratulation.png"
            alt="bulb icon"
            height={0}
            width={0}
            sizes="100vw"
            className="absolute w-auto h-auto md:scale-150"
          />
          <h1 className="text-base font-medium md:text-[32px] text-center mt-7">
            Congratulations <br /> you have successfully registered!
          </h1>
        </div>
      </div>
    </>
  );
};

export default Register;

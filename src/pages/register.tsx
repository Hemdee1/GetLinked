import Header from "@/components/header";
import LensFlare from "@/components/lensFlare";
import Star from "@/components/starIcons";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import SuccessModal from "@/components/successModal";

type formType = {
  team_name: string;
  phone_number: string;
  email: string;
  group_size: number;
  category: number;
  project_topic: string;
  privacy_poclicy_accepted: boolean;
};

const Register = () => {
  const [successModal, setSuccessModal] = useState(false);
  const [category, setCategory] = useState<{ id: number; name: string }[]>([]);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<formType>();

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await axios(
          "https://backend.getlinked.ai/hackathon/categories-list"
        );

        const data = await res.data;
        setCategory(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategory();
  }, []);

  const onSubmit: SubmitHandler<formType> = async (data) => {
    try {
      const res = await axios(
        "https://backend.getlinked.ai/hackathon/registration",
        {
          method: "POST",
          data,
        }
      );

      setSuccessModal(true);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const err = error.response?.data;
        if (err?.email) {
          setError(err.email[0]);
        }
        console.log(err);
      }
    }
  };

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

          <form
            className="w-[740px] max-w-full md:h-[740px] px-[30px] md:px-[52px] flex flex-col justify-center md:bg-white md:bg-opacity-[0.03] rounded-xl md:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] font-Montserat"
            onSubmit={handleSubmit(onSubmit)}
          >
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

            <div className="mt-6 space-y-4 md:space-y-10 md:mt-9">
              <div className="flex flex-col gap-4 md:gap-8 md:flex-row">
                <div className="flex-1">
                  <label htmlFor="team_name" className="mb-3 text-sm">
                    Team’s Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter the name of your group"
                    className="px-4 md:px-6 py-3 text-sm md:py-3 bg-white bg-opacity-[0.03] outline-none border-white border rounded shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-full font-Montserat"
                    id="team_name"
                    {...register("team_name", {
                      required: "Team's name is required!",
                    })}
                  />
                  <p className="text-xs text-red-500">
                    {errors.team_name?.message}
                  </p>
                </div>
                <div className="flex-1">
                  <label className="mb-3 text-sm" htmlFor="phone_number">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="px-4 md:px-6 py-3 text-sm md:py-3 bg-white bg-opacity-[0.03] outline-none border-white border rounded shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-full font-Montserat"
                    id="phone_number"
                    {...register("phone_number", {
                      required: "Phone number is required!",
                    })}
                  />
                  <p className="text-xs text-red-500">
                    {errors.phone_number?.message}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 md:gap-8 md:flex-row">
                <div className="flex-1">
                  <label className="mb-3 text-sm" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="px-4 md:px-6 py-3 text-sm md:py-3 bg-white bg-opacity-[0.03] outline-none border-white border rounded shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-full font-Montserat"
                    id="email"
                    {...register("email", { required: "email is required!" })}
                  />
                  <p className="text-xs text-red-500">
                    {errors.email?.message}
                  </p>
                </div>
                <div className="flex-1">
                  <label htmlFor="project_topic" className="mb-3 text-sm">
                    Project Topic
                  </label>
                  <input
                    type="text"
                    placeholder="What is your group project topic"
                    className="px-4 md:px-6 py-3 text-sm md:py-3 bg-white bg-opacity-[0.03] outline-none border-white border rounded shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-full font-Montserat"
                    id="project_topic"
                    {...register("project_topic", {
                      required: "project topic is required!",
                    })}
                  />
                  <p className="text-xs text-red-500">
                    {errors.project_topic?.message}
                  </p>
                </div>
              </div>
              <div className="flex gap-8">
                <div className="flex-1">
                  <label htmlFor="category" className="mb-3 text-sm">
                    Category
                  </label>
                  <select
                    className="px-4 md:px-6 py-3 text-sm md:py-3 bg-white bg-opacity-[0.03] outline-none border-white border rounded shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-full font-Montserat"
                    id="category"
                    {...register("category", {
                      required: "category is required!",
                    })}
                  >
                    <option value="" hidden>
                      select your category
                    </option>
                    {category.map((cate) => (
                      <option
                        key={cate.id}
                        value={cate.id}
                        className="text-black"
                      >
                        {cate.name}
                      </option>
                    ))}
                  </select>
                  <p className="text-xs text-red-500">
                    {errors.category?.message}
                  </p>
                </div>

                <div className="flex-1">
                  <label htmlFor="group_size" className="mb-3 text-sm">
                    Group Size
                  </label>
                  <select
                    className="px-4 md:px-6 py-3 text-sm md:py-3 bg-white bg-opacity-[0.03] outline-none border-white border rounded shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-full font-Montserat"
                    id="group_size"
                    {...register("group_size", {
                      required: "group size is required!",
                    })}
                  >
                    <option value="" hidden>
                      select
                    </option>
                    {Array(10)
                      .fill(null)
                      .map((_, index) => (
                        <option
                          key={index + 1}
                          value={index + 1}
                          className="text-black"
                        >
                          {index + 1}
                        </option>
                      ))}
                  </select>
                  <p className="text-xs text-red-500">
                    {errors.group_size?.message}
                  </p>
                </div>
              </div>
            </div>

            <div className="my-6">
              <span className="block mb-4 text-xs italic text-tertiary">
                Please review your registration details before submitting
              </span>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="privacy_poclicy_accepted"
                  {...register("privacy_poclicy_accepted", {
                    required: "terms and conditions needs to be checked",
                  })}
                />
                <label htmlFor="privacy_poclicy_accepted" className="text-xs">
                  I agreed with the event terms and conditions and privacy
                  policy
                </label>
              </div>
              <p className="mt-1 text-xs text-red-500">
                {errors.privacy_poclicy_accepted?.message}
              </p>
            </div>

            <div className="flex flex-col justify-center gap-2">
              <button className="!w-full btn" disabled={isSubmitting}>
                {!isSubmitting ? "Register Now" : "Please wait...."}
              </button>
            </div>
            <p className="mt-1 text-xs text-red-500">{error}</p>
          </form>
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
      <SuccessModal
        successModal={successModal}
        setSuccessModal={setSuccessModal}
      />
    </>
  );
};

export default Register;

import Header from "@/components/header";
import { Facebook, Instagram, Linkedin, Twitter } from "../components/icons";
import LensFlare from "@/components/lensFlare";
import Star from "@/components/starIcons";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import ContactModal from "@/components/contactModal";

type formType = {
  email: string;
  phone_number: string;
  first_name: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<formType>();

  const [contactModal, setContactModal] = useState(false);

  const onSubmit: SubmitHandler<formType> = async (data) => {
    try {
      const res = await axios(
        "https://backend.getlinked.ai/hackathon/contact-form",
        {
          method: "POST",
          data,
        }
      );

      setContactModal(true);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const err = error.response?.data;

        console.log(err);
      }
    }
  };

  return (
    <>
      <Header />
      <main className="lg:pt-[140px] w-fullscreen mx-auto max-w-full pb-10 md:pb-[115px] relative overflow-hidden">
        <div className="md:w-[80%] flex flex-col lg:flex-row gap-20 lg:gap-0 justify-between mx-auto">
          <div className="pt-10 hidden md:block w-full lg:w-[272px] font-Montserat">
            <h3 className="text-[32px] text-tertiary font-Clash-Display font-semibold">
              Get in touch
            </h3>

            <span className="block mt-5">Contact Information :</span>
            <address className="block" style={{ fontStyle: "normal" }}>
              27,Alara Street Yaba 100012 Lagos State
            </address>

            <span className="block mt-5">Call Us: </span>
            <span className="block">
              <a href="tel:07067981819">07067981819</a>
            </span>

            <span className="block mt-5">we are open from</span>
            <span>Monday-Friday 08:00am - 05:00pm</span>

            <span className="block mt-5 text-tertiary">Share on</span>
            <div className="flex gap-5 mt-4">
              <button>
                <Instagram />
              </button>
              <button>
                <Twitter />
              </button>
              <button>
                <Facebook />
              </button>
              <button>
                <Linkedin />
              </button>
            </div>
          </div>

          <form
            className="w-[617px] max-w-full h-[611px] px-[30px] md:px-[92px] flex flex-col justify-center md:bg-white md:bg-opacity-[0.03] rounded-xl md:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h5 className="text-xl font-semibold text-tertiary">
              Questions or need assistance? <br />
              Let us know about it
            </h5>

            <span className="block mt-6 text-xs font-medium md:hidden">
              Email us below to any question related to our event
            </span>

            <div className="mt-6 space-y-5 md:space-y-10 md:mt-9">
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="px-4 md:px-8 py-3 text-sm md:text-base md:py-3 bg-white bg-opacity-[0.03] outline-none border-white border rounded shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-full font-Montserat"
                  id="first_name"
                  {...register("first_name", {
                    required: "First name is required!",
                  })}
                />
                <p className="text-xs text-red-500">
                  {errors.first_name?.message}
                </p>
              </div>

              <div>
                <input
                  placeholder="Mail"
                  type="email"
                  id="email"
                  className="px-4 md:px-8 py-3 text-sm md:text-base md:py-3 bg-white bg-opacity-[0.03] outline-none border-white border rounded shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-full font-Montserat"
                  {...register("email", {
                    required: "email is required!",
                  })}
                />
                <p className="text-xs text-red-500">{errors.email?.message}</p>
              </div>

              <div>
                <input
                  placeholder="Phone number"
                  type="tel"
                  id="phone_number"
                  className="px-4 md:px-8 py-3 text-sm md:text-base md:py-3 bg-white bg-opacity-[0.03] outline-none border-white border rounded shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-full font-Montserat"
                  {...register("phone_number", {
                    required: "phone_number is required!",
                  })}
                />
                <p className="text-xs text-red-500">
                  {errors.phone_number?.message}
                </p>
              </div>

              <div>
                <textarea
                  placeholder="Message"
                  id=""
                  className="px-4 md:px-8 py-3 text-sm md:text-base md:py-3 h-[120px] resize-none bg-white bg-opacity-[0.03] outline-none border-white border rounded shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-full font-Montserat"
                  {...register("message", {
                    required: "Message body is required!",
                  })}
                />
                <p className="text-xs text-red-500">
                  {errors.message?.message}
                </p>
              </div>
              <div className="flex justify-center">
                <button className="btn" disabled={isSubmitting}>
                  {!isSubmitting ? "Submit" : "Please wait...."}
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="grid md:hidden place-content-center">
          <span className="block mt-5 text-center text-tertiary">Share on</span>
          <div className="flex gap-5 mt-4">
            <button>
              <Instagram />
            </button>
            <button>
              <Twitter />
            </button>
            <button>
              <Facebook />
            </button>
            <button>
              <Linkedin />
            </button>
          </div>
        </div>

        <span className="pointer-events-none hidden md:block absolute scale-125 -right-[300px] -bottom-[200px]">
          <LensFlare />
        </span>
      </main>
      <span className="pointer-events-none absolute scale-125 left-5 md:-left-[150px] top-20 md:top-0">
        <LensFlare />
      </span>
      <span className="pointer-events-none absolute left-[200px] top-24 md:top-[200px]">
        <Star colour="purple" />
      </span>
      <span className="pointer-events-none absolute right-10 md:right-[200px] top-[150px]">
        <Star colour="grey" />
      </span>
      <span className="pointer-events-none absolute left-5 md:left-[600px] bottom-0 md:-bottom-[50px]">
        <Star colour="purple" />
      </span>
      <span className="pointer-events-none  absolute right-[50px] bottom-20 md:-bottom-[250px]">
        <Star colour="white" />
      </span>

      {/* SUCCESS MODAL */}
      <ContactModal
        contactModal={contactModal}
        setContactModal={setContactModal}
      />
    </>
  );
};

export default Contact;

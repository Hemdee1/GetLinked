import {
  CallIcon,
  Facebook,
  Instagram,
  Linkedin,
  LocationIcon,
  Twitter,
} from "./icons";
import Logo from "./logo";

const Footer = () => {
  return (
    <footer className="max-w-full mx-auto text-xs w-fullscreen padding font-Montserat bg-[#100B20] pb-8 pt-20">
      <div className="flex flex-col justify-between w-full gap-14 md:flex-row">
        <div>
          <Logo />

          <p className="mt-2 w-[300px] max-w-full lg:w-[430px] leading-6">
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>
          <div className="flex divide-x-2 mt-14 divide-tertiary">
            <button className="pr-5">Terms of Use</button>
            <button className="pl-5">Privacy Policy</button>
          </div>
        </div>
        <div className="flex flex-col items-start gap-3">
          <h4 className="text-sm text-tertiary">Useful Links</h4>
          <button>Overview</button>
          <button>Timeline</button>
          <button>FAQs</button>
          <button>Register</button>
          <span className="text-tertiary">Follow us</span>
          <div className="flex gap-5">
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

        <div className="flex flex-col items-start gap-3">
          <h4 className="text-sm text-tertiary">Contact Us</h4>
          <button className="flex gap-3">
            <CallIcon /> +234 6707653444
          </button>
          <div className="flex gap-3">
            <LocationIcon />
            <address className="w-[90px]">
              27,Alara Street Yaba 100012 Lagos State
            </address>
          </div>
        </div>
      </div>

      <span className="block mt-16 text-center">
        All rights reserved. © getlinked Ltd.
      </span>
    </footer>
  );
};

export default Footer;

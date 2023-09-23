import { useEffect, useState } from "react";
import AnimatedButton from "./animatedButton";
import Logo from "./logo";
import Link from "next/link";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (toggle) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
  }, [toggle]);

  return (
    <header className="z-20 w-full border-b border-white/20 font-Montserat">
      <div className="flex items-center justify-between max-w-full py-5 mx-auto w-fullscreen padding">
        <Link href="/" role="home button">
          <Logo />
        </Link>
        <div
          className={`absolute top-[70px] lg:top-0 inset-0 w-full h-screen lg:h-auto lg:w-auto lg:relative flex justify-end ${
            !toggle ? "invisible lg:visible" : "visible"
          }`}
        >
          <nav
            className={`bg-primary z-30 lg:bg-transparent w-full p-8 lg:p-0 lg:w-auto flex-col lg:flex-row h-screen lg:h-auto flex gap-20 lg:opacity-100 lg:translate-y-0 text-white transition-all duration-500 ${
              toggle
                ? "-translate-y-0 opacity-100"
                : "-translate-y-full opacity-0"
            }`}
          >
            <div className="flex flex-col items-start gap-8 lg:gap-14 lg:flex-row lg:items-center">
              <a
                href="#overview"
                className="text-white transition-colors duration-300 hover:text-transparent bg-linear-radial bg-clip-text"
                onClick={() => setToggle(false)}
              >
                Overview
              </a>
              <a
                href="#timeline"
                className="text-white transition-colors duration-300 hover:text-transparent bg-linear-radial bg-clip-text"
                onClick={() => setToggle(false)}
              >
                Timeline
              </a>
              <a
                href="#faq"
                className="text-white transition-colors duration-300 hover:text-transparent bg-linear-radial bg-clip-text"
                onClick={() => setToggle(false)}
              >
                FAQs
              </a>
              <Link
                href="/contact"
                className="text-white transition-colors duration-300 hover:text-transparent bg-linear-radial bg-clip-text"
                onClick={() => setToggle(false)}
              >
                Contact
              </Link>
              <Link
                href="/register"
                className="bg-linear-radial grid place-content-center lg:ml-[7%] w-[172px] h-[53px] rounded font-Montserat text-sm md:text-base"
                onClick={() => setToggle(false)}
              >
                Register
              </Link>
            </div>
          </nav>
        </div>

        {/* TOGGLE */}
        <button
          onClick={() => setToggle((prev) => !prev)}
          className="lg:hidden"
        >
          <AnimatedButton toggle={toggle} />
        </button>
      </div>
    </header>
  );
};

export default Header;

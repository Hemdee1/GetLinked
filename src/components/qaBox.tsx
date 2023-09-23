import { useState } from "react";

const QABox = ({ data }: { data: { question: string; answer: string } }) => {
  const { question, answer } = data;
  const [open, setOpen] = useState(false);

  return (
    <article className="w-full text-sm font-medium border-b border-tertiary">
      <div
        className="flex items-center justify-between w-full gap-3 px-2 py-3 cursor-pointer md:py-3 md:gap-5"
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="flex items-center gap-3 md:gap-4">
          <span>{question}</span>
        </div>
        <span>
          <Icon open={open} />
        </span>
      </div>
      <div
        className={`transition-all duration-500 ${
          open ? "visible h-auto opacity-100" : "invisible h-[1px] opacity-0"
        }`}
      >
        <span className="block px-2 pb-5 md:pb-8">{answer}</span>
      </div>
    </article>
  );
};

const Icon = ({ open }: { open: boolean }) => (
  <svg
    className="w-4"
    // width="36"
    // height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* PLUS */}
    <path
      className={`duration-500 transition-all ${
        open ? "opacity-0 -translate-x-10" : "opacity-100 translate-x-0"
      }`}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.5 19.5V30C19.5 30.3978 19.342 30.7794 19.0607 31.0607C18.7794 31.342 18.3978 31.5 18 31.5C17.6022 31.5 17.2206 31.342 16.9393 31.0607C16.658 30.7794 16.5 30.3978 16.5 30V19.5H6C5.60218 19.5 5.22064 19.342 4.93934 19.0607C4.65804 18.7794 4.5 18.3978 4.5 18C4.5 17.6022 4.65804 17.2206 4.93934 16.9393C5.22064 16.658 5.60218 16.5 6 16.5H16.5V6C16.5 5.60218 16.658 5.22064 16.9393 4.93934C17.2206 4.65804 17.6022 4.5 18 4.5C18.3978 4.5 18.7794 4.65804 19.0607 4.93934C19.342 5.22064 19.5 5.60218 19.5 6V16.5H30C30.3978 16.5 30.7794 16.658 31.0607 16.9393C31.342 17.2206 31.5 17.6022 31.5 18C31.5 18.3978 31.342 18.7794 31.0607 19.0607C30.7794 19.342 30.3978 19.5 30 19.5H19.5Z"
      fill="#D434FE"
    />

    {/* MINUS */}
    <path
      className={`duration-500 transition-all ${
        !open ? "opacity-0 -translate-x-10" : "opacity-100 translate-x-0"
      }`}
      d="M32.0625 18C32.0625 18.4476 31.8847 18.8768 31.5682 19.1932C31.2518 19.5097 30.8226 19.6875 30.375 19.6875H5.625C5.17745 19.6875 4.74822 19.5097 4.43176 19.1932C4.11529 18.8768 3.9375 18.4476 3.9375 18C3.9375 17.5524 4.11529 17.1232 4.43176 16.8068C4.74822 16.4903 5.17745 16.3125 5.625 16.3125H30.375C30.8226 16.3125 31.2518 16.4903 31.5682 16.8068C31.8847 17.1232 32.0625 17.5524 32.0625 18Z"
      fill="#D434FE"
    />
  </svg>
);

export default QABox;

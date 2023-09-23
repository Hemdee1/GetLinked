import Image from "next/image";

interface SuccessModal {
  successModal: boolean;
  setSuccessModal: (value: boolean) => void;
}

const SuccessModal = ({ successModal, setSuccessModal }: SuccessModal) => {
  return (
    <div
      className={`fixed inset-0 z-30 flex items-center justify-center bg-[rgba(21,4,40,0.93)] ${
        successModal
          ? "top-0 opacity-100 visible"
          : "-top-20 opacity-0 invisible"
      }`}
    >
      <div className="w-[90%] md:w-[700px] h-[450px] md:h-[550px] 2xl:h-[664px] border border-tertiary px-5 md:px-10 flex flex-col items-center justify-center rounded">
        <Image
          src="/images/congratulation.png"
          alt="congratulation icon"
          height={0}
          width={0}
          sizes="100vw"
          className="w-[258px] h-[194px] md:scale-150"
        />
        <h1 className="text-[16px] font-medium md:text-[32px] text-center mt-3 md:mt-10">
          Congratulations <br /> you have successfully registered!
        </h1>
        <span className="mt-5 text-xs md:text-sm">
          Yes, it was easy and you did it! <br /> check your mail box for next
          step
        </span>
        <button
          className="!w-full btn mt-8"
          onClick={() => setSuccessModal(false)}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;

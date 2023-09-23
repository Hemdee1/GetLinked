import Image from "next/image";

interface ContactModal {
  contactModal: boolean;
  setContactModal: (value: boolean) => void;
}

const ContactModal = ({ contactModal, setContactModal }: ContactModal) => {
  return (
    <div
      className={`fixed inset-0 z-30 flex items-center justify-center bg-[rgba(21,4,40,0.93)] ${
        contactModal
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
          Congratulations <br /> Your message has been sent successfully
        </h1>

        <button
          className="!w-full btn mt-8"
          onClick={() => setContactModal(false)}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ContactModal;

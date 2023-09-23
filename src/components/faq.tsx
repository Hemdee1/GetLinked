import QABox from "./qaBox";

const faqData = [
  {
    question: "Can I work on a project I started before the hackathon?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius optio in id, eveniet laudantium numquam quod nesciunt reiciendis porro praesentium molestiae itaque ab officia dignissimos facilis quisquam magnam repellendus ea.",
  },
  {
    question: "What happens if I need help during the hackathon?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius optio in id, eveniet laudantium numquam quod nesciunt reiciendis porro praesentium molestiae itaque ab officia dignissimos facilis quisquam magnam repellendus ea.",
  },
  {
    question: "What happens if I do not have an idea for a project?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius optio in id, eveniet laudantium numquam quod nesciunt reiciendis porro praesentium molestiae itaque ab officia dignissimos facilis quisquam magnam repellendus ea.",
  },
  {
    question: "Can I join a team or do I have to come with one?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius optio in id, eveniet laudantium numquam quod nesciunt reiciendis porro praesentium molestiae itaque ab officia dignissimos facilis quisquam magnam repellendus ea.",
  },
  {
    question: "What happens after the hackathon ends",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius optio in id, eveniet laudantium numquam quod nesciunt reiciendis porro praesentium molestiae itaque ab officia dignissimos facilis quisquam magnam repellendus ea.",
  },
];

const FAQ = () => {
  return (
    <div className="flex gap-6 mx-auto w-fullscreen padding">
      <div>
        <h1 className="font-Clash-Display text-[32px] font-bold">
          Frequently Ask <br /> <span className="text-tertiary">Question</span>
        </h1>
        <p className="mt-4 w-[340px] text-sm font-medium">
          We got answers to the questions that you might want to ask about
          getlinked Hackathon 1.0
        </p>
        <div className="mt-16 w-[430px] gap-4">
          {faqData.map((data, index) => (
            <QABox data={data} key={index} />
          ))}
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default FAQ;

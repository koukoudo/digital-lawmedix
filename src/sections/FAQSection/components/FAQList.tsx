import { useState } from "react";

const faqs = [
  {
    question: "How do I register my legal practice with Digital Lawmedix?",
    answer: "You can register your legal practice by clicking the 'Register Practice' button on our homepage. Fill out the registration form with your practice details, and our team will review and approve your registration within 24-48 hours."
  },
  {
    question: "What types of medicolegal reports do you provide?",
    answer: "We provide a comprehensive range of medicolegal reports including: Consultations, Impairment Assessments, Medicolegal Reports, Expert Witness Testimony Preparation, Medical Record Reviews, Case Analysis for Legal Firms, and Joint Minutes."
  },
  {
    question: "How do I upload medical records and other documents?",
    answer: "Once registered, you can access our secure online portal where you can upload medical records and supporting documents. The system accepts various file formats including PDF, DOC, and images. All uploads are encrypted and stored securely."
  },
  {
    question: "How can I track the progress of my medicolegal report?",
    answer: "Our online booking system allows you to track the progress of your report in real-time. You'll receive notifications at key milestones, and you can log in to your account at any time to check the current status of your report."
  },
  {
    question: "What measures do you take to ensure data security?",
    answer: "We maintain the highest standards of data security with rigorous internal quality control. All data is encrypted both in transit and at rest. We comply with all relevant data protection regulations and prioritize the integrity of both you and your client's information."
  },
  {
    question: "Do you provide expert witness testimony?",
    answer: "Yes, we provide expert witness testimony preparation services. Our qualified experts are ready to provide testimony in court, backed by thorough medical analysis and detailed documentation."
  },
  {
    question: "What is a joint minute?",
    answer: "A joint minute is a document where expert witnesses from both the Plaintiff and Defendant agree on key factual aspects of the case regarding the claimant's injuries. This allows for a more streamlined trial by eliminating unnecessary disputes over agreed-upon medical information."
  }
];

export const FAQList = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      role=""
      className="relative self-stretch caret-transparent flex flex-col col-end-2 col-start-1 row-end-3 row-start-2 justify-self-stretch md:col-end-3 md:col-start-2 md:row-end-2 md:row-start-1"
    >
      <div className="absolute bg-transparent caret-transparent rounded-[50px] inset-0"></div>
      <div className="relative box-border caret-transparent grid grow grid-cols-[minmax(0px,1fr)] grid-rows-[minmax(max-content,100%)] p-[0%] md:grid-rows-[1fr] md:pb-0 md:px-0">
        <div className="relative self-stretch caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 justify-self-stretch m-[0%]">
          <div className="caret-transparent">
            <div className="caret-transparent">
              <div className="caret-transparent">
                <div className="bg-transparent caret-transparent gap-x-6 grid [grid-template-areas:'Body_Body_Body_Body_Body'] grid-cols-[1fr_1fr_1fr_1fr_1fr] grid-rows-[1fr] h-full gap-y-6 p-8">
                  <div className="box-border caret-transparent col-end-[span_5] col-start-1 row-end-[span_1] row-start-1">
                    <div
                      role="region"
                      className="caret-transparent gap-x-3 flex flex-col gap-y-3"
                    >
                      {faqs.map((faq, index) => (
                        <div key={index} className="caret-transparent">
                          <button
                            className="bg-transparent caret-transparent block w-full bg-[position:0px_0px] p-0 text-left transition-all duration-300 hover:opacity-70"
                            onClick={() => toggleFAQ(index)}
                            aria-expanded={openIndex === index}
                          >
                            <div className="items-start caret-transparent flex py-6">
                              <div className="caret-transparent flex w-full">
                                <div className="items-center caret-transparent flex grow">
                                  <div className="caret-transparent flex flex-col">
                                    <p className="text-stone-700 text-2xl caret-transparent leading-[33.6px] font-helvetica_w01_roman">
                                      {faq.question}
                                    </p>
                                  </div>
                                  <div className="items-center caret-transparent flex grow justify-end ml-3 mr-2"></div>
                                </div>
                                <div className="caret-transparent transition-transform duration-300" style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                  <img
                                    src="https://c.animaapp.com/mfzgti4gECrRkJ/assets/icon-8.svg"
                                    alt="Icon"
                                    className="text-stone-700 text-2xl caret-transparent h-9 leading-[33.6px] w-9 font-helvetica_w01_roman"
                                  />
                                </div>
                              </div>
                            </div>
                          </button>
                          <div
                            className={`caret-transparent overflow-hidden transition-all duration-300 ease-in-out ${
                              openIndex === index ? 'max-h-[500px] opacity-100 mb-4' : 'max-h-0 opacity-0'
                            }`}
                          >
                            <p className="text-stone-700 text-lg caret-transparent leading-[27px] font-helvetica_w01_roman px-2">
                              {faq.answer}
                            </p>
                          </div>
                          <div className="border-b-stone-700 caret-transparent w-full mt-3 border-b"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute box-border caret-transparent col-end-[Body] col-start-[Body] row-end-[Body] row-start-[Body] h-0 w-0 bottom-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

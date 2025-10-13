import { TestimonialCard } from "@/sections/TestimonialsSection/components/TestimonialCard";
import { TestimonialNavigation } from "@/sections/TestimonialsSection/components/TestimonialNavigation";

export const TestimonialsSection = () => {
  return (
    <section className="relative self-stretch bg-transparent caret-transparent flex flex-col col-end-2 col-start-1 row-end-[18] row-start-[17] justify-self-stretch max-h-[99999px] max-w-[99999px]">
      <div className="absolute caret-transparent h-full [mask-repeat:no-repeat] [mask-size:100%] w-full overflow-hidden left-0 top-0">
        <div className="absolute bg-stone-400 caret-transparent h-full w-full top-0"></div>
        <div className="caret-transparent h-full"></div>
      </div>
      <div className="relative box-border caret-transparent gap-x-[10.3448px] grid grow grid-cols-[minmax(0px,1fr)] grid-rows-[minmax(1436.84px,auto)] gap-y-[10.3448px] p-[29.9767px] md:gap-x-0 md:grid-rows-[minmax(836.932px,auto)] md:gap-y-0 md:pt-[16%] md:pb-[8%] md:px-[8%]">
        <div
          role=""
          className="relative self-stretch caret-transparent flex flex-col col-end-2 col-start-1 row-end-2 row-start-1 justify-self-stretch"
        >
          <div className="absolute bg-transparent caret-transparent inset-0"></div>
          <div className="relative box-border caret-transparent grid grow grid-cols-[minmax(0px,1fr)] grid-rows-[minmax(185.185px,auto)] md:grid-rows-[minmax(max-content,100%)]">
            <div
              role="group"
              className="relative self-start bg-stone-400 caret-transparent grid col-end-2 col-start-1 row-end-2 row-start-1 grid-cols-[minmax(0px,1fr)] grid-rows-[1fr] justify-self-start max-h-[99999px] max-w-[99999px] w-[99.9999%] mt-[162.792px] mb-0 mx-0 md:self-stretch md:justify-self-stretch md:mr-[-0.000317606%] md:w-auto md:ml-[0%] md:my-[0%]"
            >
              <div className="relative caret-transparent grid grid-cols-[minmax(0px,1fr)] grid-rows-[1fr]">
                <div className="relative box-border caret-transparent gap-x-0 grid grid-cols-[minmax(0px,339.939fr)] grid-rows-[minmax(925.923px,auto)] gap-y-0 px-0 md:grid-cols-[minmax(0px,1fr)] md:grid-rows-[minmax(max-content,100%)] md:px-[0%]">
                  <div className="relative self-stretch bg-transparent caret-transparent grid col-end-2 col-start-1 row-end-2 row-start-1 grid-cols-[minmax(0px,1fr)] grid-rows-[1fr] justify-self-stretch max-h-[99999px] max-w-[99999px] overflow-clip">
                    <div
                      role="list"
                      className="relative box-border caret-transparent grid grid-cols-[1fr] grid-rows-[1fr]"
                    >
                      <div className="caret-transparent col-end-2 col-start-1 row-end-2 row-start-1">
                        <div
                          role="listitem"
                          className="relative box-border caret-transparent grid shrink-0 grid-cols-[1fr] grid-rows-[1fr] max-h-[99999px] max-w-[99999px] min-h-full w-full"
                        >
                          <div className="absolute bg-stone-400 caret-transparent inset-0"></div>
                          <TestimonialCard />
                        </div>
                      </div>
                    </div>
                  </div>
                  <TestimonialNavigation
                    variant=""
                    ariaLabel="Previous"
                    iconSrc="https://c.animaapp.com/mfzgti4gECrRkJ/assets/icon-7.svg"
                  />
                  <TestimonialNavigation
                    variant=""
                    ariaLabel="Next"
                    iconSrc="https://c.animaapp.com/mfzgti4gECrRkJ/assets/icon-7.svg"
                  />
                </div>
              </div>
            </div>
            <div
              role=""
              className="relative self-start box-border caret-transparent flex flex-col col-end-2 col-start-1 row-end-2 row-start-1 justify-self-end mr-[-0.5px] max-w-[99999px] min-w-0 w-[100.08%] ml-0 mt-[0.5px] py-5 md:justify-self-start md:mt-[-97.697px] md:max-w-none md:min-w-[auto] md:w-[65.6948%] md:ml-[2.01318px] md:mr-0 md:py-0"
            >
              <div className="absolute bg-transparent caret-transparent inset-0"></div>
              <div
                role=""
                className="relative self-start box-border caret-transparent grid grid-cols-[minmax(0px,134fr)] grid-rows-[minmax(11.1111px,auto)] max-h-[99999px] max-w-[99999px] min-h-8 order-1 w-[162px] mb-5 mx-[0%] px-3.5 py-2 md:grid-cols-[minmax(0px,120.74fr)] md:grid-rows-[minmax(16px,auto)] md:w-[148.74px] md:mb-[2.37653%]"
              >
                <div className="absolute bg-stone-700 caret-transparent rounded-tr-xl inset-0"></div>
                <div className="relative self-center caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 justify-self-center max-h-[99999px] max-w-[99999px] break-words w-[90.2985%] m-0 md:self-start md:justify-self-start md:w-[111.595%] md:mt-[0.0258821%] md:mb-[0%] md:mx-[0%]">
                  <h2 className="text-white text-xs font-bold caret-transparent tracking-[2.4px] break-words text-center font-helvetica_w01_bold md:text-[12.142px] md:tracking-[2.4284px] md:text-start">
                    <span className="text-xs caret-transparent tracking-[2.4px] break-words text-center md:text-[12.142px] md:tracking-[2.4284px] md:text-start">
                      TESTIMONIALS
                    </span>
                  </h2>
                </div>
              </div>
              <div className="relative self-start caret-transparent max-h-[99999px] max-w-[99999px] order-2 break-words w-[99.9643%] mb-[0%] mx-[0%] md:w-full">
                <p className="text-stone-700 text-[27.7778px] caret-transparent break-words text-left font-bold font-helvetica_w01_bold md:text-[40.4744px] md:text-start">
                  <span className="text-[27.7778px] caret-transparent break-words text-left md:text-[40.4744px] md:text-start">
                    What our clients are saying.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

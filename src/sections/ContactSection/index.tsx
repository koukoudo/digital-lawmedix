import { ContactForm } from "@/sections/ContactSection/components/ContactForm";

export const ContactSection = () => {
  return (
    <section className="relative self-stretch bg-transparent box-border caret-transparent grid col-end-2 col-start-1 row-end-[22] row-start-[21] grid-cols-[minmax(0px,1fr)] grid-rows-[minmax(365.902px,auto)] justify-self-stretch max-h-[99999px] max-w-[99999px] md:grid-rows-[minmax(151.969px,auto)]">
      <div className="absolute caret-transparent h-full [mask-repeat:no-repeat] [mask-size:100%] w-full overflow-hidden left-0 top-0">
        <div className="absolute bg-neutral-100 caret-transparent h-full w-full top-0"></div>
        <div className="caret-transparent h-full"></div>
      </div>
      <div
        role=""
        className="relative self-stretch caret-transparent flex flex-col col-end-2 col-start-1 row-end-2 row-start-1 justify-self-stretch"
      >
        <div className="absolute bg-transparent caret-transparent inset-0 md:bg-white"></div>
        <div className="relative box-border caret-transparent grid grow grid-cols-[minmax(0px,1fr)] grid-rows-[1fr] px-[0%] md:px-[8%]">
          <div
            role=""
            className="relative self-stretch caret-transparent flex flex-col col-end-2 col-start-1 row-end-2 row-start-1 grid-cols-[minmax(0px,1fr)] grid-rows-[1fr] justify-self-stretch max-h-[99999px] max-w-[99999px] min-h-0 w-auto m-[0%] md:self-start md:grid md:justify-self-center md:mt-[-119.938px] md:min-h-[609.469px] md:w-[99.9781%] md:ml-[0.000918763%] md:mr-[0.000186008%]"
          >
            <div className="absolute bg-zinc-100 caret-transparent rounded-none inset-0 md:rounded-[50px]"></div>
            <div className="relative box-border caret-transparent gap-x-0 grid grow grid-cols-[minmax(0px,1fr)] grid-rows-[minmax(max-content,100%)] gap-y-0 p-[8%] md:grid-rows-[minmax(503.385px,auto)] md:px-[7%] md:py-[5%]">
              <div
                role=""
                className="relative self-start caret-transparent flex flex-col col-end-2 col-start-1 row-end-2 row-start-1 justify-self-center mb-[-0.0105205%] max-h-[99999px] w-[99.9977%] mt-[0.0131364%] mx-[0%] md:justify-self-start md:max-h-none md:w-max md:mt-[0.0181445%] md:mb-[0%]"
              >
                <div className="absolute bg-transparent caret-transparent inset-0"></div>
                <div className="relative box-border caret-transparent flex flex-col grow pb-[0%] md:flex-row md:pb-0">
                  <div className="relative self-center caret-transparent max-h-[99999px] max-w-[99999px] order-1 break-words w-full mr-0 mt-0 mb-[6.67202%] md:self-start md:mr-[-60px] md:w-[332.674px] md:mt-[0.0083313px] md:mb-[0%]">
                    <h2 className="text-stone-700 text-[40.3851px] caret-transparent break-words text-center font-helvetica_w01_bold md:text-[60.0009px] md:text-left">
                      <span className="text-[40.3851px] caret-transparent break-words text-center md:text-[60.0009px] md:text-left">
                        Get in Touch
                      </span>
                    </h2>
                  </div>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const FAQHeader = () => {
  return (
    <div
      role=""
      className="relative self-stretch caret-transparent flex flex-col col-end-2 col-start-1 row-end-2 row-start-1 justify-self-stretch"
    >
      <div className="absolute bg-transparent caret-transparent inset-0"></div>
      <div className="relative box-border caret-transparent grid grow grid-cols-[minmax(0px,1fr)] grid-rows-[minmax(max-content,100%)] pt-[0%] md:grid-rows-[1fr] md:pt-[40%]">
        <div
          role=""
          className="relative self-start box-border caret-transparent flex flex-col col-end-2 col-start-1 row-end-2 row-start-1 justify-self-start max-h-[99999px] max-w-[99999px] min-h-[102.359px] w-[99.4134%] mt-[0.0715376%] mb-[0%] mx-[0%] md:mt-[-39.9949%] md:min-h-[171.359px] md:w-[99.642%] md:mb-[40%]"
        >
          <div className="absolute bg-transparent caret-transparent inset-0"></div>
          <div
            role=""
            className="relative self-start box-border caret-transparent grid grid-cols-[minmax(0px,1fr)] grid-rows-[minmax(16px,auto)] max-h-[99999px] max-w-[99999px] min-h-8 order-1 w-[63px] mb-[6.14056%] mx-[0%] px-3.5 py-2 md:mb-[5.83428%]"
          >
            <div className="absolute bg-stone-700 caret-transparent rounded-tr-xl inset-0"></div>
            <div className="relative self-start caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 justify-self-start mb-[-0.0446429%] max-h-[99999px] max-w-[99999px] break-words w-max mt-[0.0446429%] mx-[0%]">
              <h2 className="text-white text-xs font-bold caret-transparent tracking-[2.4px] break-words font-helvetica_w01_bold">
                FAQ
              </h2>
            </div>
          </div>
          <div className="relative self-start caret-transparent max-h-[99999px] max-w-[99999px] min-h-0 order-2 break-words w-full mb-[0%] mx-[0%] md:max-h-none md:min-h-[auto]">
            <p className="text-stone-700 text-3xl caret-transparent break-words font-bold font-helvetica_w01_bold md:text-[40px]">
              Your questions, answered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

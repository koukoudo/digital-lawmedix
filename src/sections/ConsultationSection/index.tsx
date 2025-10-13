import { ConsultationCards } from "@/sections/ConsultationSection/components/ConsultationCards";

export const ConsultationSection = () => {
  return (
    <section className="relative self-stretch bg-transparent caret-transparent flex flex-col col-end-2 col-start-1 row-end-10 row-start-9 justify-self-stretch max-h-[99999px] max-w-[99999px] md:row-end-11 md:row-start-10">
      <div className="absolute caret-transparent h-full [mask-repeat:no-repeat] [mask-size:100%] w-full overflow-hidden left-0 top-0">
        <div className="absolute bg-stone-400 caret-transparent h-full w-full top-0 md:bg-neutral-100"></div>
        <div className="caret-transparent h-full"></div>
      </div>
      <div className="relative box-border caret-transparent gap-x-3 grid grow grid-cols-[minmax(0px,1fr)] grid-rows-[minmax(1573.53px,auto)] ml-[clamp(0px,50%_-_5e+10px,375px)] max-w-[3.35544e+07px] gap-y-3 px-[30px] py-10 md:gap-x-[normal] md:grid-rows-[minmax(1808.96px,auto)] md:ml-[clamp(0px,50%_-_5e+10px,1280px)] md:gap-y-[normal] md:p-0">
        <div
          role=""
          className="sticky self-start caret-transparent flex flex-col col-end-2 col-start-1 row-end-2 row-start-1 h-[1000px] justify-self-center max-h-[99999px] max-w-[99999px] w-screen mr-[0.00957425px] top-[calc(0%_+_30px)] md:mr-0"
        >
          <div className="absolute bg-stone-400 caret-transparent inset-0"></div>
          <div className="relative box-border caret-transparent gap-x-5 grid grow grid-cols-[minmax(0px,420.267fr)] grid-rows-[minmax(786.765px,auto)] gap-y-5 px-0 py-5 md:gap-x-[normal] md:grid-cols-[minmax(0px,1280fr)] md:grid-rows-[minmax(904.48px,auto)] md:gap-y-[normal] md:p-[8%]">
            <ConsultationCards />
          </div>
        </div>
      </div>
    </section>
  );
};

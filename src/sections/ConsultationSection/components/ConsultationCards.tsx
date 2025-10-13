import { RegisterCard } from "@/sections/ConsultationSection/components/RegisterCard";
import { BookingCard } from "@/sections/ConsultationSection/components/BookingCard";

export const ConsultationCards = () => {
  return (
    <div
      role=""
      className="relative self-start box-border caret-transparent gap-x-5 grid col-end-2 col-start-1 row-end-2 row-start-1 grid-cols-[minmax(0px,1fr)] grid-rows-[minmax(114.553px,auto)_minmax(339.415px,auto)_minmax(278.233px,auto)] justify-self-center max-h-[99999px] max-w-[99999px] gap-y-5 w-[81.177%] ml-0 mr-[0.00864104px] mt-0 py-5 md:gap-x-0 md:grid-cols-[1.00421fr_0.995789fr] md:grid-rows-[minmax(265.158px,max-content)_minmax(478.184px,max-content)] md:justify-self-start md:mt-[-2.0361px] md:gap-y-0 md:w-[99.5041%] md:ml-[0.5px] md:mr-0 md:py-0"
    >
      <div className="absolute bg-transparent caret-transparent inset-0"></div>
      <div className="relative self-start caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 justify-self-start ml-[-0.158337px] max-h-[99999px] max-w-[99999px] break-words w-[99.9217%] mt-[8.71665px] md:col-end-3 md:justify-self-center md:w-[87.5359%] md:ml-[4.69606px] md:mt-0">
        <h1 className="text-stone-700 text-[28px] caret-transparent leading-[33.6px] break-words text-center font-bold font-helvetica_w01_bold md:text-[42.935px] md:leading-[51.522px]">
          <span className="text-[28px] caret-transparent leading-[33.6px] break-words md:text-[42.935px] md:leading-[51.522px]">
            Get a Consultation and 
            <br className="text-[28px] caret-transparent leading-[33.6px] break-words md:text-[42.935px] md:leading-[51.522px]" />
            Explore Our Services.
          </span>
        </h1>
      </div>
      <RegisterCard />
      <BookingCard />
    </div>
  );
};

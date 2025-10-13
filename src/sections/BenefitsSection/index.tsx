import { BenefitsHeader } from "@/sections/BenefitsSection/components/BenefitsHeader";
import { BenefitsList } from "@/sections/BenefitsSection/components/BenefitsList";

export const BenefitsSection = () => {
  return (
    <section className="relative self-stretch bg-transparent caret-transparent flex flex-col col-end-2 col-start-1 row-end-[16] row-start-[15] grid-cols-[minmax(0px,1fr)] grid-rows-[1fr] justify-self-stretch max-h-[99999px] max-w-[99999px] min-h-0 md:grid md:row-end-[17] md:row-start-[16] md:min-h-[823.667px]">
      <div className="absolute caret-transparent h-full [mask-repeat:no-repeat] [mask-size:100%] w-full overflow-hidden left-0 top-0">
        <div className="absolute bg-neutral-100 caret-transparent h-full w-full top-0"></div>
        <div className="caret-transparent h-full"></div>
      </div>
      <div className="relative box-border caret-transparent gap-x-0 grid grow grid-cols-[minmax(0px,1fr)] grid-rows-[minmax(78.921px,auto)_minmax(746.632px,auto)] gap-y-[38.4614px] px-[8%] md:grid-rows-[minmax(127.166px,auto)_minmax(435.174px,auto)] md:gap-y-[59.202px] md:py-[8%]">
        <BenefitsHeader />
        <BenefitsList />
      </div>
    </section>
  );
};

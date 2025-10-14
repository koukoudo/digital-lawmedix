import { FAQHeader } from "@/sections/FAQSection/components/FAQHeader";
import { FAQList } from "@/sections/FAQSection/components/FAQList";

export const FAQSection = () => {
  return (
    <section id="faq" className="relative self-stretch bg-transparent caret-transparent grid flex-col col-end-2 col-start-1 row-end-[19] row-start-[18] grid-cols-[minmax(0px,1fr)] grid-rows-[1fr] justify-self-stretch max-h-[99999px] max-w-[99999px] min-h-[871.075px] md:row-end-[20] md:row-start-[19] md:min-h-[911.26px]">
      <div className="absolute caret-transparent h-full [mask-repeat:no-repeat] [mask-size:100%] w-full overflow-hidden left-0 top-0">
        <div className="absolute bg-neutral-100 caret-transparent h-full w-full top-0"></div>
        <div className="caret-transparent h-full"></div>
      </div>
      <div className="relative box-border caret-transparent gap-x-[36.88px] grid grow grid-cols-[minmax(0px,1fr)] grid-rows-[minmax(84.2745px,auto)_minmax(705.201px,auto)] gap-y-0 px-[8%] py-[10%] md:gap-x-[39.47px] md:grid-cols-[0.948739fr_2.05125fr] md:grid-rows-[minmax(709.135px,auto)] md:py-[8%]">
        <FAQHeader />
        <FAQList />
      </div>
    </section>
  );
};

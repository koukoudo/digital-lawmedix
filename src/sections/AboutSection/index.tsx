import { AboutHeader } from "@/sections/AboutSection/components/AboutHeader";
import { AboutContent } from "@/sections/AboutSection/components/AboutContent";

export const AboutSection = () => {
  return (
    <section id="about" className="relative self-stretch bg-transparent caret-transparent grid flex-col col-end-2 col-start-1 row-end-13 row-start-12 grid-cols-[minmax(0px,1fr)] grid-rows-[1fr] justify-self-stretch max-h-[99999px] max-w-[99999px] min-h-[900px] md:row-end-[14] md:row-start-13 md:min-h-[1600px]">
      <div className="absolute caret-transparent h-full [mask-repeat:no-repeat] [mask-size:100%] w-full overflow-hidden left-0 top-0">
        <div className="absolute bg-stone-400 caret-transparent h-full w-full top-0"></div>
        <div className="caret-transparent h-full"></div>
      </div>
      <div className="relative box-border caret-transparent gap-x-[60px] grid grow grid-cols-[minmax(0px,1fr)] grid-rows-[minmax(136.8px,auto)_minmax(auto,auto)] gap-y-0 pl-[0%] pr-0 pt-[15%] pb-[20%] md:gap-x-[59.999px] md:grid-cols-[0.820263fr_2.19551fr] md:grid-rows-[minmax(auto,auto)] md:p-[8%] md:pb-[15%]">
        <AboutHeader />
        <AboutContent />
      </div>
    </section>
  );
};

import { HeroText } from "@/sections/Hero/components/HeroText";
import { HeroImage } from "@/sections/Hero/components/HeroImage";

export const HeroContent = () => {
  return (
    <div className="relative box-border caret-transparent gap-x-3 grid grow grid-cols-[minmax(0px,1fr)] grid-rows-[minmax(350px,auto)_minmax(491.61px,auto)] gap-y-3 pt-[100px] pb-10 px-[15%] place-items-center h-full md:gap-x-[30.0022px] md:grid-cols-[1.024fr_0.976003fr] md:grid-rows-[minmax(max-content,100%)] md:gap-y-0 md:p-[8%] animate-fade-in">
      <HeroText />
      <HeroImage />
    </div>
  );
};

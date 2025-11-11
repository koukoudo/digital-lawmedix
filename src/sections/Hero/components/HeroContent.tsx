import { HeroText } from "@/sections/Hero/components/HeroText";
import { HeroImage } from "@/sections/Hero/components/HeroImage";

export const HeroContent = () => {
  return (
    <div className="relative box-border caret-transparent flex flex-col grow gap-y-4 pt-[80px] pb-10 px-[8%] place-items-center h-full md:gap-x-[30.0022px] md:grid md:grid-cols-[1.024fr_0.976003fr] md:grid-rows-[minmax(max-content,100%)] md:gap-y-0 md:p-[8%] animate-fade-in">
      <HeroImage />
      <HeroText />
    </div>
  );
};

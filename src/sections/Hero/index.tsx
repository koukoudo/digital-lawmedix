import { HeroContent } from "@/sections/Hero/components/HeroContent";

export const Hero = () => {
  return (
    <section
      aria-label="main content"
      className="sticky self-stretch bg-transparent caret-transparent flex flex-col col-end-2 col-start-1 row-end-2 row-start-1 grid-cols-[minmax(0px,1fr)] grid-rows-[1fr] h-[100vh] justify-self-stretch max-h-[99999px] max-w-[99999px] min-h-0 top-[calc(0%_+_30px)] md:grid md:row-end-10 md:row-start-9 md:min-h-[100vh] z-[100]"
    >
      <div className="absolute caret-transparent h-full [mask-repeat:no-repeat] [mask-size:100%] w-full overflow-hidden left-0 top-0">
        <div className="caret-transparent h-full"></div>
      </div>
      <HeroContent />
    </section>
  );
};

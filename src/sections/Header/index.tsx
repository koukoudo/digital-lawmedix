import { HeaderContent } from "@/sections/Header/components/HeaderContent";

export const Header = () => {
  return (
    <header className="relative self-start box-border caret-transparent grid col-end-2 col-start-1 row-end-2 row-start-1 grid-cols-[1fr] grid-rows-[1fr] justify-self-stretch max-w-[99999px]">
      <section className="sticky self-stretch bg-transparent caret-transparent grid col-end-2 col-start-1 row-end-2 row-start-1 grid-cols-[minmax(0px,1fr)] grid-rows-[1fr] h-auto justify-self-stretch max-h-[99999px] max-w-[99999px] min-h-[104px] top-[calc(0%_+_30px)] md:h-[100px] md:min-h-0">
        <div className="absolute caret-transparent h-full [mask-repeat:no-repeat] [mask-size:100%] w-full overflow-hidden left-0 top-0">
          <div className="absolute caret-transparent h-full w-full top-0"></div>
          <div className="caret-transparent h-full"></div>
        </div>
        <HeaderContent />
      </section>
    </header>
  );
};

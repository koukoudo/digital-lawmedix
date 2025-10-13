import { ServicesHeader } from "@/sections/ServicesSection/components/ServicesHeader";
import { ServicesList } from "@/sections/ServicesSection/components/ServicesList";

export const ServicesSection = () => {
  return (
    <section className="relative self-stretch bg-transparent caret-transparent grid flex-col col-end-2 col-start-1 row-end-12 row-start-11 grid-cols-[minmax(0px,1fr)] grid-rows-[1fr] justify-self-stretch max-h-[99999px] max-w-[99999px] min-h-[1903.71px] md:row-end-13 md:row-start-12 md:min-h-[1818.42px]">
      <div className="absolute caret-transparent h-full [mask-repeat:no-repeat] [mask-size:100%] w-full overflow-hidden left-0 top-0">
        <div className="absolute bg-neutral-100 caret-transparent h-full w-full top-0"></div>
        <div className="caret-transparent h-full"></div>
      </div>
      <div className="relative box-border caret-transparent grid grow grid-cols-[minmax(0px,1fr)] grid-rows-[minmax(max-content,24.0271%)_minmax(max-content,44.2669%)] pt-[10%] pb-[0%] px-0 md:grid-rows-[minmax(max-content,8.04214%)_minmax(max-content,91.9576%)] md:px-[0%] md:py-[8%]">
        <ServicesHeader />
        <ServicesList />
      </div>
    </section>
  );
};

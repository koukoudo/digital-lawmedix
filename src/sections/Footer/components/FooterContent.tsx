import { FooterLogo } from "@/sections/Footer/components/FooterLogo";

export const FooterContent = () => {
  return (
    <div
      role=""
      className="relative self-stretch caret-transparent flex flex-col col-end-2 col-start-1 row-end-2 row-start-1 justify-self-stretch m-[0%] md:m-0"
    >
      <div className="absolute bg-transparent caret-transparent inset-0"></div>
      <div className="relative box-border caret-transparent grid grow grid-cols-[minmax(0px,1fr)] grid-rows-[minmax(max-content,100%)] px-[8%] md:grid-rows-[1fr] md:pl-[33%] md:pr-0">
        <FooterLogo />
      </div>
    </div>
  );
};

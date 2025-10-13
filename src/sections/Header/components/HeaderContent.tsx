import { MobileMenuButton } from "@/sections/Header/components/MobileMenuButton";
import { Logo } from "@/components/Logo";
import { DesktopNavigation } from "@/sections/Header/components/DesktopNavigation";

export const HeaderContent = () => {
  return (
    <div className="relative box-border caret-transparent grid grid-cols-[minmax(0px,1fr)] grid-rows-[minmax(65px,auto)] px-[8%] py-[5%] md:grid-rows-[minmax(95.2604px,auto)] md:px-[60px] md:py-10">
      <div
        role=""
        className="relative self-stretch caret-transparent flex flex-col col-end-2 col-start-1 row-end-2 row-start-1 justify-self-stretch"
      >
        <div className="absolute bg-white caret-transparent rounded-[496.032px] inset-0 md:rounded-[1012.45px]"></div>
        <div className="relative box-border caret-transparent grid grow grid-cols-[minmax(0px,1fr)] grid-rows-[minmax(max-content,100%)] px-10 py-[0%]">
          <MobileMenuButton />
          <Logo />
          <DesktopNavigation />
        </div>
      </div>
    </div>
  );
};

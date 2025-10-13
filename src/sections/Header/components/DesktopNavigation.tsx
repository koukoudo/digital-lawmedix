import { NavMenu } from "@/sections/Header/components/NavMenu";
import { RegisterButton } from "@/sections/Header/components/RegisterButton";
import { BookConsultationButton } from "@/sections/Header/components/BookConsultationButton";
import { ServiceButton } from "@/sections/Header/components/ServiceButton";

export const DesktopNavigation = () => {
  return (
    <div
      role=""
      className="relative self-center box-border caret-transparent hidden col-end-2 col-start-1 row-end-2 row-start-1 justify-self-end min-w-0 w-max ml-[0%] mr-[17%] my-[0%] md:flex md:min-w-[auto] md:mr-[0.0635237%] md:mt-[0.0462043%]"
    >
      <div className="absolute bg-transparent caret-transparent inset-0"></div>
      <NavMenu />
      <RegisterButton />
      <BookConsultationButton />
      <ServiceButton />
    </div>
  );
};

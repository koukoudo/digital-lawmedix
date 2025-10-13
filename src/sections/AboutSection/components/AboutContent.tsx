import { ProfileImage } from "@/sections/AboutSection/components/ProfileImage";
import { ProfileText } from "@/sections/AboutSection/components/ProfileText";

export const AboutContent = () => {
  return (
    <div
      role=""
      className="relative self-stretch caret-transparent flex flex-col col-end-2 col-start-1 row-end-3 row-start-2 justify-self-stretch md:col-end-3 md:col-start-2 md:row-end-2 md:row-start-1"
    >
      <div className="absolute bg-transparent caret-transparent inset-0"></div>
      <div className="relative box-border caret-transparent grid grow grid-cols-[minmax(0px,1fr)] grid-rows-[minmax(max-content,99.9999%)] pb-[0%] px-[8%] md:grid-rows-[1fr] md:pb-0 md:px-0">
        <div
          role=""
          className="relative self-start box-border caret-transparent flex flex-col col-end-2 col-start-1 row-end-2 row-start-1 justify-self-center w-[100.148%] ml-0 mt-[0.5px] mb-0 md:justify-self-start md:mb-[-374.294px] md:w-[75.9882%] md:ml-[88.6884px] md:mt-[16.7116px]"
        >
          <div className="absolute bg-transparent caret-transparent rounded-[50px] inset-0"></div>
          <ProfileImage />
          <div className="relative self-center caret-transparent max-h-[99999px] max-w-[99999px] order-2 break-words w-[243.719px] ml-0 mb-[8.91547px] md:self-start md:w-[255.408px] md:ml-[2.51251px] md:mb-[10.1027px]">
            <h5 className="text-stone-700 text-[22.3618px] caret-transparent leading-[31.3066px] break-words text-center font-bold font-helvetica_w01_roman md:text-[22px] md:leading-[30.8px]">
              <span className="text-[22.3618px] caret-transparent leading-[31.3066px] break-words md:text-[22px] md:leading-[30.8px]">
                Prof. Kenneth Segwapa
              </span>
            </h5>
          </div>
          <div className="relative self-center border-t-stone-700 caret-transparent h-0 max-h-[99999px] max-w-[99999px] order-3 origin-[50%_1px] w-[244.425px] mb-[31.273px] border-t-2 md:self-start md:w-[257.883px] md:mb-[55.7194px]"></div>
          <ProfileText />
        </div>
      </div>
    </div>
  );
};

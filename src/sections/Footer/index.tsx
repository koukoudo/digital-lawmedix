import { FooterContent } from "@/sections/Footer/components/FooterContent";

export const Footer = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
  e.preventDefault();
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

  return (
    <footer className="relative self-stretch box-border caret-transparent grid col-end-2 col-start-1 row-end-[23] row-start-[22] grid-cols-[1fr] grid-rows-[1fr] justify-self-stretch z-50">
      <section className="relative self-stretch bg-transparent box-border caret-transparent gap-x-[50px] grid col-end-2 col-start-1 row-end-10 row-start-9 grid-cols-[minmax(0px,1fr)] grid-rows-[minmax(50px,auto)_minmax(50px,auto)_minmax(50px,auto)_minmax(50px,auto)_minmax(80px,auto)] justify-self-stretch max-h-[99999px] max-w-[99999px] min-h-[967.781px] gap-y-[30px] pt-[60px] md:gap-x-10 md:grid-cols-[0.291008fr_0.137343fr_0.287216fr_0.323788fr] md:grid-rows-[minmax(198.438px,auto)_minmax(84.562px,auto)] md:min-h-[343px] md:gap-y-[normal]">
        <div className="absolute caret-transparent h-full [mask-repeat:no-repeat] [mask-size:100%] w-full overflow-hidden left-0 top-0">
          <div className="absolute bg-white caret-transparent h-full w-full top-0"></div>
          <div className="caret-transparent h-full"></div>
        </div>
        <FooterContent />
        <div
          role=""
          className="relative self-stretch caret-transparent flex flex-col col-end-2 col-start-1 row-end-3 row-start-2 justify-self-stretch m-[0%] md:col-end-3 md:col-start-2 md:row-end-2 md:row-start-1 md:m-0"
        >
          <div className="absolute bg-transparent caret-transparent inset-0"></div>
          <div className="relative box-border caret-transparent grid grow grid-cols-[minmax(0px,1fr)] grid-rows-[minmax(max-content,100%)] px-[8%] md:px-0">
            <div
              role=""
              className="relative self-center box-border caret-transparent flex flex-col col-end-2 col-start-1 row-end-2 row-start-1 justify-self-center w-[78.4206%] m-[0%] md:self-start md:justify-self-start md:w-[80.8677%] md:ml-[0.0100908%] md:mt-[0.0302724%]"
            >
              <div className="absolute bg-transparent caret-transparent inset-0"></div>
              <div className="relative self-center caret-transparent max-h-[99999px] max-w-[99999px] order-1 break-words w-max ml-[2.01339%] mr-[0%] mb-[3.85929%] md:self-start md:ml-[0%] md:mb-[8.64737%]">
                <p className="text-stone-700 text-base font-bold caret-transparent break-words text-center font-helvetica_w01_bold md:text-start">
                  MENU
                </p>
              </div>
              <nav
                aria-label="Site"
                className="relative self-center caret-transparent grid grid-cols-[minmax(0px,1fr)] max-h-[99999px] max-w-[99999px] order-2 w-full mb-[0%] mx-[0%] md:self-start md:w-[125.219px]"
              >
                <ul className="relative box-border caret-transparent list-none min-h-px w-full pl-0">
                  <li className="relative bg-transparent box-border caret-transparent block text-center">
                    <div className="relative caret-transparent grid grid-cols-[1fr]">
                      <span className="relative caret-transparent grid text-ellipsis">
                        <a
                href="#services"
                onClick={(e) => scrollToSection(e, 'services')}
                className="relative text-blue-700 bg-transparent box-border caret-transparent block basis-[0%] grow m-1 p-1 cursor-pointer"
              >
                <div className="items-center box-border caret-transparent flex h-full justify-center">
                  <span className="text-stone-700 text-base box-border caret-transparent block min-h-0 min-w-0 text-nowrap font-helvetica_w01_roman md:min-h-[auto] md:min-w-[auto]">
                    Services
                  </span>
                </div>
              </a>
                      </span>
                    </div>
                  </li>
                  <li className="relative bg-transparent box-border caret-transparent block text-center">
                    <div className="relative caret-transparent grid grid-cols-[1fr]">
                      <span className="relative caret-transparent grid text-ellipsis">
                         <a
                href="#about"
                onClick={(e) => scrollToSection(e, 'about')}
                className="relative text-blue-700 bg-transparent box-border caret-transparent block basis-[0%] grow m-1 p-1 cursor-pointer"
              >
                <div className="items-center box-border caret-transparent flex h-full justify-center">
                  <span className="text-stone-700 text-base box-border caret-transparent block min-h-0 min-w-0 text-nowrap font-helvetica_w01_roman md:min-h-[auto] md:min-w-[auto]">
                    About
                  </span>
                </div>
              </a>
                      </span>
                    </div>
                  </li>
                  <li className="relative bg-transparent box-border caret-transparent block text-center">
                    <div className="relative caret-transparent grid grid-cols-[1fr]">
                      <span className="relative caret-transparent grid text-ellipsis">
                        <a
                href="#faq"
                onClick={(e) => scrollToSection(e, 'faq')}
                className="relative text-blue-700 bg-transparent box-border caret-transparent block basis-[0%] grow m-1 p-1 cursor-pointer"
              >
                <div className="items-center box-border caret-transparent flex h-full justify-center">
                  <span className="text-stone-700 text-base box-border caret-transparent block min-h-0 min-w-0 text-nowrap font-helvetica_w01_roman md:min-h-[auto] md:min-w-[auto]">
                    FAQ
                  </span>
                </div>
              </a>
                      </span>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div
          role=""
          className="relative self-stretch caret-transparent flex flex-col col-end-2 col-start-1 row-end-4 row-start-3 justify-self-stretch m-[0%] md:col-end-4 md:col-start-3 md:row-end-2 md:row-start-1 md:m-0"
        >
          <div className="absolute bg-transparent caret-transparent inset-0"></div>
          <div className="relative box-border caret-transparent grid grow grid-cols-[minmax(0px,1fr)] grid-rows-[minmax(max-content,100%)] px-[8%] md:grid-rows-[1fr] md:px-0">
            <div
              role=""
              className="relative self-center box-border caret-transparent flex flex-col col-end-2 col-start-1 row-end-2 row-start-1 justify-self-center w-[99.9948%] m-[0%] md:self-start md:justify-self-start md:w-[99.9998%] md:mt-[0.00935539%]"
            >
              <div className="absolute bg-transparent caret-transparent inset-0"></div>
              <div className="relative self-center caret-transparent max-h-[99999px] max-w-[99999px] order-1 break-words w-max mb-[4.42961%] mx-[0%] md:self-start md:mb-[6.41841%]">
                <p className="text-stone-700 text-base font-bold caret-transparent break-words text-center font-helvetica_w01_bold md:text-start">
                  CONTACT
                </p>
              </div>
              <div className="relative self-center caret-transparent max-h-[99999px] max-w-[99999px] order-2 break-words w-max mb-[0%] mx-[0%] md:self-start md:w-[99.9906%]">
                <p className="text-stone-700 text-base caret-transparent leading-8 break-words text-center font-helvetica_w01_roman md:text-start">
                  +27 12 549 7229
                </p>
                <p className="text-stone-700 text-base caret-transparent leading-8 break-words text-center font-helvetica_w01_roman md:text-start">
                  +27 12 549 0191
                </p>
                <p className="text-stone-700 text-base caret-transparent leading-8 break-words text-center font-helvetica_w01_roman md:text-start">
                  +27 12 522 1039
                </p>
                <p className="text-stone-700 text-base caret-transparent leading-8 break-words text-center font-helvetica_w01_roman md:text-start">
                  <span className="caret-transparent break-words text-center underline md:text-start">
                    <a
                      href="mailto://info@digitallawmedix.co.za"
                      className="caret-transparent break-words text-center md:text-start"
                    >
                      info@digitallawmedix.co.za
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          role=""
          className="relative self-stretch caret-transparent flex flex-col col-end-2 col-start-1 row-end-5 row-start-4 justify-self-stretch md:col-end-5 md:col-start-4 md:row-end-2 md:row-start-1"
        >
          <div className="absolute bg-transparent caret-transparent inset-0"></div>
          <div className="relative box-border caret-transparent grid grow grid-cols-[minmax(0px,1fr)] grid-rows-[minmax(max-content,100%)] px-[8%] md:grid-rows-[1fr] md:px-0">
            <div
              role=""
              className="relative self-center box-border caret-transparent flex flex-col col-end-2 col-start-1 row-end-2 row-start-1 justify-self-center w-[99.4273%] m-[0%] md:self-start md:justify-self-start md:w-[71.5885%] md:ml-[0.00877346%] md:mt-[0.0321636%]"
            >
              <div className="absolute bg-transparent caret-transparent inset-0"></div>
              <div className="relative self-center caret-transparent max-h-[99999px] max-w-[99999px] order-1 break-words w-max mb-[3.01221%] mx-[0%] md:self-start md:mb-[7.464%]">
                <p className="text-stone-700 text-base font-bold caret-transparent break-words text-center font-helvetica_w01_bold md:text-start">
                  ADDRESS
                </p>
              </div>
              <div className="relative self-center caret-transparent max-h-[99999px] max-w-[99999px] order-2 break-words w-full mb-[0%] mx-[0%] md:self-start md:w-[99.9865%] md:ml-[0.0182049%]">
                <p className="text-stone-700 text-base caret-transparent leading-8 break-words text-center font-helvetica_w01_roman md:text-start">
                  <span className="caret-transparent break-words text-center md:text-start">
                    Netcare Akasia Hospital, Suite 114, C/o Heinrich Avenue
                    &amp; Brits Road, Akasia, Pretoria
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          role=""
          className="relative self-stretch caret-transparent flex flex-col col-end-2 col-start-1 row-end-6 row-start-5 justify-self-stretch md:col-end-5 md:row-end-3 md:row-start-2"
        >
          <div className="absolute bg-transparent caret-transparent inset-0"></div>
          <div className="relative box-border caret-transparent grid grow grid-cols-[minmax(0px,1fr)] grid-rows-[minmax(max-content,100%)] px-[8%] py-[0%] md:grid-rows-[1fr]">
            <div className="relative self-start border-t-neutral-100 caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 h-0 justify-self-stretch origin-[50%_1px] m-[0%] border-t-2"></div>
            <div className="relative self-start caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 justify-self-center max-w-[99999px] break-words w-[83.761%] mr-0 mt-[66.546px] md:self-center md:justify-self-end md:w-6/12 md:mr-[0%] md:mt-0">
              <p className="text-stone-700 text-base caret-transparent break-words text-center font-helvetica_w01_roman md:text-right">
                © 2025 by Oaks Digital.
              </p>
            </div>
            <div className="relative self-start caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 justify-self-center max-h-[99999px] max-w-[99999px] break-words w-[39.4649%] ml-[0.00526457%] mr-[0%] mt-[23.4167px] mb-[0%] md:self-center md:justify-self-start md:w-max md:ml-[0%] md:mt-[0.00290638%]">
              <p className="text-stone-700 text-base caret-transparent break-words text-center font-helvetica_w01_roman md:text-left">
                <a
                  href="https://digitallawmedix.co.za/privacy-policy"
                  className="caret-transparent break-words text-center md:text-left"
                >
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export const FooterMenu = () => {
  return (
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
                      href="https://oaksdigital.wixstudio.com/digitallawmedix"
                      className="relative text-stone-700 text-base caret-transparent block leading-[22.4px] text-ellipsis text-nowrap overflow-hidden py-[5px] font-madefor_text md:font-helvetica_w01_roman"
                    >
                      Services
                    </a>
                  </span>
                </div>
              </li>
              <li className="relative bg-transparent box-border caret-transparent block text-center">
                <div className="relative caret-transparent grid grid-cols-[1fr]">
                  <span className="relative caret-transparent grid text-ellipsis">
                    <a
                      href="https://oaksdigital.wixstudio.com/digitallawmedix"
                      className="relative text-stone-700 text-base caret-transparent block leading-[22.4px] text-ellipsis text-nowrap overflow-hidden py-[5px] font-madefor_text md:font-helvetica_w01_roman"
                    >
                      About
                    </a>
                  </span>
                </div>
              </li>
              <li className="relative bg-transparent box-border caret-transparent block text-center">
                <div className="relative caret-transparent grid grid-cols-[1fr]">
                  <span className="relative caret-transparent grid text-ellipsis">
                    <a
                      href="https://oaksdigital.wixstudio.com/digitallawmedix"
                      className="relative text-stone-700 text-base caret-transparent block leading-[22.4px] text-ellipsis text-nowrap overflow-hidden py-[5px] font-madefor_text md:font-helvetica_w01_roman"
                    >
                      FAQ
                    </a>
                  </span>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

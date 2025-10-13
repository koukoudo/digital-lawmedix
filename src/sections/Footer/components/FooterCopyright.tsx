export const FooterCopyright = () => {
  return (
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
              href="https://oaksdigital.wixstudio.com/digitallawmedix/privacy-policy"
              className="caret-transparent break-words text-center md:text-left"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

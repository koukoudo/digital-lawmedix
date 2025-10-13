export const ServiceButton = () => {
  return (
    <div className="relative self-start caret-transparent hidden h-10 max-h-[99999px] max-w-[99999px] order-4 w-[170.854px] mt-[0.5px] md:block md:w-[348.85px]">
      <a
        href="https://drsegwapa.co.za/"
        aria-label="Plastic Reconstructive & Aesthetic Surgery"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-stone-300 shadow-[rgba(0,0,0,0)_0.71px_0.71px_2px_0px] box-border caret-transparent block h-full min-h-2.5 min-w-2.5 w-full border-stone-700 rounded-[250px] border-2 border-solid hover:bg-stone-700/50 hover:border"
      >
        <span className="items-center caret-transparent flex flex-row-reverse grow h-full justify-center w-full overflow-hidden">
          <span className="text-stone-700 text-base caret-transparent block max-w-full min-h-0 min-w-[28.8px] text-center text-ellipsis text-nowrap overflow-hidden ml-1 font-helvetica_w01_roman md:min-h-[auto]">
            Plastic Reconstructive &amp; Aesthetic Surgery
          </span>
          <span className="caret-transparent hidden fill-neutral-100 shrink-0 h-[25px] min-w-px w-[25px] mr-1">
            <span className="caret-transparent flex fill-neutral-100 h-[25px] w-[25px]">
              <img
                src="https://c.animaapp.com/mfzgti4gECrRkJ/assets/icon-4.svg"
                alt="Icon"
                className="caret-transparent flex h-[25px] w-[25px]"
              />
            </span>
          </span>
        </span>
      </a>
    </div>
  );
};

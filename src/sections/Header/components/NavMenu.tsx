const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
  e.preventDefault();
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

interface NavMenuProps {
  onItemClick?: () => void;
}

export const NavMenu = ({ onItemClick }: NavMenuProps = {}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    scrollToSection(e, sectionId);
    onItemClick?.();
  };

  return (
    <div className="relative self-start caret-transparent max-w-[99999px] min-h-10 order-1 w-full md:w-[607.869px] md:mr-[19.6239px] md:mt-[0.504704px]">
      <nav
        aria-label="Site"
        className="bg-transparent box-border caret-transparent flex h-full w-full"
      >
        <ul className="box-border caret-transparent flex flex-col md:flex-row md:flex-wrap h-auto md:h-[calc(100%_+_8px)] justify-start md:justify-end list-none min-h-0 min-w-fit w-full md:w-[calc(100%_+_8px)] -m-1 pl-0 md:min-h-[auto] gap-2">
          <li className="box-border caret-transparent min-h-0 min-w-0 text-left md:min-h-[auto] md:min-w-[auto]">
            <div className="box-border caret-transparent h-full">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(e as any, 'services');
                }}
                type="button"
                className="relative text-blue-700 bg-transparent box-border caret-transparent block basis-[0%] grow m-1 p-2.5 cursor-pointer pointer-events-auto touch-manipulation active:bg-stone-100 rounded w-full text-left"
              >
                <div className="items-center box-border caret-transparent flex h-full justify-start md:justify-center">
                  <span className="text-stone-700 text-base box-border caret-transparent block min-h-0 min-w-0 text-nowrap font-helvetica_w01_roman md:min-h-[auto] md:min-w-[auto]">
                    Services
                  </span>
                </div>
              </button>
            </div>
          </li>
          <li className="box-border caret-transparent min-h-0 min-w-0 text-left md:min-h-[auto] md:min-w-[auto]">
            <div className="box-border caret-transparent h-full">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(e as any, 'about');
                }}
                type="button"
                className="relative text-blue-700 bg-transparent box-border caret-transparent block basis-[0%] grow m-1 p-2.5 cursor-pointer pointer-events-auto touch-manipulation active:bg-stone-100 rounded w-full text-left"
              >
                <div className="items-center box-border caret-transparent flex h-full justify-start md:justify-center">
                  <span className="text-stone-700 text-base box-border caret-transparent block min-h-0 min-w-0 text-nowrap font-helvetica_w01_roman md:min-h-[auto] md:min-w-[auto]">
                    About
                  </span>
                </div>
              </button>
            </div>
          </li>
          <li className="box-border caret-transparent min-h-0 min-w-0 text-left md:min-h-[auto] md:min-w-[auto]">
            <div className="box-border caret-transparent h-full">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(e as any, 'faq');
                }}
                type="button"
                className="relative text-blue-700 bg-transparent box-border caret-transparent block basis-[0%] grow m-1 p-2.5 cursor-pointer pointer-events-auto touch-manipulation active:bg-stone-100 rounded w-full text-left"
              >
                <div className="items-center box-border caret-transparent flex h-full justify-start md:justify-center">
                  <span className="text-stone-700 text-base box-border caret-transparent block min-h-0 min-w-0 text-nowrap font-helvetica_w01_roman md:min-h-[auto] md:min-w-[auto]">
                    FAQ
                  </span>
                </div>
              </button>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

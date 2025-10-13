export type TestimonialNavigationProps = {
  variant: string;
  ariaLabel: string;
  iconSrc: string;
};

export const TestimonialNavigation = (props: TestimonialNavigationProps) => {
  return (
    <div
      className={`relative self-end box-border caret-transparent grid col-end-2 col-start-1 row-end-2 row-start-1 grid-cols-[minmax(0px,1fr)] grid-rows-[1fr] h-[42px] w-[69.5781px] mt-[0%] md:mb-[0%] ${props.variant}`}
    >
      <button
        type="button"
        aria-label={props.ariaLabel}
        className="text-[13.3333px] bg-white/30 shadow-[rgba(19,25,70,0)_1.5px_3.71px_9px_0px] caret-transparent block h-full min-h-2.5 min-w-2.5 text-center w-full p-0 rounded-[999px] font-arial hover:bg-white hover:shadow-[rgba(19,25,70,0)_1.5px_3px_9px_0px] hover:rounded-[100px]"
      >
        <span className="items-center caret-transparent flex grow h-full justify-center w-full overflow-hidden">
          <span className="caret-transparent block shrink-0 h-6 min-w-px w-6 scale-x-[-1px] scale-y-[-1px]">
            <span className="caret-transparent flex h-6 w-6">
              <img
                src={props.iconSrc}
                alt="Icon"
                className="caret-transparent flex h-6 w-6"
              />
            </span>
          </span>
        </span>
      </button>
    </div>
  );
};

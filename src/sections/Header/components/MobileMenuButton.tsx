interface MobileMenuButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

export const MobileMenuButton = ({ onClick, isOpen }: MobileMenuButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="relative text-[13.3333px] self-center bg-transparent caret-transparent block col-end-2 col-start-1 row-end-2 row-start-1 h-[23.3438px] justify-self-end min-h-[auto] min-w-[auto] text-center w-[31.1094px] m-[0%] p-0 font-arial md:hidden md:h-[30px] md:justify-self-start md:min-h-0 md:min-w-0 md:w-[30px] z-50 pointer-events-auto cursor-pointer"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <div className="absolute caret-transparent fill-stone-700 stroke-blue-400 stroke-0 inset-0">
        <img
          src="https://c.animaapp.com/mfzgti4gECrRkJ/assets/icon-3.svg"
          alt="Icon"
          className="absolute caret-transparent h-full w-full m-auto inset-0"
        />
      </div>
    </button>
  );
};

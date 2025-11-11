import { useState } from 'react';
import { MobileMenuButton } from "@/sections/Header/components/MobileMenuButton";
import { Logo } from "@/components/Logo";
import { DesktopNavigation } from "@/sections/Header/components/DesktopNavigation";
import { NavMenu } from "@/sections/Header/components/NavMenu";

export const HeaderContent = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="relative box-border caret-transparent grid grid-cols-[minmax(0px,1fr)] grid-rows-[minmax(65px,auto)] px-[8%] py-[5%] md:grid-rows-[minmax(95.2604px,auto)] md:px-[60px] md:py-10 pointer-events-auto">
        <div
          role=""
          className="relative self-stretch caret-transparent flex flex-col col-end-2 col-start-1 row-end-2 row-start-1 justify-self-stretch"
        >
          <div className="absolute bg-white caret-transparent rounded-[496.032px] inset-0 md:rounded-[1012.45px] pointer-events-none shadow-md transition-shadow duration-300 hover:shadow-lg"></div>
          <div className="relative box-border caret-transparent grid grow grid-cols-[minmax(0px,1fr)] grid-rows-[minmax(max-content,100%)] px-10 py-[0%]">
            <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} isOpen={isMobileMenuOpen} />
            <Logo />
            <DesktopNavigation />
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-white pointer-events-auto overflow-y-auto"
          style={{ zIndex: 9999 }}
        >
          <div className="relative p-8 flex flex-col space-y-6 bg-white min-h-screen">
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative p-2 text-stone-700 hover:text-stone-900 transition-colors pointer-events-auto touch-manipulation active:bg-stone-100 rounded"
                aria-label="Close menu"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="relative">
              <NavMenu onItemClick={() => setIsMobileMenuOpen(false)} />
            </div>
            <div className="relative flex flex-col space-y-4 pt-6 border-t border-stone-200">
              <a
                href="https://app.digitalcabinet.co.za/forms/index.php?tid=16001"
                aria-label="Register"
                target="_blank"
                rel="noopener noreferrer"
                className="shadow-[rgba(0,0,0,0)_0.71px_0.71px_2px_0px] box-border caret-transparent block h-12 min-h-2.5 min-w-2.5 w-full border-stone-700 rounded-[250px] border-2 border-solid hover:bg-stone-400/30 active:bg-stone-400/50"
              >
                <span className="items-center caret-transparent flex h-full justify-center w-full">
                  <span className="text-stone-700 text-base caret-transparent block text-center font-helvetica_w01_roman">
                    Register
                  </span>
                </span>
              </a>
              <a
                href="https://app.digitalcabinet.co.za/forms/index.php?tid=16002"
                aria-label="Book Consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-stone-700 shadow-[rgba(0,0,0,0)_0.71px_0.71px_2px_0px] box-border caret-transparent block h-12 min-h-2.5 min-w-2.5 w-full border-stone-700 rounded-[250px] border-2 border-solid hover:bg-stone-700/80 active:bg-stone-700/60"
              >
                <span className="items-center caret-transparent flex h-full justify-center w-full">
                  <span className="text-white text-base caret-transparent block text-center font-helvetica_w01_roman">
                    Book Consultation
                  </span>
                </span>
              </a>
              <a
                href="https://plasticsurgery.digitalcabinet.co.za"
                aria-label="Plastic Reconstructive & Aesthetic Surgery"
                target="_blank"
                rel="noopener noreferrer"
                className="shadow-[rgba(0,0,0,0)_0.71px_0.71px_2px_0px] box-border caret-transparent block h-12 min-h-2.5 min-w-2.5 w-full border-stone-700 rounded-[250px] border-2 border-solid hover:bg-stone-400/30 active:bg-stone-400/50"
              >
                <span className="items-center caret-transparent flex h-full justify-center w-full px-4">
                  <span className="text-stone-700 text-base caret-transparent block text-center font-helvetica_w01_roman">
                    Plastic Reconstructive & Aesthetic Surgery
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

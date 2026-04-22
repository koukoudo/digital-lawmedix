export const ComingSoon = () => {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-neutral-100 flex flex-col">
      <header className="relative z-10 flex justify-center pt-6 md:pt-10 px-6 animate-fade-in">
        <img
          src="/assets/images/DigitalLawMedix_Logo_HighRes_TransparentBackground.png"
          alt="Digital LawMedix"
          className="h-16 md:h-24 w-auto object-contain"
        />
      </header>

      <section className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center min-h-0">
        <div className="w-full max-w-3xl flex items-center justify-center mb-4 md:mb-8 animate-fade-in">
          <img
            src="https://c.animaapp.com/mfzgti4gECrRkJ/assets/637169_a3d85481c01d480796a335630416d369~mv2.png"
            alt="Medicolegal Reporting Solutions | Pretoria, South Africa"
            className="max-h-[35vh] md:max-h-[45vh] w-auto object-contain"
          />
        </div>

        <h1 className="text-stone-700 text-xl md:text-3xl font-bold font-helvetica_w01_bold leading-snug max-w-3xl animate-slide-up px-4">
          Currently undergoing reconstructive surgery, we'll be back soon.
        </h1>
      </section>

      <footer className="relative z-10 px-6 pb-4 md:pb-6 text-center animate-fade-in">
        <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-6 text-stone-600 text-xs md:text-sm font-helvetica_w01_roman">
          <a
            href="tel:+27125497229"
            className="hover:text-stone-800 transition-colors"
          >
            +27 12 549 7229
          </a>
          <span className="hidden md:inline text-stone-400">|</span>
          <a
            href="mailto:info@digitallawmedix.co.za"
            className="hover:text-stone-800 transition-colors underline"
          >
            info@digitallawmedix.co.za
          </a>
        </div>
        <p className="mt-2 text-stone-400 text-[10px] md:text-xs font-helvetica_w01_roman">
          &copy; {new Date().getFullYear()} Digital LawMedix. All rights reserved.
        </p>
      </footer>
    </main>
  );
};

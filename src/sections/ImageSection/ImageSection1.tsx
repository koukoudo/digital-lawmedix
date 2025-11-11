import { useEffect, useRef, useState } from 'react';

export const ImageSection1 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative self-stretch bg-transparent caret-transparent flex flex-col col-end-2 col-start-1 row-end-[15] row-start-[14] justify-self-stretch max-h-[99999px] max-w-[99999px] md:row-end-[16] md:row-start-[15]"
    >
      <div className="absolute caret-transparent h-full [mask-repeat:no-repeat] [mask-size:100%] w-full overflow-hidden left-0 top-0">
        <div className="absolute bg-neutral-100 caret-transparent h-full w-full top-0"></div>
        <div className="caret-transparent h-full"></div>
      </div>
      <div className="relative box-border caret-transparent grid grow grid-cols-[minmax(0px,1fr)] grid-rows-[minmax(147.825px,auto)] ml-[clamp(0px,50%_-_800px,375px)] max-w-[1600px] p-[8%] md:grid-rows-[minmax(504.575px,auto)] md:ml-[clamp(0px,50%_-_800px,1280px)]">
        <div
          role=""
          className="relative self-stretch box-border caret-transparent grid col-end-2 col-start-1 row-end-2 row-start-1 grid-cols-[minmax(0px,1fr)] grid-rows-[1fr] justify-self-stretch"
        >
          <div className="absolute bg-transparent caret-transparent rounded-[14.8456px] inset-0 md:rounded-[50.673px]"></div>
          <div className="relative self-stretch caret-transparent col-end-2 col-start-1 row-end-2 row-start-1 justify-self-stretch overflow-hidden">
            <div className={`absolute box-border caret-transparent overflow-hidden rounded-[50px] inset-0 transition-all duration-1000 ease-out ${
              isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
            }`}>
              <div className="caret-transparent h-full w-full">
                <div className="caret-transparent">
                  <div className="absolute caret-transparent block h-full w-full overflow-clip inset-0">
                    <picture className="caret-transparent">
                      <img
                        src="https://c.animaapp.com/mfzgti4gECrRkJ/assets/11062b_bf31591db9854e46abe504cc40632339~mv2.jpg"
                        alt="Medical Record Review | Medicolegal Services | Pretoria, South Africa"
                        className="caret-transparent h-full [mask-repeat:no-repeat] [mask-size:100%_100%] object-cover object-[34%_31%] w-full"
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

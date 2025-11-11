import { TestimonialContent } from "@/sections/TestimonialsSection/components/TestimonialContent";
import { TestimonialAuthor } from "@/sections/TestimonialsSection/components/TestimonialAuthor";

export const TestimonialCard = () => {
  return (
    <div
      role=""
      className="relative self-start box-border caret-transparent gap-x-0 grid col-end-2 col-start-1 row-end-2 row-start-1 grid-cols-[minmax(0px,301.5fr)] grid-rows-[minmax(112.061px,auto)] justify-self-center max-h-[99999px] max-w-[99999px] gap-y-0 w-[99.9999%] mt-[153.665px] p-[17.7861px] md:self-center md:grid-cols-[minmax(0px,777.76fr)] md:grid-rows-[minmax(382.503px,auto)] md:w-[84.5075%] md:mt-0 md:p-[60.7114px] transition-all duration-500"
    >
      <div className="absolute bg-white/70 backdrop-blur-sm border border-zinc-200/50 caret-transparent rounded-[14.8221px] inset-0 md:rounded-[50.5929px] shadow-md transition-all duration-300"></div>
      <TestimonialContent />
      <TestimonialAuthor />
    </div>
  );
};

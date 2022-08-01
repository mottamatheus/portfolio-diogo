import { memo, ReactNode } from "react";
import SwiperCore, { A11y, Autoplay, Pagination } from "swiper";
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Pagination, Autoplay, A11y]);

type SliderProps = {
  children: ReactNode;
};

const Slider = memo(({ children }: SliderProps) => (
  <Swiper
    a11y={{ prevSlideMessage: "Anterior", nextSlideMessage: "Próximo" }}
    pagination
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }}
    modules={[Pagination]}
    className="w-full h-[500px] md:w-[900px] md:h-[650px] text-center justify-center items-center"
  >
    {children}
  </Swiper>
));

export { Slider };
export type { SliderProps };

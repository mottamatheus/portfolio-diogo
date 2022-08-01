import { memo, ReactNode } from "react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Pagination, Autoplay]);

type SliderFrotaProps = {
  children: ReactNode;
};

const SliderFrota = memo(({ children }: SliderFrotaProps) => (
  <Swiper
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

export { SliderFrota };
export type { SliderFrotaProps };

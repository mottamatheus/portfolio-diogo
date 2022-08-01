import type { StaticImageData } from "next/image";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import SliderFrota from "./slider-frota";

type Props = {
  data: {
    id: number;
    image: StaticImageData;
  }[];
};

function DataSlider({ data }: Props) {
  return (
    <SliderFrota>
      {data.map(({ id, image }) => (
        <SwiperSlide key={id}>
          <div className="flex flex-col justify-center items-center mt-12">
            <Image src={image} alt="image" />
          </div>
        </SwiperSlide>
      ))}
    </SliderFrota>
  );
}

export { DataSlider };
export type { Props as SliderProps };

import type { StaticImageData } from "next/image";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { Slider } from ".";

type Props = {
  data: {
    id: number;
    image: StaticImageData;
  }[];
};

function DataSlider({ data }: Props) {
  return (
    <Slider>
      {data.map(({ id, image }) => (
        <SwiperSlide key={id}>
          <div className="flex flex-col justify-center items-center mt-12">
            <Image src={image} alt="image" />
          </div>
        </SwiperSlide>
      ))}
    </Slider>
  );
}

export { DataSlider };
export type { Props as SliderProps };

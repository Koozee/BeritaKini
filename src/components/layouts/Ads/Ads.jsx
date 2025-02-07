import React from "react";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Ads = () => {
  return (
    <section className="mt-10 p-7 lg:p-20">
      <div className="container mx-auto">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          loop
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="mx-auto" src="/img/bannerADS.png" alt="ads" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="mx-auto" src="/img/bannerADS.png" alt="ads" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="mx-auto" src="/img/bannerADS.png" alt="ads" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Ads;

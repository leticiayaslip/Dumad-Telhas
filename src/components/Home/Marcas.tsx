"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Marcas } from "../Marcas/principaisMarcas";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { RiToolsFill } from "react-icons/ri";

function MarcasSection() {
  return (
    <div className="bg-marcas">
      <div className="titulo-marcas">
        <p className="primeiro">Principais Marcas</p>
        <p>
          Trabalhamos com fabricantes reconhecidos nacionalmente pela qualidade,
          durabilidade e inovação, garantindo segurança e confiança em cada
          projeto.
        </p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        freeMode={true}
        slidesPerView={4}
        spaceBetween={10}
        speed={7000} // quanto maior, mais lento e suave
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="conteiner-logos"
      >
        <SwiperSlide>
          <Marcas image="/marcas/1.webp" alt="logo" />
        </SwiperSlide>

        <SwiperSlide>
          <Marcas image="/marcas/2.webp" alt="logo" />
        </SwiperSlide>

        <SwiperSlide>
          <Marcas image="/marcas/3.webp" alt="logo" />
        </SwiperSlide>

        <SwiperSlide>
          <Marcas image="/marcas/4.webp" alt="logo" />
        </SwiperSlide>

        <SwiperSlide>
          <Marcas image="/marcas/5.webp" alt="logo" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MarcasSection;

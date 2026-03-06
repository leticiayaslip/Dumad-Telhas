"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="banner">
      <div className="slide-item banner-1">
        <video className="video-bg" autoPlay muted loop>
          <source src="/banner/banner-video.mp4" type="video/mp4" />
        </video>
        <div className="texto">
          <h1>Dumad Telhas - Tudo à pronta entrega!</h1>
          <p>
            Os melhores preços e a maior variedade de telhas e madeiras para sua
            obra.
          </p>
          <div className="botao">
            <Link href="/contato">Solicite um Orçamento !</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

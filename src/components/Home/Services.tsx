"use client";

import Image from "next/image";
import Link from "next/link";
import { PiSolarRoofFill } from "react-icons/pi";

export default function Services() {
  return (
    <>
      <div className="services">
        <div className="base">
          <div className="title">
            <p>
              <PiSolarRoofFill />
              Produtos
            </p>
            <h5>Nossos Principais Produtos</h5>
          </div>
          <div className="conteiner">
            <div className="service-item">
              <Image
                src="/index/madeira.webp"
                alt={"madeira"}
                width={500}
                height={500}
              />
              <Link href={"/produtos"}>Saiba mais !</Link>
            </div>
            <div className="service-item">
              <Image
                src="/index/telha.webp"
                alt={"imagem"}
                width={500}
                height={500}
              />
              <Link href={"/produtos"}>Saiba mais !</Link>
            </div>
            <div className="service-item">
              <Image
                src="/index/forros.webp"
                alt={"imagem"}
                width={500}
                height={500}
              />
              <Link href={"/produtos"}>Saiba mais !</Link>
            </div>
            <div className="service-item">
              <Image
                src="/index/porta-janela.webp"
                alt={"imagem"}
                width={500}
                height={500}
              />
              <Link href={"/produtos"}>Saiba mais !</Link>
            </div>
            <div className="service-item">
              <Image
                src="/index/caixa-d-agua.webp"
                alt={"imagem"}
                width={500}
                height={500}
              />
              <Link href={"/produtos"}>Saiba mais !</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

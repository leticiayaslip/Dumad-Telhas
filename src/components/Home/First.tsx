"use client";

import Image from "next/image";

export default function First() {
  return (
    <>
      <div className="first">
        <Image src="/telha.png" alt={"telhinha"} width={300} height={300} />
        <div className="texto">
          <span>Nossa Essência</span>
          <h2>Soluções confiáveis para sua obra, com qualidade e agilidade.</h2>
        </div>
        <div className="base-row">
          <div className="bolinhas">
            <div className="img-bola">
              <Image
                src="/index/caixinha.webp"
                width={300}
                height={300}
                alt={"bolinha"}
              />
            </div>
            <h3>Entrega Imediata</h3>
            <p>
              Dispomos de grande estoque e realizamos entrega em toda grande São
              Paulo.
            </p>
          </div>
          <div className="bolinhas">
            <div className="img-bola">
              <Image
                src="/index/engrenagem.webp"
                width={300}
                height={300}
                alt={"bolinha"}
              />
            </div>
            <h3>Garantia</h3>
            <p>
              Utilizamos somente matéria prima de primeira qualidade, garantindo
              a entrega dos melhores produtos.
            </p>
          </div>
          <div className="bolinhas">
            <div className="img-bola">
              <Image
                src="/index/selo.webp"
                width={300}
                height={300}
                alt={"bolinha"}
              />
            </div>
            <h3>Exclusividade</h3>
            <p>
              Atendimento exclusivo e personalizado para solucionar a
              necessidade de cada cliente.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

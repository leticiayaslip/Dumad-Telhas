import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

function Second() {
  return (
    <>
      <div className="bg-second">
        <div className="base">
          <div className="imgs">
            <Image src="/index/index-1.webp" alt={""} width={500} height={500} />
          </div>
          <div className="texts">
            <h4>Tudo para sua obra, em um só lugar</h4>
            <p>
              Trabalhamos com o maior estoque de madeiras, telhas, forros e
              linha completa de alumínios, garantindo qualidade, variedade e
              pronta entrega para sua construção ou reforma.
            </p>
            <div className="botao">
              <Link href="/quem-somos">
                Sobre Nos <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Second;

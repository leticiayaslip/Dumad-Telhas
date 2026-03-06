import Image from "next/image";
import "@/styles/quemSomos.scss";
import Link from "next/link";
import { IoMdHome } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { LuHouse } from "react-icons/lu";

function servicos() {
  return (
    <>
      <div className="servicos-base">
        <div className="title">
          <div className="flex">
            <p><LuHouse />Nossos Diferenciais</p>
            <h4>
              Oferecemos os melhores produtos com os melhores preços do mercado,
              além de condições facilitadas para você realizar sua compra.
            </h4>
          </div>
          <div className="flex-2">
            <p>
              Precisa de ajuda para escolher os materiais ideais para sua obra?
              Nossa equipe está pronta para ajudar você a encontrar as melhores
              opções com agilidade e transparência.
            </p>
            <Link href="/contato">
              Solicite seu Orçamento <FaArrowRight />
            </Link>
          </div>
        </div>
        <div className="blocos-base">
          <div className="bloco">
            <Link href="/contato"><FiArrowUpRight /></Link>
            <Image
              src="/quem-somos/caminhao.webp"
              alt={""}
              width={400}
              height={400}
            />
            <div className="texto">
              <IoMdHome />
              <p>
                Contamos com grande estoque à pronta entrega e realizamos
                entregas em toda a Grande São Paulo, garantindo rapidez e
                eficiência no atendimento.
              </p>
            </div>
          </div>
          <div className="bloco">
             <Link href="/contato"><FiArrowUpRight /></Link>
            <Image
              src="/quem-somos/carteirinha.webp"
              alt={""}
              width={400}
              height={400}
            />
            <div className="texto">
              <IoMdHome />
              <p>
                Trabalhamos apenas com matéria-prima de primeira qualidade,
                garantindo produtos duráveis e confiáveis para sua obra.
              </p>
            </div>
          </div>
          <div className="bloco">
             <Link href="/contato"><FiArrowUpRight /></Link>
            <Image
              src="/quem-somos/construcao.webp"
              alt={""}
              width={400}
              height={400}
            />
            <div className="texto">
              <IoMdHome />
              <p>
                Oferecemos atendimento exclusivo, entendendo a necessidade de
                cada cliente para indicar sempre a melhor solução.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default servicos;

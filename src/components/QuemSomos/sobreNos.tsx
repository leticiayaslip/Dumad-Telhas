import Image from "next/image";
import "@/styles/quemSomos.scss";
import { LuHouse } from "react-icons/lu";
import 'aos/dist/aos.css'

function sobreNos() {
  return (
    <>
      <div className="base-sobre">
        <div className="img-direita">
          <div className="etiqueta">
            <p>100% Confiavel</p>
          </div>
          <Image
            src="/quem-somos/quem-somos.webp"
            alt=""
            width={400}
            height={500}
          />
        </div>
        <div className="text-esquerda">
          <div className="titulo">
            <p><LuHouse />Quem Somos</p>
            <h2>
              Após 12 anos de trajetória no mercado, evoluímos para continuar
              oferecendo sempre o melhor aos nossos clientes.
            </h2>
            <h3>
              A antiga Rov Telhas Guarulhos agora passa a se chamar Dumad Telhas
              e Madeiras.
            </h3>
          </div>
          <div className="text">
            <div className="img-text">
              <Image
                src="/quem-somos/sobre.webp"
                alt=""
                width={250}
                height={350}
              />
            </div>
            <div className="bloco-texto">
            <p>
              O nome mudou, mas nosso compromisso continua o mesmo: atendimento
              de qualidade, produtos confiáveis e dedicação total a cada cliente
              que confia em nosso trabalho.
            </p>
            <p>
              Ao longo dos anos, construímos uma relação sólida com nossos
              clientes, baseada em transparência, responsabilidade e confiança.
              Nosso objetivo é oferecer soluções completas para quem está
              construindo, reformando ou ampliando seu projeto.
            </p>
            <p>
              Na Dumad Telhas e Madeiras, você encontra uma linha completa de
              telhas, madeiras e materiais essenciais para construção, sempre
              com produtos de qualidade e preços competitivos.
            </p>
            <p>
              Nosso time está preparado para oferecer orientação, agilidade no
              atendimento e as melhores opções para sua obra.
            </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default sobreNos;

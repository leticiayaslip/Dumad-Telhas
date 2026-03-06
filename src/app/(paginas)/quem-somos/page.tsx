import SobreNos from "@/components/QuemSomos/sobreNos";
import Servicos from "@/components/Servicos/servicos";
import TitlePage from "@/components/TitlePage/TitlePage";

const title = "Sobre Nós";
export const metadata = {
  title: "Quem Somos | Dumad Telhas e Madeiras",
  description:
    "Conheça a história da Dumad Telhas e Madeiras em Guarulhos. Mais de 12 anos oferecendo telhas, madeiras e materiais de construção com qualidade e confiança.",
  keywords: [
    "dumad telhas",
    "telhas guarulhos",
    "madeiras guarulhos",
    "materiais de construção guarulhos",
  ],
  alternates: {
    canonical: "https://www.dumadtelhas.com.br/quem-somos",
  },
};

function quemSomos() {
  return (
    <>
      <TitlePage title={title} />
      <SobreNos />
      <Servicos />
    </>
  );
}

export default quemSomos;

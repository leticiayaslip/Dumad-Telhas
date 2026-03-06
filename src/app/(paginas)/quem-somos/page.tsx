import SobreNos from "@/components/QuemSomos/sobreNos";
import Servicos from "@/components/Servicos/servicos";
import TitlePage from "@/components/TitlePage/TitlePage";

const title = "Sobre Nós";
const description = "";
const keywords = "";
const canonical = "";

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

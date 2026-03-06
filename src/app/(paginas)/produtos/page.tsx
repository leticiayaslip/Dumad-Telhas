import TitlePage from "@/components/TitlePage/TitlePage";
import { ProdutoCard } from "@/components/Produtos/produtoCards";
import "@/styles/produtos.scss";
import Link from "next/link";

const title = "Nossos Produtos";

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

function Produtos() {
  return (
    <>
      <TitlePage title={title} />
      <div className="base-produtos">
        <ul className="abas">
          <li>
            <Link href="#telhas">Telhas</Link>
          </li>
          <li>
            <Link href="#madeiras">Madeiras</Link>
          </li>
          <li>
            <Link href="#portas-janelas">Portas e Janelas</Link>
          </li>
          <li>
            <Link href="#forros-paineis">Forros e Paineis</Link>
          </li>
          <li>
           <Link href="#caixa-agua">Caixa D&apos; Água</Link>
          </li>
        </ul>

        <div className="conteiner-produtos">
          <div className="base">
            <h2 id="telhas">Telhas</h2>
            <ProdutoCard
              image="/produtos/telhas/telha-fibrocimento-02.webp"
              title="Madeira"
              text="Fácil manuseio e instalação. Leveza do material, que não requer estrutura reforçada. Baixo custo do produto e maior economia na obra (transporte e instalação)."
              alt="Telha Fibrocimento"
              link="/contato"
            />
            <ProdutoCard
              image="/produtos/telhas/telha-pvc-12.webp"
              title="Telhas de PVC"
              text="As queridinhas no momento são as telhas coloniais de PVC. São encontradas nas cores cerâmica, marfim e outras menos comuns como cinza ou transparente. Possui o formato parecido com as telhas coloniais de cerâmica, se tornando muito popular no gosto dos brasileiros"
              alt="Telha Pvc"
              link="/contato"
            />
            <ProdutoCard
              image="/produtos/telhas/telha-ceramica-10.webp"
              title="Telhas de CERAMICA"
              text="A telha de cerâmica, também conhecida como telha de argila, tem como principal característica a resistência ao fogo. Em termos de durabilidade, está entre as mais indicadas, podendo durar muito tempo se não sofrer nenhum tipo de avaria."
              alt="Telha Ceramica"
              link="/contato"
            />
            <ProdutoCard
              image="/produtos/telhas/telha-ecologica-07.webp"
              title="Telhas ECOLÓGICA ONDULINE"
              text="As telhas Onduline têm uma composição diferenciada: uma monocamada de fibras vegetais que são impregnadas de betume, pigmentadas para se obter a cor desejada e em seguida protegidas por uma resina especial."
              alt="Telha Ecologica"
              link="/contato"
            />
            <ProdutoCard
              image="/produtos/telhas/telha-concreto-06.webp"
              title="Telhas de CONCRETO"
              text="As telhas de concreto são mais resistentes durante o transporte, a carga e descarga e armazenamento no canteiro de obras, reduzindo a perda por quebra. 
              Desempenho Térmico: Estudos mostram que as telhas de concreto de cores claras, apresentam temperatura interna menor que a telha cerâmica (vermelha)."
              alt="Telha Ecologica"
              link="/contato"
            />
            <ProdutoCard
              image="/produtos/telhas/telha-translucida-04.webp"
              title="Telhas TRANSLUCIDA"
              text="A telha translúcida é resistente ao calor e à passagem de raios ultravioleta, bem como de partículas que poderiam danificar o telhado (granizo proveniente de chuvas, por exemplo). Isso significa que dificilmente apresentará danos que demandem algum reparo ou, até mesmo, a troca do produto."
              alt="Telha Translucida"
              link="/contato"
            />
          </div>
          <div className="base">
            <h2 id="madeiras">Madeiras</h2>
            <ProdutoCard
              image="/produtos/madeiras/madeira-caibro-01.webp"
              title="Madeira CAIBRO E RIPAS"
              text="A ripa é a madeira onde a telha ou a palha se apoia. O caibro está localizado perpendicularmente a ripa e é a peça que apoia a ripa. Os caibros servem para dar apoio as ripas."
              alt="Madeira"
              link="/contato"
            />
            <ProdutoCard
              image="/produtos/madeiras/vigas-01.webp"
              title="Madeira VIGAS"
              text="Viga de madeira serve para construir casas, empresas e sustentam os tetos para telhados. A viga de madeira exposta também pode ser usada em ambientes fechados, como casas e empresas. Com relação estética, o uso da madeira é escolhido porque é um material nobre e valoriza o ambiente."
              alt="Madeira"
              link="/contato"
            />
            <ProdutoCard
              image="/produtos/madeiras/tabuado-02.webp"
              title="Madeira TABUADO"
              text="As Tábuas de madeira são utilizadas em formas de concreto na construção civil, e também pode ser utilizada para pisos de madeira. Tábuas de madeira podem ser brutas ou aparelhadas, possuem diversas larguras, entre elas 0,20cm à 0,30cm."
              alt="Madeira"
              link="/contato"
            />
            <ProdutoCard
              image="/produtos/madeiras/madeirite-01.webp"
              title="Madeira MADEIRITE"
              text="Madeirite, ou compensado, é uma placa feita com lâminas de madeira modificada sobrepostas em número ímpar. É utilizado em fôrmas para laje, vigas, pilares ou vedação provisória em obras."
              alt="Madeira"
              link="/contato"
            />
            <ProdutoCard
              image="/produtos/madeiras/tapumes-01.webp"
              title="Madeira TAPUMES"
              text="É um item de obra, necessário para que a construção não fique aparente e nem com acesso a qualquer pessoa. É mais usado em projetos nos centros das cidades, onde há muita circulação de pessoas. Mas pode ser requisitado em qualquer momento de uma obra, esteja onde estiver."
              alt="Madeira"
              link="/contato"
            />
          </div>
          <div className="base">
            <h2 id="portas-janelas">Portas e Janelas</h2>
            <ProdutoCard
              image="/produtos/portas-janelas/porta-03.webp"
              title="Madeira e Alumínio PORTAS"
              text="As portas são elementos fundamentais de um projeto arquitetônico. Elas fornecem privacidade e segurança, ventilam e iluminam o ambiente, e permitem a passagem entre cômodos."
              alt="Portas"
              link="/contato"
            />
            <ProdutoCard
              image="/produtos/portas-janelas/janela-02.webp"
              title="Madeira e Alumínio JANELAS"
              text="Mais do que contribuir com a fachada do lar, as janelas têm a função de garantir que o interior fique bem iluminado e acolhedor, garantindo ótimo arejamento e até mesmo contribuindo para a escolha de quem ama cultivar plantas"
              alt="Janelas"
              link="/contato"
            />
          </div>
          <div className="base">
            <h2 id="forros-paineis">Forros e Paineis</h2>
            <ProdutoCard
              image="/produtos/portas-janelas/porta-03.webp"
              title="Madeira FORROS"
              text="O forro de madeira apresenta várias vantagens e oferece inúmeras possibilidades estéticas na decoração de um ambiente. 
              Os forros de madeira mais comuns encontrados no mercado brasileiro são do tipo Pinus, Cedrinho, Perobinha, Cumaru, Jatobá e Ipê. Essas madeiras são as mais indicadas pela sua densidade e fácil secagem, já que não retêm muita umidade."
              alt="Forros"
              link="/contato"
            />
            <ProdutoCard
              image="/produtos/portas-janelas/janela-02.webp"
              title="PVC PAINÉIS EM PVC"
              text="Os Painéis de PVC devem ser fixados a uma estrutura composta por perfis de metal nivelados. A fixação pode ser feita por parafusos. Suas lâminas são do tipo macho-fêmea, encaixando-se umas nas outras, tornando o processo de montagem fácil, prático e de rápida execução."
              alt="Painéis"
              link="/contato"
            />
          </div>
          <div className="base">
            <h2 id="caixa-agua">Caixa D&apos; Água</h2>
            <ProdutoCard
              image="/produtos/caixa-01.webp"
              title="CAIXA D' ÁGUA"
              text="Nossa Caixa d’Água tem fechamento total e seguro. A tampa se encaixa perfeitamente e evita a entrada de insetos e outras impurezas. É fabricada em material atóxico, não contamina a água. Sua superfície lisa evita incrustações, muito mais fácil de limpar"
              alt="Painéis"
              link="/contato"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Produtos;

import { SiteSettings } from "@/types";

const siteName = "Dumad Telhas";
const title = `Início | ${siteName}`;
const description = "Telhas e madeiras com pronta entrega em Guarulhos. Grande variedade, melhores preços e entrega rápida para toda Grande São Paulo.";
const keywords = "telhas em guarulhos, madeiras para construção, telhas fibrocimento, madeireira em guarulhos, materiais de construção guarulhos, forro pvc, portas e janelas de alumínio, telhas e madeiras entrega são paulo";
export const url = "https://dumadtelhas.com.br/";

// True = Ativo || False = Inativo - Para ativar ou desativar os "includes" das páginas contratadas
export const includes = {
  SaibaMais: true,
  OutrosAssuntos: true,
  MaisVisitados: true,
  TagsPagina: true,
  Copyright: true,
};

export const settings: SiteSettings = {
  title, // Título da página - Obs: Esse titulo é o padrão, cada página deve conter um Metadata
  description, // Descrição da página - Obs: Essa descrição é padrão, cada página deve conter um Metadata
  siteName,
  keywords, // Palavras-chave para SEO index
  canonical: url,
  ddd: "11",
  selosDark: false, // Selos Rodapé - True = Preto ||  False = Branco
  numeroTelefone: "2401-8848",
  whatsappApi: "https://api.whatsapp.com/send?phone=5511976869380",
  numeroWhatsapp: "97686-9380",
  email: "contato@dumadtelhas.com.br",
  emailDestinatario: "contato@dumadtelhas.com.br",
  endereco: {
    urlMaps: "https://maps.app.goo.gl/sG7JazykcSWPw7Fn6",
    rua: "Av. Silvestre Pires de Freitas",
    numero: "351",
    bairro:"Jardim Paraiso",
    cidade: "Guarulhos",
    estado: "SP",
    cep: "07144-000",
    mapaEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29289.09505698801!2d-46.49875!3d-23.419422!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce8ad895c427f7%3A0x5b10eefe19cfd7ab!2sAv.%20Silvestre%20Pires%20de%20Freitas%2C%20351%20-%20Jardim%20Paraiso%2C%20Guarulhos%20-%20SP%2C%2007144-000!5e0!3m2!1spt-BR!2sbr!4v1771957388074!5m2!1spt-BR!2sbr",
  },
  openGraph: {
    url,
    title,
    description,
    images: [
      {
        url: "/logo.webp",
        width: 300,
        height: 200,
        alt: "Imagem representativa do Site",
      },
    ],
    siteName,
    locale: "pt_BR", // Definindo a localidade do Open Graph
    region: "Brasil", // Definindo a região
  },
  robots: "index, follow",
};

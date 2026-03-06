import Image from "next/image";
import Link from "next/link";
import { IoLogoWhatsapp } from "react-icons/io5";

interface ProdutosProps {
  text: string;
  title: string;
  image: string;
  alt: string;
  link: string;
}

export const ProdutoCard = ({ text, image, alt, title, link }: ProdutosProps) => {
  return (
    <>
      <div className="card-produto row-reverse">
        <div className="esquerda">
          <Image src={image} alt={alt} width={400} height={400} />
        </div>
        <div className="direita">
          <h3>{title}</h3>
          <p>{text}</p>
          <Link href={link}><IoLogoWhatsapp />Saiba Mais Sobre</Link>
        </div>
      </div>
    </>
  );
};

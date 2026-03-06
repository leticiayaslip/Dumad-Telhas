import Image from "next/image";

interface MarcasProps {
  image: string;
  alt: string;
}

export const Marcas = ({ image, alt }: MarcasProps) => {
  return (
    <div className="imgs-marcas">
      <Image src={image} alt={alt} width={300} height={300} />
    </div>
  );
};

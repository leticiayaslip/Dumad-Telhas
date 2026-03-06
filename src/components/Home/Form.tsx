"use client";

import ContactForm from "../ContactForm/ContactForm";
import "../../styles/index.scss";
import { FaMapMarkedAlt, FaPhone, FaPhoneAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { settings } from "@/settings/settings";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";


const { numeroTelefone, ddd, email } = settings;
const { rua, numero, cidade, bairro, estado, cep, urlMaps, mapaEmbed } = settings.endereco;

export default function Form() {
  const pathname = usePathname();

  if (pathname === "/contato") return null; // Caso seja página de contato, não exibe o formulário

  return (
    <div className="included-form">
      <div className="base">
        <div className="box-details">
          <div  className="box-title"  >
            <p className="title">Fale Conosco</p>
            <p className="description">
              Estamos prontos para tirar suas dúvidas e preparar um orçamento
              personalizado para você.
            </p>
          </div>
          <div className="contact">
            <div className="base-contato">
            <FaPhoneAlt /> 
            <Link
              href={`tel:0${ddd}${numeroTelefone}`}
              target="_blank"
              rel="noreferrer"
            >{`(${ddd}) ${numeroTelefone}`}</Link>
            </div>
            <div className="base-contato">
            <IoIosMail />
            <Link href={`mailto:${email}`} target="_blank" rel="noreferrer"> {`${email}`}</Link>
            </div>
            <div className="base-contato">
            <FaLocationDot />
            <Link href={urlMaps} target="_blank" rel="noreferrer">{`${rua}, ${numero} - ${bairro}, ${cidade} - ${estado}, ${cep}`} </Link>
            </div>
            <div className="mapsIndex">
              <iframe
                src={mapaEmbed}
                width="500"
                height="400"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        <ContactForm variation="contatoFormIncluded" />
      </div>
    </div>
  );
}

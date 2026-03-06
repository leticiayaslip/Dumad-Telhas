"use client";

import Image from "next/image";
import Link from "next/link";
import "@/partials/Rodape/rodape.scss";
import ScrollToTop from "@/components/ScrollToTop";
import { url, settings } from "@/settings/settings";
import { usePathname } from "next/navigation";
import { FaMapMarkedAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Rodape() {
  const {
    siteName,
    selosDark,
    numeroTelefone,
    ddd,
    email,
    whatsappApi,
    numeroWhatsapp,
  } = settings;
  const { rua, numero, cidade, estado, cep, urlMaps } = settings.endereco;
  const year = new Date().getFullYear();
  const pathname = usePathname();
  const urlFormatted = url.replace(/\/$/, "");
  const fullUrl = `${urlFormatted}${pathname}`;

  return (
    <footer>
      <div className="info-logo">
        <Link className="logoFooter" href={`/`}>
          <Image src="/logo-branca.webp" width={250} height={80} alt="" />
        </Link>
        <div className="telefone">
          <FaPhoneAlt />
           <Link
                href={`tel:0${ddd}${numeroTelefone}`}
              >{`(${ddd}) ${numeroTelefone}`}</Link>
        </div>
        <div className="footerSelos">
          <div className="logoYaslip">
            <object
              data={`/selos/${
                selosDark ? "selo-preto.svg" : "selo-branco.svg"
              }`}
              type="image/svg+xml"
            ></object>
          </div>
          <ul>
            <li>
              <Link
                href={`http://validator.w3.org/check?uri=${fullUrl}`}
                target="_blank"
              >
                <Image
                  alt="W3C HTML Validator"
                  src={`/selos/${
                    selosDark ? "w3c-html-preto.webp" : "w3c-html.webp"
                  }`}
                  width={40}
                  height={60}
                />
              </Link>
            </li>
            <li>
              <Link
                href={`http://jigsaw.w3.org/css-validator/validator?uri=${fullUrl}`}
                target="_blank"
              >
                <Image
                  alt="W3C CSS Validator"
                  src={`/selos/${
                    selosDark ? "w3c-css-preto.webp" : "w3c-css.webp"
                  }`}
                  width={40}
                  height={60}
                />
              </Link>
            </li>
            <li>
              <Link
                href={`https://developers.google.com/speed/pagespeed/insights/?url=${fullUrl}`}
                target="_blank"
              >
                <Image
                  alt="Google PageSpeed"
                  src={`/selos/${
                    selosDark ? "pagespeed-preto.webp" : "pagespeed.webp"
                  }`}
                  width={40}
                  height={60}
                />
              </Link>
            </li>
            <li>
              {typeof window !== "undefined" &&
                window.location.protocol === "https:" && (
                  <Link
                    href={`https://www.sslshopper.com/ssl-checker.html#hostname=${fullUrl}`}
                    target="_blank"
                  >
                    <Image
                      alt="SSL"
                      src={`/selos/${
                        selosDark ? "ssl-preto.webp" : "ssl.webp"
                      }`}
                      width={40}
                      height={60}
                    />
                  </Link>
                )}
            </li>
          </ul>
        </div>
      </div>
      <div className="top">
        <div className="menuFooter">
          <p className="titulo">Menu</p>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
             <li>
              <Link href="/quem-somos">Quem Somos</Link>
            </li>
             <li>
              <Link href="/produtos">Produtos</Link>
            </li>
            <li>
              <Link href="/contato">Contato</Link>
            </li>
            <li>
              <Link href="/informacoes">.</Link>
            </li>
          </ul>
        </div>
        <div className="contactFooter">
          <p className="titulo">Contato</p>
          <ul>
            <li>
              <FaPhoneAlt />
              <Link
                href={`tel:0${ddd}${numeroTelefone}`}
              >{`(${ddd}) ${numeroTelefone}`}</Link>
            </li>
            <li>
              <FaWhatsapp />
              <Link href={`${whatsappApi}`}>{` ${numeroWhatsapp}`}</Link>
            </li>
            <li>
             <MdEmail />
              <Link href={`mailto:${email}`}>{`${email}`}</Link>
            </li>
          </ul>
        </div>
        <div className="enderecoFooter">
          <p className="titulo">Endereco</p>
          <p>
            <FaMapMarkedAlt />
            <Link
              href={urlMaps}
              target="_blank"
            >{`${rua}, ${numero} - ${cidade} - ${estado}, ${cep}`}</Link>
          </p>
        </div>
      </div>
      <div className="bottomRowFooter">
        <p>
          Copyright © {year} {siteName}. Todos os direitos reservados{" "}
          <Link href="/mapa-site">.</Link>
        </p>
      </div>
      <div className="whatsapp-btn">
        <a
          target="blank"
          rel="nofollow"
          href={whatsappApi}
          aria-label="Botão Whatsapp"
        >
          <div className="animated infinite zoomIn whatsapp-animate-circulo-pulse"></div>
          <div className="animated infinite pulse whatsapp-btn-bg"></div>
          <div className="animated infinite tada whatsapp-btn-config"></div>
          <span style={{ display: "none" }}>.</span>
        </a>
      </div>
      <ScrollToTop />
    </footer>
  );
}

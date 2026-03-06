import {
  Frank_Ruhl_Libre,
  Josefin_Sans,
  Poppins,
  Open_Sans,
  Oswald,
  Bricolage_Grotesque,
} from "next/font/google";

export const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-josefin",
});

export const frankRuhl = Frank_Ruhl_Libre({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-frank-text",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-open-sans",
});

export const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-oswald",
});

export const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700", "800"],
  variable: "--font-bricolage-grotesque",
});
import Banner from "@/components/Home/Banner";
import Brands from "@/components/Home/Marcas";
import First from "@/components/Home/First";
import Second from "@/components/Home/Second";
import Services from "@/components/Home/Services";
import "@/styles/index.scss";

export default function Home() {
  return (
    <>
      <Banner />
      <First />
      <Second />
      <Services />
      <Brands />
    </>
  );
}

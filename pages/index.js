import About from "@/components/templates/Index/About";
import Menu from "@/components/templates/Index/Menu";
import Offer from "@/components/templates/Index/Offer";
import Reservation from "@/components/templates/Index/reservation";
import Services from "@/components/templates/Index/Services";
import Slider from "@/components/templates/Index/Slider";

function Index({ data }) {
  return (
    <>
      <Slider />
      <About />
      <Services services={data.services} />
      <Offer />
      <Menu menu={data.menu} />
      <Reservation />
    </>
  );
}

export async function getStaticProps() {

  const servicesResponse = await fetch('http://localhost:4000/services');
  const servicesData = await servicesResponse.json();

  const menuResponse = await fetch("http://localhost:4000/menu")
  const menuData = await menuResponse.json()

  console.log(menuData);

  return {
    props: {
      data: {
        services: servicesData,
        menu: menuData,
      }
    }
  }
}

export default Index;
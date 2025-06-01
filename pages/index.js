import About from "@/components/templates/Index/About";
import Services from "@/components/templates/Index/Services";
import Slider from "@/components/templates/Index/Slider";

function Index({ data }) {
  return (
    <>
      <Slider />
      <About />
      <Services services={data.services} />
    </>
  );
}

export async function getStaticProps() {

  const servicesResponse = await fetch('http://localhost:4000/services');
  const servicesData = await servicesResponse.json();

  return {
    props: {
      data: {
        services: servicesData
      }
    }
  }
}

export default Index;
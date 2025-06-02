import ServiceItem from "@/components/modules/ServiceItem/ServiceItem";
import React from "react";

function Services({ services }) {
  return <div class="container-fluid pt-5">
    <div class="container">
      <div class="section-title">
        <h4
          class="text-primary text-uppercase"
          style={{ letterSpacing: "5px" }}
        >
          Our Services
        </h4>
        <h1 class="display-4">Fresh &amp; Organic Beans</h1>
      </div>
      <div class="row">
        {services.map((service) => (
          <ServiceItem
            key={service.id}
            img={service.img}
            icon={service.icon}
            title={service.title}
            desc={service.desc}
          />
        ))}
      </div>
    </div>
  </div>
}

export default Services;

import PageHeader from '@/components/modules/PageHeader/PageHeader';
import ServicesDetails from '@/components/templates/Services/ServicesDetails';
import React from 'react'

export default function index({services}) {
  return (
    <>
      <PageHeader route="About" />
      <ServicesDetails data={services} />
    </>
  );
}

export async function getStaticProps() {

  const servicesResponse = await fetch('http://localhost:4000/services')
  const servicesData = await servicesResponse.json()

  return {
    props: {
      services: servicesData
    }
  }
}
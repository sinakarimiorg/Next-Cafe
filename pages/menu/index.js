import PageHeader from '@/components/modules/PageHeader/PageHeader';
import Pricing from '@/components/templates/Menu/Pricing';
import React from 'react'

export default function Menu({ menu }) {
  return (
    <>
      <PageHeader route="Menu" />
      <Pricing data={menu} />
    </>
  );
}

export async function getStaticProps() {

  const res = await fetch("http://localhost:4000/menu")
  const data = await res.json()

  return {
    props: {
      menu: data
    },
    revalidate: 60 * 60 * 12
  }
}

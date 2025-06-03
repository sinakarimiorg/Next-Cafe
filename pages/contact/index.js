import PageHeader from "@/components/modules/PageHeader/PageHeader";
import ContactDetails from "@/components/templates/Contact/ContactDetails";
import React from "react";

export default function index() {
  return (
    <>
      <PageHeader route="Contact" />
      <ContactDetails />
    </>
  );
}

import PageHeader from "@/components/modules/PageHeader/PageHeader";
import ReservationDetail from "@/components/templates/Reservation/ReservationDetail";
import React from "react";

export default function index() {
  return (
    <>
      <PageHeader route="Reservation" />
      <ReservationDetail />
    </>
  );
}

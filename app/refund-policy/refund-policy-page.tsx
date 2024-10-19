"use client";

import Head from "next/head";

export default function RefundPolicy() {
  return (
    <>
      <Head>
        <title>Refund Policy - The Cape Town Local</title>
      </Head>
      <div className="p-8 md:p-16 bg-white">
        <h2 className="mt-20 ">Refund Policy</h2>
        <p className="pb-2 pt-10">
          Cancellation more than 7 days before the activity -{" "}
          <strong>50% refund</strong>
        </p>
        <p className="pb-2">
          {" "}
          Cancellation more than 48 hours before the activity -{" "}
          <strong>30% refund </strong>
        </p>
        <p className="pb-2">
          {" "}
          Cancellation Less than 24 hours before the activity -{" "}
          <strong>no refund</strong>
        </p>
      </div>
    </>
  );
}

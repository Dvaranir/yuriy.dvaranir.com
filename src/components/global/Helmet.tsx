import React from "react";
import Head from "next/head";

export default function Helmet() {
  return (
    <Head>
      <title>Yuriy Dvaranir</title>
      <meta name="description" content="Main Page" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

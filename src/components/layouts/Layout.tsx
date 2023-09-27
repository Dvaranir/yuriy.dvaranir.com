import React, { ReactNode } from "react";

import Helmet from "@/components/global/Helmet";
import Aside from "@/components/global/Aside";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <main className="flow-container">
      <Helmet />
      <Aside />
      <div className="container">
        <Header />
        {children}
      </div>
      <Footer />
    </main>
  );
}

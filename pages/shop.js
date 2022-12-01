import React from "react";
import Head from "next/head";
import { OrderButton } from "../components/OrderButton";
export default function PreviewPage() {
  return (
    <div className="animate__animated animate__fadeIn">
      <Head>
        <title>Shop - Silvagenitus</title>
        <meta name="description" content="Silvagenitus Boutique Wines" />
        <link rel="icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <main className="md:justify-center justify-start">
        <div className="max-w-screen-md mx-auto mt-16 md:mt-0">
          <div className="md:flex block">
            <div className="md:w-1/2 w-2/3 p-5 flex items-center justify-center">
              <img
                src="bottle.png"
                alt="Syzygium Luehmannii Pet Nat 2022"
                className="rounded-lg self-center animate__animated animate__fadeIn h-[600px]"
              />
            </div>
            <div className="productInfo">
              <h2>Syzygium Luehmannii Pet Nat 2022</h2>
              <h3>$ 30</h3>
              <p>
                A naturally sparkling wine that&rsquo;s unfiltered and kept as
                un-messed with as possible. With no added preservatives, eggs or
                dairy products.
              </p>
              <OrderButton />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

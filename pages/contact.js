import Head from "next/head";
import React, { useState } from "react";
import { ContactButton } from "../components/ContactButton";

export default function Page() {
  const [show, setShow] = useState(false);
  return (
    <div className="animate__animated animate__fadeIn">
      <Head>
        <title>Contact - Silvagenitus</title>
        <meta name="description" content="Silvagenitus Boutique Wines" />
        <link rel="icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <main>
        <div className="bg-[url('/HomeBG.jpg')] bg-cover bg-left w-screen mx-auto h-screen px-4">
          <div className="relative font-body flex flex-col h-screen justify-center items-center">
            <ContactButton />
            <div className="fixed sm:bottom-40 sm:right-20 sm:translate-x-0 bottom-10 right-1/2 translate-x-1/2 animate__animated animate__fadeIn">
              <h2 className="silvagenitus">silvagenitus</h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

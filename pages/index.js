import Head from "next/head";
import React, { useState } from "react";

export default function Page() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Head>
        <title>Silvagenitus</title>
        <meta name="description" content="Silvagenitus bouttique wines" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <div className="bg-[url('/HomeBG.jpg')] bg-cover bg-left w-screen mx-auto h-screen">
          <div className="relative font-body flex flex-col h-screen justify-center items-center">
            <div className="fixed sm:bottom-40 sm:right-20 sm:translate-x-0 bottom-10 right-1/2 translate-x-1/2">
              <h2 className="silvagenitus">silvagenitus</h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

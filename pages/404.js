import Head from "next/head";
import React, { useState } from "react";

export default function Page() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Head>
        <title>About - Silvagenitus</title>
        <meta name="description" content="Silvagenitus bouttique wines" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <div className="max-w-screen-md mx-auto">
          <h2 className="text-hover text-center">Whoops!</h2>
          <h2 className="text-center">
            The page you are looking for doesn&rsquo;t exist.
          </h2>
        </div>
      </main>
    </div>
  );
}

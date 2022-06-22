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
        <div class="max-w-screen-md mx-auto">
          <h2 class="text-hover text-center">!</h2>
          <h2 class="text-center">Your order was canceled.</h2>
        </div>
      </main>
    </div>
  );
}

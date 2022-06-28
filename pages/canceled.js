import Head from "next/head";

export default function Page() {
  return (
    <div className="animate__animated animate__fadeIn">
      <Head>
        <title>Canceled - Silvagenitus</title>
        <meta name="description" content="Silvagenitus Boutique Wines" />
        <link rel="icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <main>
        <div className="max-w-screen-md mx-auto">
          <h2 className="text-hover text-center">!</h2>
          <h2 className="text-center">Your order was canceled.</h2>
        </div>
      </main>
    </div>
  );
}

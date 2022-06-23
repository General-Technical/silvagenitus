import Head from "next/head";

export default function Page() {
  return (
    <div className="animate__animated animate__fadeIn">
      <Head>
        <title>Success - Silvagenitus</title>
        <meta name="description" content="Silvagenitus bouttique wines" />
        <link rel="icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <main>
        <div className="max-w-screen-md mx-auto">
          <h2 className="text-hover text-center">Thanks!</h2>
          <h2 className="text-center">Your order has beeen placed.</h2>
        </div>
      </main>
    </div>
  );
}

import Head from "next/head";

export default function Page() {
  return (
    <div className="animate__animated animate__fadeIn">
      <Head>
        <title>Silvagenitus</title>
        <meta name="description" content="Silvagenitus Boutique Wines" />
        <link rel="icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <main>
        <div className="bg-[url('/HomeBG.jpg')] bg-cover bg-left w-screen mx-auto h-screen">
          <div className="relative font-body flex flex-col h-screen justify-center items-center">
            <div className="fixed sm:bottom-40 sm:right-20 sm:translate-x-0 bottom-10 right-1/2 translate-x-1/2">
              <h2 className="silvagenitus animate__animated animate__fadeIn">
                silvagenitus
              </h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

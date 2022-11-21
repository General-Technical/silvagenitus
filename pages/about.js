import Head from "next/head";

export default function Page() {
  return (
    <div className="animate__animated animate__fadeIn">
      <Head>
        <title>About - Silvagenitus</title>
        <meta name="description" content="Silvagenitus Boutique Wines" />
        <link rel="icon" href="/favicon.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <div className="bg-[url('/AboutBG.jpg')] bg-contain bg-right mx-auto min-h-screen bg-no-repeat">
        <main>
          <div className="flex items-center justify-start w-full max-w-screen-lg">
            <div className="text-left bg-white bg-opacity-70 rounded-lg p-8 max-w-xl animate__animated animate__fadeIn">
              <p>
                We&rsquo;ve been experimenting with using the fruit from
                Syzygium luehmannii in wine making for some years now, initially
                with other fruits. We found the Australian native deserved to
                shine all by itself.
              </p>
              <p>
                It has a unique spicy tone with an aromatic flavour. Our
                sparkling is made in a pétillant naturel style and it is just
                the thing to mark a celebration or have as a little sundowner
                with some cheese.
              </p>
              <p>
                Syzygium leuhmanii is a type of Lilly Pilly and is one of the
                most robust and popular native plants. It has diverse uses and
                doesn&rsquo;t require high intensity care which makes it a
                perfect sustainable crop for the future. We&rsquo;re aspiring to
                have a farm that embraces regenerative agriculture and is part
                of a positive solution for productive lands.
              </p>
              <p>
                We hope you enjoy this totally unique wine as much as we do!
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>
        <div class="bg-[url('/HomeBG.jpg')] bg-cover bg-left w-screen mx-auto h-screen">
          <div class="relative font-body flex flex-col h-screen">
            <section>
              <slot />
              <div class="fixed sm:bottom-40 sm:right-20 sm:translate-x-0 bottom-10 right-1/2 translate-x-1/2">
                <h2 class="silvagenitus text-primary">silvagenitus</h2>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

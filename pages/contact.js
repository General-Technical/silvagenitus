import Head from "next/head";
import React, { useState } from "react";
import { SubmitButton } from "../components/SubmitButton";

export default function Page() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Head>
        <title>Contact - Silvagenitus</title>
        <meta name="description" content="Silvagenitus bouttique wines" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <div className="bg-[url('/HomeBG.jpg')] bg-cover bg-left w-screen mx-auto h-screen px-4">
          <div className="relative font-body flex flex-col h-screen justify-center items-center">
            <div className="bg-hover w-full max-w-xl px-4 py-6 pt-8 mx-4 rounded-xl bg-opacity-70 z-40">
              <form
                action="https://api.staticforms.xyz/submit"
                method="post"
                className="flex flex-col"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="rounded-t-lg"
                  required
                />
                <input type="text" name="email" placeholder="Email" required />
                <textarea
                  name="message"
                  placeholder="Message"
                  className="rounded-b-lg"
                  required
                ></textarea>
                <input
                  type="text"
                  name="honeypot"
                  style={{ display: show ? "block" : "none" }}
                />
                <input
                  type="hidden"
                  name="accessKey"
                  value="46b1bac2-86a9-4669-a0a8-e0ec573d7050"
                />
                <input
                  type="hidden"
                  name="subject"
                  value="Contact Form - Silvagenitus"
                />
                <input type="hidden" name="replyTo" value="@" />
                <input
                  type="hidden"
                  name="redirectTo"
                  value="https://silvagenitus-wine.netlify.app/thankyou"
                />
                <div className="mx-auto">
                  <SubmitButton />
                </div>
              </form>
            </div>
            <div className="fixed sm:bottom-40 sm:right-20 sm:translate-x-0 bottom-10 right-1/2 translate-x-1/2">
              <h2 className="silvagenitus">silvagenitus</h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

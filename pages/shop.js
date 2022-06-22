import React from "react";
import Head from "next/head";
import { loadStripe } from "@stripe/stripe-js";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
export default function PreviewPage() {
  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);

  return (
    <form action="/api/checkout_sessions" method="POST">
      <Head>
        <title>Shop - Silvagenitus</title>
        <meta name="description" content="Silvagenitus bouttique wines" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <div className="max-w-screen-md mx-auto">
          <div className="md:flex block">
            <div className="md:w-1/2 w-2/3 p-5">
              <img
                src="IMG_20220122_133437_crop.jpg"
                alt="Syzygium Luehmannii Pet Nat 2022"
                className="rounded-lg self-center"
              />
            </div>
            <div className="productInfo">
              <h2>Syzygium Luehmannii Pet Nat 2022</h2>
              <h3>$ 30</h3>A naturally sparkling wine that's unfiltered and kept
              as un-messed with as possible. With no added preservatives, eggs
              or dairy products.
              <button type="submit" role="link" className="orderButton">
                <h4 className="m-0 self-center">Order</h4>
              </button>
            </div>
          </div>
        </div>
      </main>
    </form>
  );
}

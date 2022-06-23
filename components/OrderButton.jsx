import React from "react";

export const OrderButton = () => {
  if (typeof window === "object") {
    const theOrderButton = document.querySelector(".button");

    theOrderButton.addEventListener("click", () => {
      theOrderButton.classList.add("button--loading");
    });
  }
  return (
    <button type="submit" role="link" className="orderButton button">
      <h5 className="m-0 self-center button__text">Order</h5>
    </button>
  );
};

import React from "react";

export const SubmitButton = () => {
  if (typeof window === "object") {
    const theSubmitButton = document.querySelector(".button");

    theSubmitButton.addEventListener("click", () => {
      theSubmitButton.classList.add("button--loading");
    });
  }
  return (
    <button type="submit" role="link" className="orderButton button">
      <h5 className="m-0 self-center button__text">Submit</h5>
    </button>
  );
};

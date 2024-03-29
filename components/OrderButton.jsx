import React from "react";

export const OrderButton = () => {
  return (
    <a
      href="mailto:tessa@fredst.com?subject=Silvagenitus Order"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button className="orderButton button">
        <h5 className="m-0 self-center button__text">Order</h5>
      </button>
    </a>
  );
};

if (typeof window === "object") {
  const theSubmitButton = document.querySelector(".button");

  theSubmitButton.addEventListener("click", () => {
    theSubmitButton.classList.add("button--loading");
  });
}

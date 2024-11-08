document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".order-button");
  const modal = document.querySelector(".backdrop");

  function toggleModal() {
    modal.classList.toggle("is-hidden");
  }

  buttons.forEach((button) => {
    button.addEventListener("click", toggleModal);
  });

});

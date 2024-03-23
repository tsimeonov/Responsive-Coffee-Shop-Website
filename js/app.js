let navbar = document.querySelector(".navbar");
let menuBtn = document.querySelector("#menu-btn");

let cartItem = document.querySelector(".cart-items-container");
let cartBtn = document.querySelector("#cart-btn");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

cartBtn.addEventListener("click", () => {
  cartItem.classList.toggle("active");
});

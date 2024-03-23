let navbar = document.querySelector(".navbar");
let menuBtn = document.querySelector("#menu-btn");

let cartItem = document.querySelector(".cart-items-container");
let cartBtn = document.querySelector("#cart-btn");

let searchForm = document.querySelector(".search-form");
let searchBtn = document.querySelector("#search-btn");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

cartBtn.addEventListener("click", () => {
  cartItem.classList.toggle("active");
});

searchBtn.addEventListener("click", () => {
  searchForm.classList.toggle("active");
});

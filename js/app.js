let navbar = document.querySelector(".navbar");
let menuBtn = document.querySelector("#menu-btn");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

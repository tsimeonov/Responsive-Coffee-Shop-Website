# This is a Step by Step guide on how to create the Responsive Coffee Shop Website

## Step 1: Initial setup

Create the html file, add the links for font awesome, link the css and js file.

<details>
  <summary>Setup for the HTML file</summary>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- FONT AWESOME CDN LINK -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    />
    <!-- CSS FILE LINK -->
    <link rel="stylesheet" href="./css/style.css" />
    <title>Responsive coffee shop Website</title>
  </head>

  <body>
    <!-- JS FILE LINK -->
    <script src="./js/app.js"></script>
  </body>
</html>
```

</details>

---

Create the css file `style.css`, start by importing the fonts, then create a few variables for the most used colors, reset the initital styles, style the html and the body/

<details>
  <summary>Setup for the css file</summary>

```css
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap");

:root {
  --main-color: #d3ad7f;
  --black: #13131a;
  --bg: #010103;
  --white: #fff;
  --border: 0.1rem solid rgba(255, 255, 255, 0.3);
}

* {
  font-family: "Roboto Mono", monospace;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  border: none;
  text-decoration: none;
  text-transform: capitalize;
  transition: 0.2s linear;
}

html {
  font-size: 62.5%;
  overflow-x: hidden;
  scroll-padding-top: 9rem;
  scroll-behavior: smooth;
}

html::-webkit-scrollbar {
  width: 0.8rem;
}

html::-webkit-scrollbar-track {
  background: transparent;
}

html::-webkit-scrollbar-thumb {
  background: var(--white);
  border-radius: 5rem;
}

body {
  background: var(--bg);
}
```

</details>

---

Create a new file called `app.js`

---

## Step 2: Build, style and add functionality to the Header

Build the header, create the `navbar` `icons`, `search-form`, `cart-items-container`

<details>
  <summary>Start with the header</summary>

```html
<!-- HEADER SECTION STARTS -->
<header class="header">
  <a href="#" class="logo">
    <img src="./images/logo.png" alt="website logo" />
  </a>

  <nav class="navbar">
    <a href="#home">home</a>
    <a href="#about">about</a>
    <a href="#menu">menu</a>
    <a href="#products">products</a>
    <a href="#review">review</a>
    <a href="#contact">contact</a>
    <a href="#blogs">blogs</a>
  </nav>

  <div class="icons">
    <div class="fas fa-search" id="search-btn"></div>
    <div class="fas fa-shopping-cart" id="cart-btn"></div>
    <div class="fas fa-bars" id="menu-btn"></div>
  </div>

  <div class="search-form">
    <input type="search" id="search-box" placeholder="search here..." />
    <label for="search-box" class="fas fa-search"></label>
  </div>

  <div class="cart-items-container">
    <div class="cart-item">
      <span class="fas fa-times"></span>
      <img src="./images/menu-1.png" alt="" />
      <div class="content">
        <h3>cart item 01</h3>
        <div class="price">$15.99/-</div>
      </div>
    </div>
    <div class="cart-item">
      <span class="fas fa-times"></span>
      <img src="./images/menu-2.png" alt="" />
      <div class="content">
        <h3>cart item 02</h3>
        <div class="price">$15.99/-</div>
      </div>
    </div>
    <div class="cart-item">
      <span class="fas fa-times"></span>
      <img src="./images/menu-3.png" alt="" />
      <div class="content">
        <h3>cart item 03</h3>
        <div class="price">$15.99/-</div>
      </div>
    </div>
    <div class="cart-item">
      <span class="fas fa-times"></span>
      <img src="./images/menu-4.png" alt="" />
      <div class="content">
        <h3>cart item 04</h3>
        <div class="price">$15.99/-</div>
      </div>
    </div>
    <a href="#" class="btn">Checkout now</a>
  </div>
</header>
<!-- HEADER SECTION ENDS -->
```

</details>

---

<details>
  <summary>Style the header</summary>

```css
.header {
  background: var(--bg);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2%;
  border-bottom: var(--border);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.header .logo img {
  height: 18rem;
}

.header .navbar a {
  margin: 0 1rem;
  font-size: 1.6rem;
  color: var(--white);
}

.header .navbar a:hover {
  color: var(--main-color);
  border-bottom: 0.1rem solid var(--main-color);
  padding-bottom: 0.5rem;
}

.header .icons div {
  color: var(--white);
  cursor: pointer;
  font-size: 2.5rem;
  margin-left: 1rem;
}

.header .icons div:hover {
  color: var(--main-color);
}

#menu-btn {
  display: none;
}

.header .search-form {
  position: absolute;
  top: 115%;
  right: 7%;
  background: var(--white);
  width: 50rem;
  height: 5rem;
  display: flex;
  align-items: center;
  transform: scaleY(0);
  transform-origin: top;
}

.header .search-form.active {
  transform: scaleY(1);
}

.header .search-form input {
  height: 100%;
  width: 100%;
  font-size: 1.6rem;
  color: var(--black);
  padding: 1rem;
  text-transform: none;
}

.header .search-form label {
  cursor: pointer;
  font-size: 2.2rem;
  margin-right: 1.5rem;
  color: var(--black);
}

.header .search-form label:hover {
  color: var(--main-color);
}

.header .cart-items-container {
  position: absolute;
  top: 100%;
  right: -100%;
  height: calc(100vh - 9rem);
  width: 35rem;
  background-color: var(--white);
  padding: 0 1.5rem;
}

.header .cart-items-container.active {
  right: 0;
}

.header .cart-items-container .cart-item {
  position: relative;
  margin: 2rem 0;
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.header .cart-items-container .cart-item .fa-times {
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  color: var(--black);
}

.header .cart-items-container .cart-item .fa-times:hover {
  color: var(--main-color);
}

.header .cart-items-container .cart-item img {
  height: 7rem;
}

.header .cart-items-container .cart-item .content h3 {
  font-size: 2rem;
  color: var(--black);
  padding-bottom: 0.5rem;
}

.header .cart-items-container .cart-item .content .price {
  font-size: 1.5rem;
  color: var(--main-color);
}

.btn {
  margin-top: 1rem;
  display: inline-block;
  padding: 0.9rem 3rem;
  font-size: 1.7rem;
  color: var(--white);
  background: var(--main-color);
  border-radius: 0.5rem;
  cursor: pointer;
}

.btn:hover {
  letter-spacing: 0.2rem;
}

.header .cart-items-container .btn {
  width: 100%;
  text-align: center;
}

section {
  padding: 2rem 7%;
}
```

</details>

---

Create variables for the `navbar`, `menuBtn`,`cartItem`,`cartBtn`,`searchForm`,`searchBtn`, add a eventListener for this items.

<details>
  <summary>Set up and build the js </summary>

```js
let navbar = document.querySelector(".navbar");
let menuBtn = document.querySelector("#menu-btn");

let cartItem = document.querySelector(".cart-items-container");
let cartBtn = document.querySelector("#cart-btn");

let searchForm = document.querySelector(".search-form");
let searchBtn = document.querySelector("#search-btn");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
});

cartBtn.addEventListener("click", () => {
  cartItem.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
});

searchBtn.addEventListener("click", () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  cartItem.classList.remove("active");
});

window.onscroll = () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};
```

</details>

---

Add the media queries `990px`,`768px`,`450px` to the css file.

<details>
  <summary>CSS for the media quries</summary>

```css
/* MEDIA QUERIES */
@media (max-width: 990px) {
  html {
    font-size: 55%;
  }

  .header {
    padding: 1.5rem 2rem;
  }

  section {
    padding: 2rem;
  }
}

@media (max-width: 768px) {
  #menu-btn {
    display: inline-block;
  }

  .header .navbar {
    position: absolute;
    top: 100%;
    right: -100%;
    background: var(--white);
    width: 30rem;
    height: calc(100vh - 9.5rem);
  }

  .header .navbar.active {
    right: 0;
  }

  .header .navbar a {
    color: var(--black);
    display: block;
    margin: 1.5rem;
    padding: 0.5rem;
    font-size: 2rem;
  }

  .header .search-form {
    width: 90%;
    right: 2rem;
  }

  .home {
    /* background-position: left; */
    justify-content: center;
    text-align: center;
  }

  .home .content h3 {
    font-size: 4.5rem;
  }

  .home .content p {
    font-size: 1.5rem;
  }
}

@media (max-width: 450px) {
  html {
    font-size: 55%;
  }
}
```

</details>

---

## Step 3: Build ans style the home section

Create the html for the home section

<details>
  <summary>Build the home section</summary>

```html
<!-- HOME SECTION STARTS -->

<section class="home" id="home">
  <div class="content">
    <h3>fresh coffee in the mornings</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
      facilis harum iste libero recusandae quasi dolor saepe magni possimus
      quibusdam.
    </p>
    <a href="#" class="btn">get yours now</a>
  </div>
</section>

<!-- HOME SECTION ENDS -->
```

</details>

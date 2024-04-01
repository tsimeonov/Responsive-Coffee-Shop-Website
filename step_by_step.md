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

## Step 2: Build and style the Header

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

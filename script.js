const data = [
  {
    namaSepatu: "Converse Chuck 70 Josh Vides White",
    brandSepatu: "Converse",
    image: "images/Converse-Chuck-70-Josh-Vides-White.jpg",
    harga: 1990000,
  },
  {
    namaSepatu: "Converse Chuck Taylor All Star 70 Hi Basquiat",
    brandSepatu: "Converse",
    image:
      "images/Converse-Chuck-Taylor-All-Star-70-Hi-BasquiatKingsofEgypt-III.jpg",
    harga: 2100000,
  },
  {
    namaSepatu: "Converse Chuck Taylor All Star 70 Hi Keith",
    brandSepatu: "Converse",
    image:
      "images/Converse-Chuck-Taylor-All-Star-70-Hi-Keith-Haring-Egret-2.jpg",

    harga: 1700000,

  },
  {
    namaSepatu: "Converse Chuck Taylor All Star Basquiat",
    brandSepatu: "Converse",
    image:
      "images/Converse-Chuck-Taylor-All-Star-Basquiat-Pez-Dispenser-Dinosaur-2.jpg",

    harga: 1400000,
  },
  {
    namaSepatu: "New Balance 530",
    brandSepatu: "New Balance",
    image: "images/gambar-1/new-belance-1.webp",
    harga: 970000,
  },
  {
    namaSepatu: "New Balance Dark",
    brandSepatu: "New Balance",
    image: "images/gambar-2/new-belance-drak-1.webp",
    harga: 1200000,
  },
  {
    namaSepatu: "New Balance 550",
    brandSepatu: "New Balance",
    image: "images/gambar-3/new-belance-white-3.webp",
    harga: 2300000,
  },
  {
    namaSepatu: "New Balance Dark 230",
    brandSepatu: "New Balance",
    image: "images/gambar-2/new-belance-drak-1.webp",
    harga: 1890000,
  },
  {
    namaSepatu: "Nike Dunk Low Panda",
    brandSepatu: "Nike",
    image: "images/Nike-Dunk-Low-Panda.webp",
    harga: 1490000,
  },
  {
    namaSepatu: "Air Jordan 4",
    brandSepatu: "Nike",
    image: "images/Nike-Air-Jordan/1airJordan1.jpg",
    harga: 1390000,
  },
  {
    namaSepatu: "Air Max 90",
    brandSepatu: "Nike",
    image: "images/Nike-Air-Max-90/1airMax1.jpg",
    harga: 2390000,
  },
  {
    namaSepatu: "Nike Dunk",
    brandSepatu: "Nike",
    image: "images/Nike-Air-Max-90/3airMax3.jpg",
    harga: 1690000,
  },
];

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", start);
} else {
  start();
}

function start() {
  addEvents();
}

function update() {
  addEvents();
  updateTotal();
}

// Cart
let cartIcon = document.querySelector('#cart-icon')
let cart = document.querySelector('.cart ')
let closeCart = document.querySelector('#close-cart')

// Open cart
cartIcon.addEventListener('click', (e) => {
  e.preventDefault()
  cart.classList.add('active')
})
// Close cart
closeCart.addEventListener('click', () => cart.classList.remove('active'))

// ADD CARD LIST
let getCard = document.querySelector(".card-content");
for (let i = 0; i < data.length; i++) {
  // untuk melooping tampilan product didalam homepage
  getCard.innerHTML += `<div class="kolom col-12 col-md-6 col-lg-3 col-xs-3">

  <div class="card">
    <img
    src=${data[i].image}
    alt="No Image"
    class="card-img" id="img-card"
    />
    <div class="card-body">
      <h5 class="card-title">${data[i].namaSepatu}</h5>
      <p class="card-price">IDR ${data[i].harga}</p>
      <button href="#" class="btn btn-warning add-cart">Add to chart</button>
    </div>
  </div>`;
}

// ADD EVENT FUNCTIONS
function addEvents() {
  // REMOVE ITEM FROM CART
  let deleteCart = document.querySelectorAll(".cart-remove");
  deleteCart.forEach((button) => {
    button.addEventListener("click", handleDelete);
  });

  // CHANGE QUANTITY ITEM
  let countQuantity = document.querySelectorAll(".cart-quantity");
  countQuantity.forEach((input) => {
    input.addEventListener("change", handleCount);
  });

  // ADD ITEM TO CART
  let getCart = document.querySelectorAll(".add-cart");
  getCart.forEach((button) => {
    cart.classList.add('active')
    button.addEventListener("click", handleAdd);
  });

  // BUYING ITEM
  let buyCart = document.querySelector(".buy-cart");
  buyCart.addEventListener("click", handleBuy);
}

// EVENT HANDLE FUNCTIONS ========================================
// =============
let addItem = [];
// =============
function handleAdd() {
  let product = this.parentElement;
  // let img = document.getElementById('img-card').src;
  // console.log(img);
  let namaSepatu = product.querySelector(".card-title").innerHTML;
  let harga = product.querySelector(".card-price").innerHTML;

  let cartProduct = {
    namaSepatu,
    harga,
  };

  // validate cant add same product to cart
  if (addItem.find((list) => list.namaSepatu == cartProduct.namaSepatu)) {
    return alert("this product already in your cart!");
  } else {
    addItem.push(cartProduct);
  }

  // add display product to cart
  let cartElement = cartComponent(namaSepatu, harga);
  let newElement = document.createElement("div");
  newElement.innerHTML = cartElement;

  const cartContent = document.querySelector(".cart-content");
  cartContent.appendChild(newElement);

  update();
}

// delete product in cart
function handleDelete() {
  this.parentElement.remove();
  update();
}

// increment quantity in cart
function handleCount() {
  if (this.value < 1) {
    return (this.value = 1);
  }
  update();
}

function handleBuy() {
  if (addItem.length === 0) {
    return alert("You are not insert any product to buy!");
  }
  const cartContent = document.querySelector(".cart-content");
  cartContent.innerHTML = "";
  alert("You are successfully buying this product! Thankyou");

  update();
}

// UPDATE FUNCTIONS ===============================================
function updateTotal() {
  let cartList = document.querySelectorAll(".cart-box");
  let totalElement = document.querySelector(".total-price");

  let total = 0;
  cartList.forEach((cart) => {
    let priceElement = cart.querySelector(".cart-price");
    let price = parseFloat(priceElement.innerHTML.replace("IDR", ""));
    let quantity = cart.querySelector(".cart-quantity").value;

    total += price * quantity;
  });
  totalElement.innerHTML = "IDR " + total;
}

// DISPLAY HTML CART ==========================================
function cartComponent(namaSepatu, harga) {
  return ` <div class="cart-box">
  <div class="cart-detail">
    <div class="cart-product-title">${namaSepatu}</div>
    <div class="cart-price">${harga}</div>
    <input type="number" value="1" class="cart-quantity">
  </div>
  <!-- button cart -->
  <i class="fa-solid fa-trash cart-remove"></i>
</div>`;
}



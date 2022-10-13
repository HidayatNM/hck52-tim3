const data = [
  {
    namaSepatu: "Converse Chuck 70 Josh Vides White",
    brandSepatu: "Converse",
    image: "images/Converse-Chuck-70-Josh-Vides-White.jpg",
    quantity: 10,
    harga: 190300,
  },
  {
    namaSepatu: "Converse Chuck Taylor All Star 70 Hi Basquiat",
    brandSepatu: "Converse",
    image: "images/Converse-Chuck-Taylor-All-Star-70-Hi-BasquiatKingsofEgypt-III.jpg",
    quantity: 10,
    harga: 190300,
  },
  {
    namaSepatu: "Converse Chuck Taylor All Star 70 Hi Keith",
    brandSepatu: "Converse",
    image: "images/Converse-Chuck-Taylor-All-Star-70-Hi-Keith-Haring-Egret-2.jpg",
    quantity: 10,
    harga: 190300,
  },
  {
    namaSepatu: "Converse Chuck Taylor All Star Basquiat",
    brandSepatu: "Converse",
    image: "images/Converse-Chuck-Taylor-All-Star-Basquiat-Pez-Dispenser-Dinosaur-2.jpg",
    quantity: 10,
    harga: 190300,
  },
  {
    namaSepatu: "New Balance 530",
    brandSepatu: "New Balance",
    image: "images/gambar-1/new-belance-1.webp",
    quantity: 10,
    harga: 190300,
  },
  {
    namaSepatu: "New Balance Dark",
    brandSepatu: "New Balance",
    image: "images/gambar-2/new-belance-drak-1.webp",
    quantity: 10,
    harga: 190300,
  },
  {
    namaSepatu: "New Balance 550",
    brandSepatu: "New Balance",
    image: "images/gambar-3/new-belance-white-3.webp",
    quantity: 10,
    harga: 190300,
  },
  {
    namaSepatu: "New Balance Dark 230",
    brandSepatu: "New Balance",
    image: "images/gambar-2/new-belance-drak-1.webp",
    quantity: 10,
    harga: 190300,
  },
  {
    namaSepatu: "Nike Dunk Low Panda",
    brandSepatu: "Nike",
    image: "images/Nike-Dunk-Low-Panda.webp",
    quantity: 10,
    harga: 190300,
  },
  {
    namaSepatu: "Air Jordan 4",
    brandSepatu: "Nike",
    image: "images/Nike-Air-Jordan/1airJordan1.jpg",
    quantity: 10,
    harga: 190300,
  },
  {
    namaSepatu: "Air Max 90",
    brandSepatu: "Nike",
    image: "images/Nike-Air-Max-90/1airMax1.jpg",
    quantity: 10,
    harga: 190300,
  },
  {
    namaSepatu: "Nike Dunk",
    brandSepatu: "Nike",
    image: "images/Nike-Air-Max-90/3airMax3.jpg",
    quantity: 10,
    harga: 190300,
  },
];

let getCard = document.querySelector('.card-content')

for (let i = 0; i < data.length; i++) {
  getCard.innerHTML += `<div class="col-12 col-md-6 col-lg-3 col-xs-3">
  <div class="card">
    <img
      src=${data[i].image}
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title">${data[i].namaSepatu}</h5>
      <p class="card-price">Price: IDR 190.300</p>
      <a href="#" class="btn btn-warning">Add to chart</a>
    </div>
  </div>`
}
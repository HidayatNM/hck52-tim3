const data = [
    {
        namaSepatu: "",
        brandSepatu: "",
        image: "",
        quantity: 0,
        harga: 0,
    },
    {
        namaSepatu: "",
        brandSepatu: "",
        image: "",
        quantity: 0,
        harga: 0,
    },
    {
        namaSepatu: "",
        brandSepatu: "",
        image: "",
        quantity: 0,
        harga: 0,
    },
    {
        namaSepatu: "",
        brandSepatu: "",
        image: "",
        quantity: 0,
        harga: 0,
    },
];

const contentFeature = document.querySelector('.content-feature')
for (let i of data) {
    const divWrapper = document.createElement('div');
    divWrapper.classList.add('col-12');
    divWrapper.classList.add('col-md-6');
    divWrapper.classList.add('col-lg-3');
    divWrapper.classList.add('col-xs-3');
    divWrapper.innerHTML = everyCard(aku = 'asd')
    contentFeature.appendChild(divWrapper);
}


function everyCard(aku) {
    return `<div class="card">
                  <img src="images/Converse Chuck 70 Josh Vides White/Converse-Chuck-70-Josh-Vides-White.jpg"
                          class="card-img-top"
                          alt="..."/>
                     <div class="card-body">
                         <h5 class="card-title">${aku}</h5>
                         <p class="card-price">Price: IDR 190.300</p>
                         <a href="#" class="btn btn-warning">Add to chart</a>
                     </div>
                 </div>`
}

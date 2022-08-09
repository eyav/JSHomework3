const menu = [
  {
    id: 1,
    title: "Cağ Kebabı",
    category: "Yemekler",
    price: 30.00,
    img:
      "/img/ck.jpg",
    desc: `Mevsim salata,jalapeno biberi,2 adet lavaş ekmek ile. `,
  },
  {
    id: 2,
    title: "Pilav&Kebap",
    category: "Yemekler",
    price: 29.99,
    img:
      "/img/pke.jpg",
    desc: `Mevsim salata,pilav,jalapeno biberi,2 adet lavaş ekmek ile.`,
  },
  {
    id: 3,
    title: "Beyti Kebap",
    category: "Yemekler",
    price: 39.99,
    img:
      "/img/beyti.jpg",
    desc: `Mevsim salata,jalapeno biberi,2 adet lavaş ekmek ile.`,
  },
  {
    id: 4,
    title: "Tavuk Şiş",
    category: "Yemekler",
    price: 39.99,
    img:
      "/img/tsis.jpg",
    desc: `Mevsim salata,jalapeno biberi,2 adet lavaş ekmek ile.`,
  },
  {
    id: 5,
    title: "Şöbiyet",
    category: "Tatlılar",
    price: 19.99,
    img:
      "/img/b1.jpg",
    desc: `Fıstıklı,cevizli şöbiyet.`,
  },

  {
    id: 6,
    title: "Kadayıf",
    category: "Tatlılar",
    price: 9.99,
    img:
      "/img/b3.jpg",
    desc: `Fıstıklı,cevizli kadayıf.`,
  },
  {
    id: 7,
    title: "Soğuk Baklava",
    category: "Tatlılar",
    price: 15.99,
    img:
      "/img/b2.jpg",
    desc: `Fıstıklı,cevizli,çikolatalı soğuk baklava. `,
  },
  {
    id: 8,
    title: "Fıstıklı Baklava",
    category: "Tatlılar",
    price: 8.99,
    img:
      "/img/b4.jpg",
    desc: `Fıstıklı adet baklava.`,
  },
  {
    id: 9,
    title: "fanta",
    category: "Icecekler",
    price: 12.99,
    img:
      "/img/f.jpg",
    desc: `Serinleten içecek fanta`,
  },
  {
    id: 10,
    title: "Maden Suyu",
    category: "Icecekler",
    price: 5.99,
    img:
      "/img/m.jpg",
    desc: `Serinleten içecek meyveli,aromalı,sade maden suyu `,
  },
  {
    id: 11,
    title: "Coca Cola",
    category: "Icecekler",
    price: 12.99,
    img:
      "/img/k.jpg",
    desc: `Serinleten içecek coca cola `,
  },
  {
    id: 12,
    title: "Ayran",
    category: "Icecekler",
    price: 9.99,
    img:
      "/img/ay.jpg",
    desc: `Serinleten içecek ayran `,
  },
];
// UI selectors
btnDOM = document.querySelector(".btn-container")
menuDOM = document.querySelector(".section-center")


//Button function for create main buttons
const btnCreate = () => {
  let buttons = `
      <button class="btn btn-light btn-item" id="All">All</button>
      <button class="btn btn-light btn-item" id="Yemekler">Yemekler</button>
      <button class="btn btn-light btn-item" id="Tatlılar">Tatlılar</button>
      <button class="btn btn-light btn-item" id="Icecekler">Icecekler</button>
    `
  btnDOM.innerHTML = buttons;
}
btnCreate();


//foodRecipe function for make html object items
const foodRecipes = (item) => {
  let food = `
      <div class="menu-items col-lg-6 col-sm-12">
        <img src="${item.img}" alt="${item.title}" class="photo">
        <div class="menu-info">
          <div class="menu-title">
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
          </div>
          <div class="menu-text">
            ${item.desc}
          </div>
        </div>
      </div> 
    `
  return food;
}


//Function for show all foods 
const showAllFoods = () => {

  let allFoods = ""

  menu.map(item => {
    allFoods += foodRecipes(item)
  })
  menuDOM.innerHTML = allFoods;
}
//UI event for All foods
allBTN = document.querySelector("#All")
// Event Listeners
document.addEventListener("DOMContentLoaded", showAllFoods)
allBTN.addEventListener("click", showAllFoods)

//Function for show Korean foods
const showYemekler = () => {

  let Yemekler = ""

  menu.map(item => {
    if (item.category === "Yemekler") {
      Yemekler += foodRecipes(item)
    }
  })

  menuDOM.innerHTML = Yemekler;

}
//UI event for Koren foods
koreaBTN = document.querySelector("#Yemekler")
//Event Listeners
koreaBTN.addEventListener("click", showYemekler);

//Function for show Japan foods
const showTatlılar = () => {

  let Tatlılar = "";

  menu.map(item => {
    if (item.category === "Tatlılar") {
      Tatlılar += foodRecipes(item)
    }
  })

  menuDOM.innerHTML = Tatlılar;

}
//UI event for Japan foods
japanBTN = document.querySelector("#Tatlılar")
//Event Listeners
japanBTN.addEventListener("click", showTatlılar)

//Function for show China foods
const showIcecekler = () => {

  let Icecekler = "";

  menu.map(item => {
    if (item.category === "Icecekler") {
      Icecekler += foodRecipes(item)
    }
  })

  menuDOM.innerHTML = Icecekler;

}
//UI event for China foods
chinaBTN = document.querySelector("#Icecekler")
//Event Listeners
chinaBTN.addEventListener("click", showIcecekler)
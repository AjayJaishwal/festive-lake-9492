import {navbar} from "../components/navbar.js"

let nav = document.getElementById("navbar")
nav.innerHTML = navbar()

import {FOOTER} from "../components/pagefooter.js"
let footer = document.getElementById("footer")
footer.innerHTML=FOOTER();
let left_message = document.getElementById("left-message")
let flag = true

setInterval(() => {

    if(flag == true){
        left_message.style.opacity = "0"
        flag = false
    }else {
        left_message.style.opacity = "1"
        flag = true
    }
},1500)


const nykaaProduct = [
    {
    image: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/0/a/0a4f3ef8904245711047_1.jpg",
    name : "Nykaa So Creme! Creamy Matte Lipstick - Traffic Jammin Jammin  Jammin'",
    price: "244",
    discount: "13% off",
    button: "Add",
    rating : "★ ★ ★ ★ 4.1(1567)",
    },
    {
      image: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/c/3/c31c1eb8904245710057_1.jpg",
      name : "Nykaa Matte Luxe Lipstick - Coachella Jammin Jammin  Jammin MumTaj Jammin Jammin",
      price: "479",
      discount: "23% off",
      button: "Add",
      rating : "★ ★ ★ ★ 4.4(1267)",

    },
    {
      image: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/9/8904245705138_1_1.jpg",
      name : "Nykaa Matte to Last! Transfer Proof Liquid Lipstick - MumTaj Jammin Jammin  Jammin",
      price: "449",
      discount: "29% off",
      button: "Add",
      rating: "★ ★ ★ ★ ★ 5(9876)",
    },
    {
      image: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/b/7/b7b3fd18904245708719_1.jpg",
      name : "Masaba By Nykaa Lipstick - Cool GuyExtraordinary Oil Serum & Hyaluronic Acid Gel ",
      price: "1998",
      discount: "20% off",
      button: "Add",
      rating: "★ ★ ★ 3.0(6789)",
    },
   {
      image: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/9/8/989b2d56902395724667_1.jpg",
      name : "L'Oreal Paris Extraordinary Oil Serum & Hyaluronic Acid Gel ...",
      price: "1672",
      discount: "20% off",
      button: "Add",
      rating: "★ ★ ★ ★ 4.0(6662)",
    },
      {
      image: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/4/3462317LOREA00000240_L'Oreal_1.jpg",
      name : "L'Oreal Paris Skin Combo For Minimized Pores & Crystal",
      price: "733",
      discount: "25% off",
      button: "Add",
      rating: "★ ★ ★ 3.0(10)",
    },
      {
      image: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/9/0/900b2d571249343326_1.jpg",
      name : "LOreal Paris Voluminous Lash Paradise Mascara - 204",
      price: "639",
      discount: "20% off",
      button: "Add",
      rating: "★ ★ ★ 3.0(6789)",
    },
         {
      image: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/c/4/c4f2980LOREA00000115_1.jpg",
      name : "L'Oreal Paris Revitalift Crystal Gel Cream | Oil-Free Face M...",
      price: "167",
      discount: "23% off",
      button: "Add",
      rating: "★ ★ ★ 3.9(639)",
    },
    {
      image: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/d/4d6267e4045787427523new1.jpg",
      name : "Schwarzkopf Professional Bonacure Peptide Repair Extraordinary Oil ",
      price: "774",
      discount: "14% off",
      button: "Add",
      rating: "★ ★ ★ ★ 4.0(6789)",
    },
         {
      image: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/d/4d6267e4045787427523new1.jpg",
      name : "Schwarzkopf Professional Bonacure Peptide Repair Extraordinary Oil ",
      price: "774",
      discount: "14% off",
      button: "Add",
      rating: "★ ★ ★ ★ 4.0(6789)",
    },
    {
      image: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/d/4d6267e4045787427523new1.jpg",
      name : "Schwarzkopf Professional Bonacure Peptide Repair Extraordinary Oil ",
      price: "774",
      discount: "14% off",
      button: "Add",
      rating: "★ ★ ★ ★ 4.0(6789)",
    },
    {
      image: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/d/4d6267e4045787427523new1.jpg",
      name : "Schwarzkopf Professional Bonacure Peptide Repair Extraordinary Oil ",
      price: "774",
      discount: "14% off",
      button: "Add",
      rating: "★ ★ ★ ★ 4.0(6789)",
    },
    {
      image: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/9/0/900b2d571249343326_1.jpg",
      name : "Nykaa So Creme! Creamy Matte Lipstick - Traffic Jammin Jammin  Jammin'",
      price: "244",
      discount: "13% off",
      button: "Add",
      rating : "★ ★ ★ ★ 4.1(1567)",
      },
    {
      image: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/9/0/900b2d571249343326_1.jpg",
      name : "Nykaa So Creme! Creamy Matte Lipstick - Traffic Jammin Jammin  Jammin'",
      price: "244",
      discount: "13% off",
      button: "Add",
      rating : "★ ★ ★ ★ 4.1(1567)",
      },
    {
      image: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/9/0/900b2d571249343326_1.jpg",
      name : "Nykaa So Creme! Creamy Matte Lipstick - Traffic Jammin Jammin  Jammin'",
      price: "244",
      discount: "13% off",
      button: "Add",
      rating : "★ ★ ★ ★ 4.1(1567)",
      },
    {
      image: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/9/0/900b2d571249343326_1.jpg",
      name : "Nykaa So Creme! Creamy Matte Lipstick - Traffic Jammin Jammin  Jammin'",
      price: "244",
      discount: "13% off",
      button: "Add",
      rating : "★ ★ ★ ★ 4.1(1567)",
      },
    {
      image: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/9/0/900b2d571249343326_1.jpg",
      name : "Nykaa So Creme! Creamy Matte Lipstick - Traffic Jammin Jammin  Jammin'",
      price: "244",
      discount: "13% off",
      button: "Add",
      rating : "★ ★ ★ ★ 4.1(1567)",
      },
      {
    image: "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/0/a/0a4f3ef8904245711047_1.jpg",
    name : "Nykaa So Creme! Creamy Matte Lipstick - Traffic Jammin Jammin  Jammin'",
    price: "244",
    discount: "13% off",
    button: "Add",
    rating : "★ ★ ★ ★ 4.1(1567)",
    },
  ]
  
  let cart_products=JSON.parse(localStorage.getItem("cart_data"))||[];
  document.getElementById('cart_quantity').innerText=cart_products.length;
  function nProduct(nykaaProduct) {
    
    let div_product = document.getElementById("product");
    div_product.innerHTML = '';
    nykaaProduct.forEach(function (products) {
        products.quantity = 1;
        let div = document.createElement('div');
        let addtobag = document.createElement('div');

        let name = document.createElement('h4');
        name.innerText = products.name;

        let button = document.createElement('button');
        button.innerHTML = "ADD TO BAG";
        button.addEventListener("click", function () {
          const existingProduct = findProductByName(products.name);

          if (existingProduct) {
            // Product already exists, increase quantity
            existingProduct.quantity += 1;
          } else {
            // Product is not in the cart, add it
            product.quantity = 1;
            cart_products.push(products);
          }
            localStorage.setItem("cart_data", JSON.stringify(cart_products));
            document.getElementById('cart_quantity').innerText = cart_products.length;
            //window.location.href = "cart.html";
        });

        let dp = document.createElement('div');
        let discount = document.createElement('h5');
        discount.innerText = products.discount;

        let price = document.createElement('b');
        price.innerHTML = 'MRP: ₹' + products.price;

        let image = document.createElement('img');
        image.src = products.image;
        image.addEventListener("click", function () {
            localStorage.setItem("product_profile_data", JSON.stringify(products));
            window.location.href = "product_profile.html";
        });

        let rating = document.createElement('p');
        rating.innerHTML = products.rating;
        dp.append(price, discount);
        addtobag.append(button);
        div.append(image, name, dp, rating, addtobag);
        div_product.append(div);
    });

    // div_product.style.display = "grid";

    // const mediaQuery = window.matchMedia("(max-width: 768px)");
    // if (mediaQuery.matches) {
    //     div_product.style.gridTemplateColumns = "repeat(2, 1fr)";
    //     div_product.style.gridTemplateRows = "repeat(auto, 1fr)";
    //     div_product.style.gap = "20px";
    // } else {
    //     div_product.style.gridTemplateColumns = "repeat(4, 1fr)";
    //     div_product.style.gridTemplateRows = "repeat(auto, 1fr)";
    //     div_product.style.gap = "40px";
    // }
    // div_product.style.width = "66.5%";
    // div_product.style.margin = "auto";
    // div_product.style.marginLeft = "200px";
}
  
function findProductByName(productName) {
  return cart_products.find((product) => product.name === productName);
}

nProduct(nykaaProduct);
document.getElementById("all-text").innerHTML="ALL PRODUCTS ("+nykaaProduct.length+")"
document.getElementById("all-text").style.marginTop="10px"

document.querySelector("#LtoH").addEventListener("click", function () {
  
  nykaaProduct.sort(function (x, y) {
    return x.price - y.price;
  });

  nProduct(nykaaProduct);
});

document.querySelector("#HtoL").addEventListener("click", function () {
  
  nykaaProduct.sort(function (x, y) {
    return y.price - x.price;
  });

 
  nProduct(nykaaProduct);
});





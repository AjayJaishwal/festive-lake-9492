// data to map
const hairCareData = [
    {
        img:"https://cdn.shopify.com/s/files/1/1454/5188/products/Cappuccino-Coffee-Shampoo.jpg?v=1644475260&width=550",
        id:301,
        originalPrice:499,
        discountedPrice:424,
        name:"Anti-Dandruff Cappuccino Shampoo with Natural AHA - 250ml",
      },
    {
        img:"https://cdn.shopify.com/s/files/1/1454/5188/products/1_13872b7d-0760-471f-8011-983191fa1b61.jpg?v=1634705420&width=550",
        id:302,
        originalPrice:1029,
        discountedPrice:875,
        name:"Coffee Hair Boost & Hair Fall Control Kit",
      },
    {
        img:"https://cdn.shopify.com/s/files/1/1454/5188/products/1_e1dd14f3-fb54-4622-bd1e-4ebaebf937fd.jpg?v=1637243621&width=550",
        id:303,
        originalPrice:689,
        discountedPrice:586,
        name:"De-stress Hair Oiling Routine",
      },
    {
        img:"https://cdn.shopify.com/s/files/1/1454/5188/products/1_ec1f3313-1406-417f-86cf-b5f7a3d8520d.jpg?v=1636548356&width=550",
        id:304,
        originalPrice:1229,
        discountedPrice:1045,
        name:"Cappuccino- Anti-Dandruff Kit",
      },
    {
        img:"https://cdn.shopify.com/s/files/1/1454/5188/products/8_2.jpg?v=1646893970&width=550",
        id:305,
        originalPrice:599,
        discountedPrice:509,
        name:"Intense Damage Repair Latte Hair Mask with Coconut Milk & Shea Butter - 200g",
      },
      {
        img:"https://cdn.shopify.com/s/files/1/1454/5188/products/8_3.jpg?v=1646903997&width=550",
        id:306,
        originalPrice:399,
        discountedPrice:339,
        name:"Damage Repair Latte Leave-In Hair Cream with Coconut Milk - 50ml",
      },
   
] 

// append to this div
let hairCareContainer = document.getElementById("hairCareContainer");
let cartData = JSON.parse(localStorage.getItem('cart')) || [];
hairCareData.forEach((product,index) => {
  const productContainer =document.createElement("div");
  productContainer.className ="product";

  const productImage =document.createElement("img");
  productImage.src=product.img;
 
  
  const productName =document.createElement("p");
  productName.textContent=product.name;
  
  const originalPrice =document.createElement("p");
  originalPrice.textContent=product.originalPrice;

  const discountedPrice =document.createElement("p");
  discountedPrice.textContent=product.discountedPrice;

 
  const addToCartButton =document.createElement("button");
  addToCartButton.textContent='Add to Cart';

  addToCartButton.addEventListener("click",()=>{
    cartData.push(product);
    localStorage.setItem("cart", JSON.stringify(cartData))
  });
  productContainer.appendChild(productImage);
  productContainer.appendChild(productName);
  productContainer.appendChild(originalPrice);
  productContainer.appendChild(discountedPrice);
  productContainer.appendChild(addToCartButton);

  hairCareContainer.appendChild(productContainer);


});

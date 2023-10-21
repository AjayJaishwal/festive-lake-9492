document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById("container");
  const cartData = JSON.parse(localStorage.getItem("cart")) || [];
  const bottom = document.getElementById("bottom");
  if (cartData.length === 0) {
    // If the cart is empty, display the "Empty Cart" div
    container.innerHTML = '<div id="emptyCart">' +
      '<img src="./images/empty.png" alt="">' +
      '<p>Your Shopping Bag Is Empty</p>' +
      '<p1>This Feels too light! Go on, add all your favorites</p1>' +
      '<button id="startshopping">Start Shopping</button>' +
      '</div>';
      startshopping.addEventListener("click", function () {
        window.location.href = "homepage.html";
    });
    bottom.innerHTML = '';
  } else {
    // If there are items in the cart, display the "Container" div
    const bagMRPElement = document.getElementById("bagMRP");
    const youPayElement = document.getElementById("youPay");
    const bagDiscountElement = document.getElementById("bagDiscount");

    const rewardPointsElement = document.getElementById("rewardPoints");
    const grandTotalElement = document.getElementById("grandTotal");
    const cartContainer = document.getElementById("cartContainer");

    let bagMRP = 0;
    let youPay = 0;
    let bagDiscount = 0;

    cartData.forEach((product, index) => {
      const cartContainerTop = document.createElement("div");
      cartContainerTop.className = "cartContainerTop";
      cartContainerTop.style.display = "flex";
      cartContainerTop.style.alignItems = "center";
      cartContainerTop.style.justifyContent = "space-evenly";

      const cartContainerBottom = document.createElement("div");
      cartContainerBottom.className = "cartContainerBottom";
      cartContainerBottom.style.display = "flex";
      cartContainerBottom.style.alignItems = "center";
      cartContainerBottom.style.justifyContent = "end";
      cartContainerBottom.style.gap = "10px";
      const productImage = document.createElement("img");
      productImage.src = product.img;

      const productName = document.createElement("p");
      productName.textContent = product.name;

      const originalPrice = document.createElement("p1");
      originalPrice.textContent = `₹${product.originalPrice}`;

      const discountedPrice = document.createElement("p");
      discountedPrice.textContent = `₹${product.discountedPrice}`;

      const removeFromCartButton = document.createElement("button");
      removeFromCartButton.innerHTML = '&#x1F5D1;';

      removeFromCartButton.addEventListener("click", () => {
        cartData.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cartData));
        cartContainerTop.removeChild(productImage);
        cartContainerTop.removeChild(productName);
        cartContainerTop.removeChild(removeFromCartButton);
        cartContainerBottom.removeChild(originalPrice);
        cartContainerBottom.removeChild(discountedPrice);

        bagMRP = cartData.reduce((total, product) => total + product.discountedPrice, 0);
        bagDiscount = bagMRP * 0.1;
        bagDiscount = bagDiscount.toFixed(0);
        youPay = bagMRP - bagDiscount;
        rewardPointsElement.textContent = `Earn ₹${youPay} Reward Points`;
        bagMRPElement.textContent = `₹${bagMRP}`;
        bagDiscountElement.textContent = `₹${bagDiscount}`;
        youPayElement.textContent = `₹${youPay}`;
        grandTotalElement.textContent = `₹${youPay} `;

        // Update the total count and youPay in local storage
        updateTotalCountAndYouPay(cartData);
      });

      cartContainerTop.appendChild(productImage);
      cartContainerTop.appendChild(productName);
      cartContainerTop.appendChild(removeFromCartButton);

      cartContainerBottom.appendChild(originalPrice);
      cartContainerBottom.appendChild(discountedPrice);

      cartContainer.appendChild(cartContainerTop);
      cartContainer.appendChild(cartContainerBottom);
      bagMRP += product.discountedPrice;
      bagDiscount = bagMRP * 0.1;
      bagDiscount = bagDiscount.toFixed(0);
    });

    // Initial update of totals
    youPay = bagMRP - bagDiscount;
    rewardPointsElement.textContent = `Earn ₹${youPay} Reward Points`;
    bagMRPElement.textContent = `₹${bagMRP}`;
    bagDiscountElement.textContent = `₹${bagDiscount}`;
    youPayElement.textContent = `₹${youPay}`;
    grandTotalElement.textContent = `₹${youPay}`;

    // Update the total count and youPay in local storage
    updateTotalCountAndYouPay(cartData);
  }
});

const proceedButton = document.getElementById("proceedButton");

// Add a click event listener
proceedButton.addEventListener("click", function () {
    // Redirect to the "proceed.html" page
    window.location.href = "proceed.html";
});

function updateTotalCountAndYouPay(cartData) {
  // Calculate total count
  const totalCount = cartData.length;

  // Calculate total youPay
  const totalYouPay = cartData.reduce((total, product) => total +product.discountedPrice-Math.round(product.discountedPrice*0.1) , 0);
  
  // Update local storage
  const totalData = {
    totalCount: totalCount,
    totalYouPay: totalYouPay
  };

  localStorage.setItem('totalData', JSON.stringify(totalData));
}

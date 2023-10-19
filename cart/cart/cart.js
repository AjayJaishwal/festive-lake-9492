
    const bagMRPElement = document.getElementById("bagMRP");
    const youPayElement = document.getElementById("youPay");
    const bagDiscountElement = document.getElementById("bagDiscount");
    const cartContainer = document.getElementById("cartContainer");
    const rewardPointsElement = document.getElementById("rewardPoints");
    const grandTotalElement = document.getElementById("grandTotal");

    const cartData = JSON.parse(localStorage.getItem('cart')) || [];

    let bagMRP = 0;
    let youPay = 0;
    let bagDiscount = 0;

    cartData.forEach((product, index) => {
        const productContainer = document.createElement("div");
        productContainer.className = "product";

        const productImage = document.createElement("img");
        productImage.src = product.img;

        const productName = document.createElement("p");
        productName.textContent = product.name;

        const originalPrice = document.createElement("p");
        originalPrice.textContent = product.originalPrice;

        const discountedPrice = document.createElement("p");
        discountedPrice.textContent =product.discountedPrice; 
        
        const removeFromCartButton = document.createElement("button");
        removeFromCartButton.textContent = 'Remove From Cart';

        removeFromCartButton.addEventListener("click", () => {
            cartData.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cartData));
            cartContainer.removeChild(productContainer);

          
            bagMRP = cartData.reduce((total, product) => total + product.discountedPrice, 0);
            bagDiscount = bagMRP * 0.1; 
            bagDiscount = bagDiscount.toFixed(0);
            youPay = bagMRP - bagDiscount;
            rewardPointsElement.textContent = `Earn $${youPay} Reward Points`; 
            bagMRPElement.textContent = `$${bagMRP}`;
            bagDiscountElement.textContent = `$${bagDiscount}`;
            youPayElement.textContent = `$${youPay}`;
            grandTotalElement.textContent = `$${youPay} Grand total`;
        });

        productContainer.appendChild(productImage);
        productContainer.appendChild(productName);
        productContainer.appendChild(originalPrice);
        productContainer.appendChild(discountedPrice);
        productContainer.appendChild(removeFromCartButton);

        cartContainer.appendChild(productContainer);

        
        bagMRP += product.discountedPrice;
        bagDiscount = bagMRP * 0.1; 
        bagDiscount = bagDiscount.toFixed(0);
    });

    // Initial update of totals
    youPay = bagMRP - bagDiscount;
    rewardPointsElement.textContent = `Earn $${youPay} Reward Points`;
    bagMRPElement.textContent = `$${bagMRP}`;
    bagDiscountElement.textContent = `$${bagDiscount}`;
    youPayElement.textContent = `$${youPay}`;
    grandTotalElement.textContent = `$${youPay} Grand total`;


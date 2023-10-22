
const payButton = document.getElementById("payButton");

payButton.addEventListener("click", function () {
    alert("Product has been placed sucessfully")
    window.location.href = "homepage.html";
});



const totalData = JSON.parse(localStorage.getItem("totalData")) || [];

// Set the item count and total price based on the data from totalData
payButton.textContent = `Pay ₹${totalData.totalYouPay}`;


const itemcount =document.getElementById("itemcount");
const price =document.getElementById("price");

// Set the item count and total price based on the data from totalData
itemcount.textContent =` ${totalData.totalCount} Items`;
price.textContent = `₹${totalData.totalYouPay}`;

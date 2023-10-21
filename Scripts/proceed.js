
const deliver = document.getElementById("deliver");

deliver.addEventListener("click", function () {
    
    window.location.href = "payment.html";
});

const itemcount =document.getElementById("itemcount");
const price =document.getElementById("price");
const totalData = JSON.parse(localStorage.getItem("totalData")) || [];

// Set the item count and total price based on the data from totalData
itemcount.textContent =` ${totalData.totalCount} Items`;
price.textContent = `₹${totalData.totalYouPay}`;



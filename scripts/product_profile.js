  let product_profile=JSON.parse(localStorage.getItem("product_profile_data"))
    console.log(product_profile);

   
document.getElementById('ima').src=product_profile.image;
document.getElementById('text').innerHTML=product_profile.name
document.getElementById('rating').innerHTML="Rating : "+product_profile.rating
document.getElementById('price').innerHTML="MRP : "+product_profile.price
document.getElementById('discount').innerHTML=product_profile.discount
   async function pincodeFunc(){
        let pincode=document.getElementById('pincode').value;
        let res= await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
        let data=await res.json();
        let address=document.getElementById('address');
        address.innerText=`${data[0].PostOffice[0].District},${data[0].PostOffice[0].Circle} ${"\n"}You area is serviceable${"\n"}
        Delivery Within 2 Days`;
    }
    let cart_product=JSON.parse(localStorage.getItem("cart_data"))||[];
    document.getElementById('cart_quantity').innerText=cart_product.length;

    function addToCart(){
        cart_product.push(product_profile);
        localStorage.setItem("cart_data",JSON.stringify(cart_product));
       // document.getElementById('cart_quantity').innerText=cart_product.length;
        // console.log(cart_products)
        window.location.href="cart.html"  
    }
   
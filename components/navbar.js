function navbar() {
   return ` <!-- navbar top -->
      <div id="navbar-sticky">
    <div id="nav-top">
    <div class="left-message">
     <p id="left-message">BEAUTY BONANZA Get Your Daily Dose Of Amazing Deals</p>
    </div>
    <ul class="nav-list">
    <li><a href="/" class="first-icon"> &nbsp;Get App</a></li>
    <li class="vertical-line">|</li>
    <li><a href="/" class="first-icon"> &nbsp;Store & Events</a></li>
    <li class="vertical-line">|</li>
    <li><a href="/" class="first-icon"> &nbsp;Gift Card</a></li>
    <li class="vertical-line">|</li>
    <li><a href="/" class="first-icon"> &nbsp;Help</a></li>
    </ul>
    </div>
    <!-- navbar middle -->
    <div id="navbar-middle">
    <a href="index.html"> <div id="logo">
      <img id="logo-img" src="https://seeklogo.com/images/N/nykaa-logo-AA06314FB9-seeklogo.com.png">
     </div></a>
     <div class="nav-middle-list">
       <a href="products.html"><ul class="nav-middle-list">
           <li>CATEGORIES</li>
           <li>BRANDS</li>
           <li>NYKAA FASHION</li>
           <li>BEAUTY ADVICE</li>
           <li>NYKAA NETWORK</li>
       </ul></a>
       <input type="search" id="search" name="q" placeholder="Search on Nykaa" >
     </div>
    <div class="nav-middle-side">
       <a href="log.html"> <p id="account" ><i id="user_logo" class="fa-solid fa-user"></i>Account</p></a>
     </div>
      <a href="cart.html"> <div id="cart-img"><p id="cart_quantity">0</p>
        <span class="cart--icon"><i style="font-size:20px" class="fa"><i class="fa-solid fa-cart-shopping" style="color: #020203;"></i></i></span>
          
    </div> </a>
    </div>
    </div>
    <!-- navbar bottom -->
    <div id="navbar-bottom" >
      <a href="products.html"><ul class="navbar-bottom-list">
      <div class="burger-menu">
      <div class="bar">name </div>
      <div class="bar">product</div>
      <div class="bar"none></div>
    </div>
        <li class="bottom-nav">Makeup</li>
        <li class="bottom-nav">Hair</li>
        <li class="bottom-nav">Skin</li>
        <li class="bottom-nav">Appliances</li>
        <li class="bottom-nav">Personal Care</li>
        <li class="bottom-nav">Natural</li>
        <li class="bottom-nav">Mom&Baby</li>
        <li class="bottom-nav">Health&Wellness</li>
        <li class="bottom-nav">Men</li>
        <li class="bottom-nav">Fragnance</li>
        <li class="bottom-nav">LUXE</li>
         <li id="OFFERS">OFFER'S </li>
        </ul>
      </a>
       
       
      </ul>
    </div>`
}
export {navbar}
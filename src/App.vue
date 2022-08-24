<template>


<!-- HEADER START -->
  <section id="header">
    <div class="container">
      
      <div class="logo">
          <router-link :to="{name: 'Home'}"> 
          <img src="./assets/cici-logo.png" alt="" class="logo">
          </router-link>


       <div class="version">
          version 0.40 (updated: 2022-08-24)
       </div>
       </div>
      
    </div>
  </section>
<!-- HEADER END -->

<!--CONTENT START -->
<section id="content">
    <div class="container">
       <!--This is the searchbox-->
          <router-view />
    </div>
  </section>
<!--CONTENT END -->

<!-- FOOTER START -->

<footer>
  <div class="container2">
      <ul class="flex-row">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/suggest">Help us!</a></li>
      </ul>
      <ul class="flex-row">
        <li>
          <fa :icon="['fab', 'facebook']"  />          
        </li>
        <li>
          <fa :icon="['fab', 'pinterest']"  />          
        </li>
        <li>
          <fa :icon="['fab', 'instagram']"  />          
        </li>
        <li>
          <fa :icon="['fab', 'twitter']"  />          
        </li>
      </ul>
      <p class="copy">&copy; 2022 CanICompostIt.com</p>
    </div>
</footer>
  
    
  
<!--FOOTER END -->

</template>




<style>

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

body {
  padding: 20px;
  min-height: 100vh;
  background-color: rgb(234, 242, 255);
  background-image: url('./assets/carrots_small.jpg');
  background-size: cover;
  max-height: 100vh;
  height: 100vh;
}



.container {
    max-width: 1100px;
    width: 90%;
    margin:  auto;
    padding: 0 20px;

    
   
}

.container .footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* margin-top: 30px; */
  color: white;
  /* fixing footer on the bottom. 
  position: fixed;
  bottom: 100px; */
  
}

/* .container .footer div {
  display: flex;
  flex-grow: 1;
  justify-content: space-around;
  margin-top: 30px;
  color: white;
  margin-left:0px;
  padding: 50px 50px
  
} */


.container .logo {
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40px;

}

.version {
  font-size: 12px;
  color: white;
  text-align: center;
  margin-top: 10px;
}


footer {
  color: white;
  background-color: #01885d;
  padding: 10px 20px;
  position: fixed;
  bottom: 0px;
  width: 100%;
  

}

/* footer .container2 {
    display: flex ;
    flex-direction: column;
    align-items: center;

     max-width: 1100px; 
    margin: 0 auto;
    padding: 0 20px; 

  } */

.flex-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

footer ul{
    margin-bottom: 0px;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
  }

footer  li{
    padding: 0 15px;
    margin-bottom: 16px;
  }

footer a {
  font-size: 14px;
  font-weight: bold;
  color: white
}

.svg-inline--fa {
  cursor: pointer;
  font-size: 20px;
  
}

.copy {text-align: center;
font-size: 10px;
}

@media (max-height: 620px ) {
  /* .container .logo {
    height: 80px;
  } */

  footer{
    /* position: relative; */
    display: none;
  }
  
}



</style>


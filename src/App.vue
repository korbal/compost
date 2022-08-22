<template>

<!-- HEADER START -->
  <section id="header">
    <div class="container">
      
      <div class="logo">
          <router-link :to="{name: 'Home'}"> 
          <img src="./assets/cici-logo.png" alt="" class="logo">
          </router-link>

       <div class="version">
          version 0.26 (updated: 2022-08-21)
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
  <section id="footer">
    <div class="container">
      <div class="footer">
        <div class="about">About</div>
        <div class="suggest">Suggest Item</div>
        <div class="suggest">Share!</div>
        
      </div>
    </div>
  </section>
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
    margin: 0 auto;
    padding: 0 20px; 
   
}

.container .footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* margin-top: 30px; */
  color: white;
  
}

.container .footer div {
  display: flex;
  
  justify-content: space-around;
  margin-top: 30px;
  color: white;
  margin-left:0px;
  padding: 50px 50px
  
}

.container .logo {
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  

}

.version {
  font-size: 12px;
  color: white;
  text-align: center;
  margin-top: 10px;
}

@media (max-width: 768px) {
  .container .logo {
    height: 80px;
  }
  
}

</style>


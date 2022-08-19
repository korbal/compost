<template>
  <section id="sec-two">
    <div class="container">
      <div class="row">
        
        <div class="flex-item item-two">
          
          <router-link :to="{name: 'Home'}"> 
          <img src="./assets/cici-logo.png" alt="" class="logo">
          </router-link>
        </div>
        
      </div>
    </div>
  </section>

  <section id="sec-two">
    <div class="container">
      <div class="row find-out">
        
        <div class="flex-item item-two">
          <p></p>
        </div>
        <div class="flex-item item-two">
          <p>version 0.23 (updated: 2022-08-19)</p>
        </div>
        
      </div>
    </div>
  </section>

  <section id="sec-three">
    <div class="container">
      <div class="row">
        <div class="flex-item item-one">
          <p></p>
        </div>
        <div class="flex-item item-two searchbox">
           
           <!--This is the searchbox-->
          <router-view />

        </div>
        <div class="flex-item item-three">
          <p></p>
        </div>
      </div>
    </div>
  </section>

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

section {
    display: flex;
}

.container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin: 0 auto;
}

.row {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    justify-content: space-around;
}

.logo {
    width: 80%;
    height: 80%;
    margin: 0 auto;
}

.find-out {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
    color: white;
    
}
.searchbox {
  margin-top: 30px;
}

</style>


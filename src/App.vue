<template>
  <!-- HEADER START -->
  <section id="header">
    <div class="container">
      <div class="logo">
        <router-link :to="{ name: 'Home' }">
          <img src="./assets/cici-logo.png" alt="" class="logo" />
        </router-link>

        <div class="version">version 0.7 (updated: 2022-09-08)</div>
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
        <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
        <li><router-link :to="{ name: 'About' }">About</router-link></li>
        <li><router-link :to="{ name: 'Suggest' }">Help us!</router-link></li>
      </ul>
      <ul class="flex-row">
        <li>
          <fa @click="shareFacebook()" :icon="['fab', 'facebook']" />
        </li>
        <li>
          <fa @click="sharePinterest()" :icon="['fab', 'pinterest']" />
        </li>
        <!-- <li>
          <fa @click="shareInstagram()" :icon="['fab', 'instagram']"  />          
        </li> -->
        <li>
          <fa @click="shareTwitter()" :icon="['fab', 'twitter']" />
        </li>
      </ul>
      <p class="copy">&copy; 2022 CanICompostIt.com</p>
    </div>
  </footer>

  <!--FOOTER END -->
</template>

<!-- SCRIPT START -->
<script setup>
// TODO: refactor hardcoded values based on this https://www.youtube.com/watch?v=OfLvQ8KtW2g

const shareFacebook = () => {
  window.open(
    "https://www.facebook.com/sharer.php?u=" + "canicompostit.com",
    "sharer",
    "toolbar=0,status=0,width=626,height=436"
  );
  return false;
};

// TODO: rewrite request coz copy does not go through
const sharePinterest = () => {
  window.open(
    "https://pinterest.com/pin/create/bookmarklet/?media=" +
      "canicompostit.com/img/carrots_small.3a2d84b8.jpg" +
      "&url=" +
      "canicompostit.com" +
      "&description=" +
      "The fastest way to find out if you can throw something in the compost bin",
    "sharer",
    "toolbar=0,status=0,width=626,height=436"
  );
  return false;
};

const shareTwitter = () => {
  window.open(
    "https://twitter.com/share?url=" +
      "canicompostit.com" +
      "&text=" +
      "The fastest way to find out if you can throw something in the compost bin -->",
    "sharer",
    "toolbar=0,status=0,width=626,height=436"
  );
  return false;
};

// TODO: instagram share does not work. I hid it in the template for now coz it's complicated as cunt
const shareInstagram = () => {
  window.open(
    "https://www.instagram.com/accounts/login/?next=%2Faccounts%2Fedit%2F&source=auth_switcher",
    "sharer",
    "toolbar=0,status=0,width=626,height=436"
  );
  return false;
};
</script>
<!-- SCRIPT END -->

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
  background-image: url("./assets/carrots_small.jpg");
  background-size: cover;
  max-height: 100vh;
  height: 100vh;
}

.container {
  max-width: 1100px;
  width: 90%;
  margin: auto;
  padding: 0px 20px;
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
  padding: 10px 200px;
  margin: 0px -20px;
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

footer ul {
  margin-bottom: 0px;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
}

footer li {
  padding: 0 15px;
  margin-bottom: 16px;
}

footer a {
  font-size: 14px;
  font-weight: bold;
  color: white;
}

.svg-inline--fa {
  cursor: pointer;
  font-size: 20px;
}

.copy {
  text-align: center;
  font-size: 10px;
}

@media (max-width: 480px) {
  /* .container .logo {
    height: 80px;
  } */
  body {
    overflow-y: scroll;
  }

  footer {
    /* position: relative; */
    display: none;
  }
}
</style>

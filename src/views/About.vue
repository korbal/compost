<template>

  <p class="text">Hello!</p>
  <p class="text">This is a simple app that will help you find out if you can throw something in the compost bin.</p>
  <p class="text">It's based on my, and a ton of helpful people' research. </p> 
  <p class="text">I've created canicompostit.com because I was tired of always Googling everything. I hope you find it useful!</p>
  <p class="text">If you've come across something that you disagree with, or missing from the database, please reach out <a href="mailto:korosibalint@yahoo.co.uk?subject=composting">in email here</a>, or on <a href="https://twitter.com/korosibalint">Twitter here.</a></p>
  <p class="text">Thank you! <br > Balint</p>
</template>


<script>
import SearchBar from "../components/SearchBar.vue";
export default {
  name: "About",
  components: {SearchBar },
  data() {
    return {
      
    };
  }
 
};
</script>

<style>
.text {

  color: white;
  margin-top: 20px;
  font-size: 20px;
}
a {
  color: blue;
  text-decoration: underline;
}
</style>
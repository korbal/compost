<template>
  <div class="answer">{{ $attrs.isCompostable }}</div>

  <h2 v-if="$attrs.isCompostable === 'YES 🎉'">you can throw</h2>
  <h2 v-else-if="$attrs.isCompostable === 'NO ✋🏼'">you can't throw</h2>
  <h2 v-else>You probably can't throw</h2>

  <div class="item">{{ $attrs.name }}</div>
  <h2>in the compost bin.<br />⬇️</h2>
  <!-- <p class="description">
    {{ $attrs.description }}
  </p> -->

  <!-- TODO: create on the fly url generation, so users can click through generic class without the searchbox init -->
  <p class="description">
    <span v-html="$attrs.description" ></span>
    <!-- TODO: Enable this if reference column is filled with everything -->
    <!-- <a :href="$attrs.reference" target="_blank"> reference</a> -->
  </p>

  <!-- <h3>
    <a href="https://ot-ev-ot-nyelv.ck.page/afd869e9c0
">Want to improve your compost quality?</a>
  </h3>

  <br />
  <br /> -->
  <p>
    <router-link to="/">Search again </router-link>
  </p>
</template>

<!-----------SCRIPT-------------->

// TODO: for some fucking reason, props are not accepted in the script setup. I used the
$attrs instead, which i have no idea what they are. refactor for proper props
<script setup>
import { defineProps } from "@vue/runtime-core";

const props = defineProps(["item"]);
</script>

<!-----------STYLE--------------->



<style scoped >

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.answer {
  color: #5aab49;
  background-color: #e7e22a;
  padding: 5px 20px;
  margin-top: 30px;
  border-radius: 10px;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  text-transform: uppercase;
}

.item {
  color: white;
  background-color: #01885d;
  padding: 5px 20px;
  border-radius: 10px;
  text-align: center;
  margin: 0px;
  font-size: 40px;
}

.description {
  color: white;
  /* margin-block: 30px; */
  margin-top: 0px;
  font-size: 20px;
}

h2 {
  font-size: 25px;
  color: white;
  text-align: center;
  margin: 20px;
}

/* TODO: apply style to description and add description */
/* .desciption {
  color: white;
  text-align: center;
  margin: 50px;
  font-size: 500px;
  
} */
a {
  color: #e7e22a;
  text-decoration: underline;
}


</style>

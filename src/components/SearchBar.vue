<template>
   <input
     type="text"
     v-model="input"
     placeholder="start typing..." />
  <div
    class="item fruit"
    v-for="fruit in filteredList()"
    :key="fruit"
    v-show="input.length !=0"
    >
    <p>{{ fruit }}</p>
  </div>
  <div
    class="item error"
    v-if="input&&!filteredList().length">
     <p>No results found!</p>
  </div>

</template>


<script setup>
import { onBeforeMount, ref } from "vue";

let input = ref("");
let fruits = [];

//let itemList = ref([]);

onBeforeMount(() => {
  getData();
});

function filteredList() {
  return fruits.filter((fruit) =>
    fruit.toLowerCase().includes(input.value.toLowerCase())
  );
}


async function getData() {
 const res = await fetch("https://script.google.com/macros/s/AKfycbw43aEKD9O-LhXZWcz-FYZ4a-wVf-wtnbK4vsjPzDXV6Ym6xevDvQMmZPv9NOODfjIGZg/exec");
 const json = await res.json();
  
  for (const element of json.items) {
    fruits.push(element.name);
  }

}


</script>





<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

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
}

input {
  display: block;
  width: 350px;
  margin: 20px auto;
  padding: 10px 45px;
  background: white url("../assets/search-icon.svg") no-repeat 15px center;
  background-size: 15px 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.item {
  width: 350px;
  margin: 0 auto 10px auto;
  padding: 10px 20px;
  color: white;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}

.fruit {
  background-color: rgb(97, 62, 252);
  cursor: pointer;
}

.error {
  background-color: tomato;
}
</style>
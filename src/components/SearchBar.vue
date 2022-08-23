<template>
   <input
    id="searchbox"
     v-model="input"
     @input="input = $event.target.value"
     placeholder="start typing to find out..."
     type="text"
   />
  <div
    v-show="input.length !=0"
    v-for="item in filteredList()"
    :key="item.id"
    class="item-bg item-class"
  >
    <router-link
      :to="{
        name: 'ItemDetails',
        params: {
          item: item,
          id: item.id,
          name: item.name,
          isCompostable: item.isCompostable,
          description: item.description,
          // TODO: something is not right with image. wtf
          //image: image.image_url
        }
      }"
    >
      <p>{{ item.name }}</p>
    </router-link>
  </div>
  <div
    v-if="input&&!filteredList().length"
    class="item-bg error"
  >
     <p>No results found!</p>
  </div>

</template>

<script setup>
import { onBeforeMount, onMounted, ref } from "vue";

let input = ref("");
let items = [];

//let itemList = ref([]);

onBeforeMount(() => {
  getData();
});

onMounted(() => {
  focusOnSearch();
});

function filteredList() {
  return items.filter((item) =>
    item.name.toLowerCase().includes(input.value.toLowerCase())
  );
}

function focusOnSearch() {
 document.querySelector("input").focus();
}

async function getData() {
 const res = await fetch("https://script.google.com/macros/s/AKfycbw43aEKD9O-LhXZWcz-FYZ4a-wVf-wtnbK4vsjPzDXV6Ym6xevDvQMmZPv9NOODfjIGZg/exec");
 const json = await res.json();
  
  for (const element of json.items) {
    items.push(element);
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
  padding: 0;
  padding-top: 20px;
  min-height: 100vh;
  background-color: rgb(234, 242, 255);
}

input {
  display: block;
  width: 350px;
  margin: 20px;
  padding: 10px 45px;
  background: white url("../assets/search-icon.svg") no-repeat 15px center;
  background-size: 15px 15px;
  font-size: 16px;
  border: none;
  border-radius: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.item-bg {
  width: 350px;
  margin: 0 auto 10px auto;
  padding: 10px 20px;
  color: white;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}

.item-class {
  /* background-color: rgb(97, 62, 252); */
  background-color: #5aab49;
  cursor: pointer;

}

a {
    color: white;
    text-decoration: none;
}

.error {
  background-color: tomato;
}

#searchbox {
  margin-top: 100px;
  
}
</style>
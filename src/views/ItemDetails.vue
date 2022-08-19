<template>
 
<h2>Can you put</h2> 
 <h3> {{$attrs.name}} </h3>
<h2>in the compost bin?</h2>
<h4> {{$attrs.isCompostable}} </h4>

</template>



<!-----------SCRIPT-------------->

<script setup>
import { defineProps } from "@vue/runtime-core";

const props = defineProps(['item']);

</script>


<!-----------STYLE--------------->
<style>

h2{
  font-size: 20px;
  color: white;
  text-align: center;
  margin: 20px;
}

h3{
  color: #5aab49;
  background-color: #e7e22a;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
}

h4{
  color: white;
  background-color: #01885d;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  margin: 20px;
}

</style>
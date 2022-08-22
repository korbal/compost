<template>
 
<div class="answer">{{$attrs.isCompostable}}</div>

<h2 v-if="$attrs.isCompostable === 'yes'">you can throw</h2>
<h2 v-else-if="$attrs.isCompostable === 'no'">you can't throw</h2>
<h2 v-else>You probably can't throw</h2>

<div class="item"> {{$attrs.name}}</div>
<h2>in the compost bin.</h2>
<p class="description">
  {{$attrs.description}}
</p>

</template>



<!-----------SCRIPT-------------->

<script setup>
import { defineProps } from "@vue/runtime-core";

const props = defineProps(['item']);

</script>


<!-----------STYLE--------------->
<style>

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.answer {
  color: #5aab49;
  background-color: #e7e22a;
  padding: 10px 20px;
  margin-top: 40px;
  border-radius: 10px;
  text-align: center;
  font-weight: bold;
  font-size: 60px;
  text-transform: uppercase;
}

.item{
  color: white;
  background-color: #01885d;
  padding: 10px 20px;
  border-radius: 10px;
  text-align: center;
  margin: 0px;
  font-size: 40px;
}

.description {
  color: white;
  margin-block: 30px;
}

h2{
  font-size: 40px;
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


</style>
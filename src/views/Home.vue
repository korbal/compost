<template>
  
  <SearchBar />
  
</template>

<script>
// @ is an alias to /src
import SearchBar from "../components/SearchBar.vue";


export default {
  name: "Home",
  components: { SearchBar },
  data() {
    return {
      items: []
    };
  }
};
</script>
<style>


</style>

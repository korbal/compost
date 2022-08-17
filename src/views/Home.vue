<template>
  
  <SearchBar />
  
</template>

<script>
// @ is an alias to /src
import SearchBar from "../components/SearchBar.vue";

window.TallyConfig = {
  "formId": "m68V8B",
  "popup": {
    "emoji": {
      "text": "👋",
      "animation": "wave"
    },
    "open": {
      "trigger": "time",
      "ms": 5000
    }
  }
};


export default {
  name: "Home",
  components: { SearchBar },
  data() {
    return {
      items: []
    };
  },
  mounted() {
    // adds tally form to page. ref: https://stackoverflow.com/questions/45047126/how-to-add-external-js-scripts-to-vuejs-components

    // let addScript = document.createElement("script");
    // addScript.setAttribute("src", "https://tally.so/widgets/embed.js");
    // document.head.appendChild(addScript);
  },
};


</script>
<style>

</style>

<style scoped src="./MainPage.css"></style>
<template src="./MainPage.html"></template>

<script lang="ts">

  import Header from "@/components/Header/Header.vue";
  import MainBody from "@/components/MainBody/MainBody.vue";
  import MainGrid from "@/components/MainGrid/MainGrid.vue";

  export default {
    name: 'main-page',
    components: {
      Header,
      MainBody,
      MainGrid
    }
  }

</script>
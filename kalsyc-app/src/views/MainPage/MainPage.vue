<style scoped src="./MainPage.css"></style>
<template src="./MainPage.html"></template>

<script lang="ts">

  import Header from "@/components/Header/Header.vue";
  import MainBody from "@/components/MainBody/MainBody.vue";
  import { Options, Vue } from 'vue-class-component';

  @Options({
    components: {
      Header,
      MainBody
    }
  })
  export default class MainPage extends Vue {}

</script>
<style scoped src="./MainPage.css"></style>
<template src="./MainPage.html"></template>

<script lang="ts">

import Header from "@/components/Header/Header.vue";
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
    Header
  }
})
export default class MainPage extends Vue {
  
}

</script>
<style scoped src="./Header.css"></style>
<template src="./Header.html"></template>

<script lang="ts">

  import { Vue } from 'vue-class-component';

  export default class Header extends Vue {
  
    sendEmail(): void {
      window.location.assign("mailto:kalsycofficial@gmail.com");
    }
}

</script>
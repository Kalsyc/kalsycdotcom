<style scoped src="./MainPage.css"></style>
<template src="./MainPage.html"></template>

<script lang="ts">
  import MainHeader from '@/components/MainHeader/MainHeader.vue';
  import MainBody from '@/components/MainBody/MainBody.vue';
  import MainGrid from '@/components/MainGrid/MainGrid.vue';
  import MainFooter from '@/components/MainFooter/MainFooter.vue';

  export default {
    name: 'main-page',
    components: {
      MainHeader,
      MainBody,
      MainGrid,
      MainFooter,
    },
  };
</script>

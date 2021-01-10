<style scoped src="./MainGrid.css"></style>
<template src="./MainGrid.html"></template>

<script lang="ts">
  import { Ref, ref } from 'vue';

  export default {
    name: 'main-grid',
    setup() {
      const currentToggle: Ref<string> = ref<string>('projects');
    },
  };
</script>

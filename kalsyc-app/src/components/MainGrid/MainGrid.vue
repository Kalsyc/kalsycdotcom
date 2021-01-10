<style scoped src="./MainGrid.css"></style>
<template src="./MainGrid.html"></template>

<script lang="ts">
  import { Ref, ref } from 'vue';
  import Project from '../Project/Project.vue';

  export default {
    name: 'main-grid',
    components: { Project },
    setup() {
      const currentToggle: Ref<string> = ref<string>('projects');
    },
  };
</script>

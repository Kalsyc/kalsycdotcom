<style scoped src="./MainGrid.css"></style>
<template src="./MainGrid.html"></template>

<script lang="ts">
  import Project from '../Project/Project.vue';
  import { PROJECTS, ProjectInterface } from '../../assets/writeup/projects';

  export default {
    name: 'main-grid',
    components: { Project },
    setup() {
      const projects: ProjectInterface[] = PROJECTS;
      return { projects };
    },
  };
</script>

<style scoped src="./MainGrid.css"></style>
<template src="./MainGrid.html"></template>

<script lang="ts">
  import Project from '../Project/Project.vue';
  import Internship from '../Internship/Internship.vue';
  import Teaching from '../Teaching/Teaching.vue';
  import { onMounted } from 'vue';
  import { PROJECTS, ProjectInterface } from '../../assets/writeup/projects';
  import { TEACHINGS, TeachingInterface, INTERNSHIPS, InternshipInterface } from '../../assets/writeup/experiences';

  export default {
    name: 'main-grid',
    components: { Project, Internship, Teaching },
    setup() {
      const projects: ProjectInterface[] = PROJECTS;
      const teachings: TeachingInterface[] = TEACHINGS;
      const internships: InternshipInterface[] = INTERNSHIPS;
      onMounted(() => {
        const grid: HTMLElement | null = document.getElementById('project-grid');
        //Need to find a way to do it responsively
        /*
        if (grid && window.innerWidth >= 1920) {
          grid.style.gridTemplateColumns = `repeat(${Math.min(projects.length, 5)}, 1fr`;
        }
        */
      });
      return { projects, teachings, internships };
    },
  };
</script>

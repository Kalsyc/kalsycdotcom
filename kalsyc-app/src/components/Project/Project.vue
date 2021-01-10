<style scoped src="./Project.css"></style>
<template src="./Project.html"></template>

<script lang="ts">
  import { ProjectInterface } from '@/assets/writeup/projects';

  function useNavigate(url: string): void {
    window.location.href = url;
  }

  export default {
    name: 'project',
    props: ['projectData'],
    setup() {
      const navigate: Function = useNavigate;
      return { navigate };
    },
  };
</script>

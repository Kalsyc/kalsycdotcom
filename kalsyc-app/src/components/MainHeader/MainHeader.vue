<style scoped src="./MainHeader.css"></style>
<template src="./MainHeader.html"></template>

<script lang="ts">
  function useSendEmail(): void {
    window.location.assign('mailto:kalsycofficial@gmail.com');
  }

  function useToggleMenu(): void {
    const element: HTMLElement | null = document.getElementById('nav-toggle');
    if (element) {
      element.classList.toggle('nav-toggle');
    }
  }

  export default {
    name: 'main-header',
    setup() {
      const sendEmail: Function = useSendEmail;
      const toggleMenu: Function = useToggleMenu;

      return { sendEmail, toggleMenu };
    },
  };
</script>

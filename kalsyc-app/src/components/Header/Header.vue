<style scoped src="./Header.css"></style>
<template src="./Header.html"></template>

<script lang="ts">

  function useSendEmail(): void {
    window.location.assign("mailto:kalsycofficial@gmail.com");
  }

  function useToggleMenu(): void {
          const element: HTMLElement | null = document.getElementById("nav-toggle");
      if (element) {
        element.classList.toggle("nav-toggle");
      }
  }

  export default {
    name: "header",
    setup() {
      const sendEmail: Function = useSendEmail;
      const toggleMenu: Function = useToggleMenu;
      return { sendEmail, toggleMenu };
    }
  }

</script>
<template>
  <section class="header__menu">
    <Logo />
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Logo from "@/components/Logo.vue";

export default defineComponent({
  name: "HeaderMenu",
  components: { Logo },
});
</script>

<style scoped>
.header__menu {
  display: grid;
  grid-template-columns: 1fr max-content min-content;
  align-items: center;
  padding: 36px 40px 10px 40px;
  position: fixed;
  width: 100%;
  top: 0;
  background-color: var(--clr-sec);
  z-index: 100;
  transition: all 0.3s ease-out;
}
</style>

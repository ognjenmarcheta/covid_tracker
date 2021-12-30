<template>
  <div class="logo-box">
    <a href="#">
      <img
        src="../assets/images/covid-19.svg"
        class="covid-19"
        alt="covid-19"
      />
      <img src="../assets/images/logo.svg" alt="logo" />
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Logo",
  components: {},
});
</script>

<style scoped>
.logo-box {
  width: 80px;
  height: 80px;
  transition: all 0.3s ease-out;
}

.covid-19 {
  position: fixed;
  width: 80px;
  height: 80px;
  transform: scale(0.4);
  left: 70px;
  top: 60px;
}
</style>

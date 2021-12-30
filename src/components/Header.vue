<template>
  <header class="header">
    <section class="header-hero">
      <div class="header-features">
        <div class="home-form-header">
          <h1 class="home-form__title">Interview Challenge</h1>
        </div>
        <ul class="home-form__list">
          <li>
            <Checkmark />
            <span>Data from covid19api.com</span>
          </li>
          <li>
            <Checkmark />
            <span>Totals row feature!</span>
          </li>
          <li>
            <Checkmark />
            <span>Filter and search feature!</span>
          </li>
        </ul>
      </div>

      <div class="header__promo-video"></div>
    </section>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Checkmark from "@/components/Checkmark.vue";

export default defineComponent({
  name: "Header",
  components: { Checkmark },
});
</script>

<style scoped>
header {
  height: 320px;
  margin-top: 160px;
}

header:after {
  content: "";
  width: 100%;
  height: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 640px, 0 480px);
  background-color: var(--clr-sec);
  position: absolute;
  top: 0;
  left: 0;
  z-index: -100;
  box-sizing: border-box;
}

.header-hero {
  display: flex;
  padding: 0px;
  max-width: 900px;
  width: 95%;
  margin: auto;
  align-items: stretch;
  justify-items: stretch;
}

.header-features {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content;
  place-items: start;
  row-gap: 33px;
  align-content: start;
  justify-self: left;
  width: 50%;
}

.home-form-header {
  width: 370px;
  padding-top: 16px;
}

.home-form__title {
  font-size: var(--fz-large);
  font-weight: 400;
  line-height: 3.6rem;
  text-align: left;
  letter-spacing: 0.05rem;
  color: var(--clr-prim);
}

.home-form__list {
  font-size: var(--fz-mediumplus);
  color: var(--clr-prim);
  padding-left: 0px;
}

.home-form__list > li {
  display: flex;
  align-items: center;
}

.home-form__list > li > svg {
  margin-right: 10px;
}

.header__promo-video {
  pointer-events: none;
  position: relative;
  height: 450px;
  background-image: url(../assets/images/hero-cfo.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  width: 100%;
  display: grid;
  place-items: center;
  margin-top: -60px;
  animation: hoverVirus 6s infinite;
}

@-webkit-keyframes hoverVirus {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>

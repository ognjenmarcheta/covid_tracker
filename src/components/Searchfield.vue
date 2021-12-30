<template>
  <div class="cfo__form-inputbox">
    <input
      class="cfo__form-input-field"
      type="text"
      id="firstname"
      placeholder="Filter by country name"
      required="required"
      v-bind:value="value"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Searchfield",
  components: {},
  props: ["value"],
});
</script>

<style scoped>
.cfo__form-inputbox {
  width: 100%;
}

.cfo__form-inputbox input {
  width: 100%;
  height: 100%;
  border: 2px solid var(--clr-gold);
  text-align: center;
  padding: 14px 16px 14px 16px;
  border-radius: 4px;
  font-size: var(--fz-medium);
  line-height: 22px;
  color: var(--clr-black-high-emphasis);
  outline: none;
}
</style>

<template>
  <tr>
    <td>{{ countryData.Country }}</td>
    <td>{{ countryData.TotalConfirmed }}</td>
    <td>{{ countryData.TotalDeaths }}</td>
    <td>{{ countryData.TotalRecovered }}</td>
  </tr>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import CountryData from "@/types/CountryData";

export default defineComponent({
  name: "CountryElement",
  components: {},
  props: {
    countryData: {
      type: Object as PropType<CountryData>,
      required: true,
    },
  },
});
</script>

<style scoped></style>

<template>
  <div class="app">
    <HeaderMenu />
    <Header />
    <div class="table-container">
      <Searchfield
        v-bind:value="searchTerm"
        v-on:input="searchTerm = $event.target.value"
      />

      <CovidTable :summaryData="summaryData" :search-term="searchTerm" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Header from "@/components/Header.vue";
import HeaderMenu from "@/components/HeaderMenu.vue";
import Searchfield from "@/components/Searchfield.vue";
import CovidTable from "@/components/CovidDataTable/CovidTable.vue";
import SummaryData from "@/types/SummaryData";
import CovidService from "@/services/CovidService";

export default defineComponent({
  name: "App",
  components: { CovidTable, Searchfield, HeaderMenu, Header },
  data() {
    return {
      summaryData: ref<SummaryData>(),
      searchTerm: "",
    };
  },
  created() {
    CovidService.getSummary()
      .then((response) => {
        this.summaryData = response.data;
      })
      .catch((error) => {
        console.log(`There is a problem with the Covid API: ${error.res}`);
      });
  },
});
</script>

<style>
.table-container {
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

@media (max-width: 1000px) {
  .table-container {
    width: 100%;
    padding: var(--clr-table-container-padding);
  }
}

/* media queries mobile */
@media (max-width: 480px) {
  .table-container {
    width: 100%;
    padding: var(--clr-table-container-padding);
  }
}

/* media queries small mobile */
@media (max-width: 320px) {
  .table-container {
    width: 100%;
    padding: var(--clr-table-container-padding);
  }
}
</style>

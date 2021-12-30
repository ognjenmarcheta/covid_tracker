<template>
  <div class="table-wrap">
    <table class="covid-table">
      <thead>
        <tr>
          <th>Country name</th>
          <th>Confirmed cases</th>
          <th>Total number of deaths</th>
          <th>Total number of recoveries</th>
        </tr>
      </thead>
      <tbody class="table-body">
        <CountryElement
          v-for="country in filteredData.Countries"
          :key="country.CountryCode"
          :countryData="country"
        />
      </tbody>
    </table>
    <table class="covid-table">
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody class="table-body">
        <tr>
          <td>TOTALS:</td>
          <td>{{ filteredData.Global.TotalConfirmed }}</td>
          <td>{{ filteredData.Global.TotalDeaths }}</td>
          <td>{{ filteredData.Global.TotalRecovered }}</td>
        </tr>
      </tbody>
    </table>
    <div class="zero-state" v-if="!filteredData.Countries.length">
      No results
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import CountryElement from "@/components/CovidDataTable/CountryElement.vue";
import SummaryData from "@/types/SummaryData";
import CountryData from "@/types/CountryData";
import GlobalData from "@/types/GlobalData";

export default defineComponent({
  name: "CovidTable",
  components: { CountryElement },
  props: {
    summaryData: {
      type: Object as PropType<SummaryData>,
      required: true,
    },
    searchTerm: {
      type: String,
      default: "",
    },
  },
  computed: {
    filteredData() {
      if (!this.summaryData) return { Countries: [] };
      const { Countries } = this.summaryData;
      const { searchTerm } = this;
      const filteredCountries = Countries.filter((country: CountryData) => {
        return country.Country.toLowerCase().includes(searchTerm.toLowerCase());
      });

      const globalData = filteredCountries.reduce<GlobalData>(
        (
          sum,
          {
            TotalRecovered,
            NewConfirmed,
            TotalConfirmed,
            NewDeaths,
            TotalDeaths,
            NewRecovered,
          }
        ) => {
          return {
            TotalRecovered: sum.TotalRecovered + TotalRecovered,
            NewConfirmed: sum.NewConfirmed + NewConfirmed,
            TotalConfirmed: sum.TotalConfirmed + TotalConfirmed,
            NewDeaths: sum.NewDeaths + NewDeaths,
            TotalDeaths: sum.TotalDeaths + TotalDeaths,
            NewRecovered: sum.NewRecovered + NewRecovered,
          };
        },
        {
          TotalRecovered: 0,
          NewConfirmed: 0,
          TotalConfirmed: 0,
          NewDeaths: 0,
          TotalDeaths: 0,
          NewRecovered: 0,
        }
      );

      return {
        Countries: filteredCountries,
        Global: globalData,
      };
    },
  },
});
</script>

<style>
tbody {
  display: block;
  height: auto;
  overflow: auto;
}

tbody::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
tbody {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

thead,
tbody tr {
  display: table;
  width: 100%;
  table-layout: fixed;
}

.table-wrap {
  width: 100%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  margin: 25px 0;
}

.table-body {
  overflow: hidden;
  overflow-y: scroll;
  max-height: 300px;
}

.covid-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 1.2em;
  min-width: 400px;
}

.covid-table thead tr {
  background-color: var(--clr-gold);
  color: #ffffff;
  text-align: left;
}

.covid-table th,
.covid-table td {
  padding: 12px 15px;
}

.covid-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.covid-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.covid-table tbody tr:last-of-type {
  border-bottom: 2px solid var(--clr-sec);
}

.zero-state {
  text-align: center;
  font-size: 1.5em;
  color: var(--clr-gold);
  padding: 10px 20px;
}
</style>

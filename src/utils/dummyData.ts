import SummaryData from "@/types/SummaryData";

const dummyCovidData: SummaryData = {
  Global: {
    NewConfirmed: 10,
    TotalConfirmed: 10,
    NewDeaths: 10,
    TotalDeaths: 10,
    NewRecovered: 10,
    TotalRecovered: 10,
  },
  Countries: [
    {
      Country: "India",
      CountryCode: "IN",
      Slug: "india",
      NewConfirmed: 4,
      TotalConfirmed: 4,
      NewDeaths: 4,
      TotalDeaths: 4,
      NewRecovered: 4,
      TotalRecovered: 4,
      Date: "2020-04-06T06:00:00Z",
    },
    {
      Country: "Bosnia and Herzegovina",
      CountryCode: "BA",
      Slug: "bosnia",
      NewConfirmed: 6,
      TotalConfirmed: 6,
      NewDeaths: 6,
      TotalDeaths: 6,
      NewRecovered: 6,
      TotalRecovered: 6,
      Date: "2020-04-06T06:00:00Z",
    },
  ],
};

export default dummyCovidData;

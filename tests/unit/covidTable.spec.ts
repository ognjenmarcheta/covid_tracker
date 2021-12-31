import { shallowMount } from "@vue/test-utils";
import CovidTable from "@/components/CovidDataTable/CovidTable.vue";
import dummyCovidData from "@/utils/dummyData";

describe("CovidTable.vue", () => {
  it("renders props.msg when passed", () => {
    const searchTerm = "Bosnia";
    const wrapper = shallowMount(CovidTable, {
      props: { summaryData: dummyCovidData, searchTerm },
    });

    //Since we filtered the data by string "Bosnia" we should see only one row and total confirmed column should be equal to 6
    expect(wrapper.find("#total_confirmed").text()).toBe("6");
  });

  it("Check if table is correctly filtered by India string", () => {
    const searchTerm = "India";
    const wrapper = shallowMount(CovidTable, {
      props: { summaryData: dummyCovidData, searchTerm },
    });

    expect(wrapper.find("#total_confirmed").text()).toBe("4");
  });

  it("Check if table is correctly filtered by Bosnia string", () => {
    const searchTerm = "India";
    const wrapper = shallowMount(CovidTable, {
      props: { summaryData: dummyCovidData, searchTerm },
    });

    expect(wrapper.find("#total_confirmed").text()).toBe("4");
  });

  it("Check if table is correctly filtered by invalid query", () => {
    const searchTerm = "dklasjdlkasjdlakj";
    const wrapper = shallowMount(CovidTable, {
      props: { summaryData: dummyCovidData, searchTerm },
    });

    expect(wrapper.find(".zero-state").isVisible()).toBe(true);
  });

  it("Check if table is correctly filtered by empty query", () => {
    const searchTerm = "";
    const wrapper = shallowMount(CovidTable, {
      props: { summaryData: dummyCovidData, searchTerm },
    });

    expect(wrapper.find("#total_confirmed").text()).toBe("10");
  });
});

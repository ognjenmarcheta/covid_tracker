# covid_please_end

##DEMO
https://ognjenmarcheta.github.io/covid_tracker/

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Challenge description

```Helu.io
Frontend development challenge
If you have any questions or "blockers" regarding the task or premises, please feel free to send
your questions to: melanie@helu.io
Unfortunately, COVID-19 is a serious issue nowadays. We would like you to create a SPA in
Vue that helps to track data about this virus.
The SPA should consume data from https://covid19api.com/ and have the following features:
1. Display the data from the API in a tabular format, with the following columns:
● Country name,
● The current total of the number of confirmed cases, since day one,
● The current total of the number of deaths, since day one,
● The current total of the number of recoveries, since day one,
2. The table view should also have a “TOTALS” row, which shows the sum of the displayed
data in each column.
3. In the UI, there should be an input field that filters/searches for the input value in the
data (country names) so that the view reflects the filtered dataset.
Premises:
● At least one of the components must have a test.
● The API implementation must be done in a service outside the components.
● Only use publicly available resources during the creation of the SPA.
● The SPA must be published, so that we can access both the UI (production version) and
the development code, remotely. Do not send the code alone.
● You may style your project with a library.
Extra points:
● If you implement it in Vue 3.
● If you implement it in Typescript.

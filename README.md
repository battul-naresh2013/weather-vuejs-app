# Weather Forecasting Application with VueJS
A single‐page web application which allows users to browse weather of any city . It uses the following open api: https://openweathermap.org/api
You can search weather forecast for 5 days with data every 3 hours by city.

## Installations
## Vue CLI
```
This has some advantages.
Please refer below urls

https://cli.vuejs.org/

https://cli.vuejs.org/guide/

```
## Installation of vue/cli
Note: You need administrator privileges to execute these unless npm was installed on your system through a Node.js version manager.

```
npm install -g @vue/cli

```
Note: You can check you have the right version with this command:
vue --version

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### City name list ------
```
Please use below cities only.
For IN : Hyderabad, Mumbai, Bangalore, Chennai, Kolkata, Delhi, Pune, Thane, Solapur, 
For NL : Amsterdam, Rotterdam, Utrecht, Eindhoven, Tilburg, Groningen, Nunspeet, Leek, Epe, Oldebroek

Note: As I didn't find cities api from https://openweathermap.org/api, instead there is a huge json file data for cities.
So, I extracted few of them and used in this application.
```

### Project Guidelines ------------

1) File Naming Convention, 
   Method Naming Convention, 
   Component Naming Convention,
   variable, object declaration : camelCase
   Example : userRoute.js, getName(), userProfileComponent, payLoad etc..

2) Folder Naming Convention, Components directives in vue : kabab-case
   Example : app-header, <app-header />

3) Vuex Standards:
   a. mutations: ALL_CAPS
      ex: ADD_EMPLOYEE
   b. actions: camelCaseSuffixAction
      ex: postEmployeeAction
   c. state: camelCase
      ex: allCities  

### Project dependencies and devDependencies ------------
1. axios:
   Promise based HTTP client for the browser.
   Please refer below url for more details:
   https://www.npmjs.com/package/axios   

2. bootstrap and bootstrap-vue:
   With BootstrapVue we can build responsive, mobile-first, and ARIA accessible projects on the web using Vue.js and the world's most popular front-end CSS library — Bootstrap v4.
   Please refer below url for more details:
   https://bootstrap-vue.js.org/docs

3. @vue/cli-plugin-unit-jest:
   Run unit tests with Jest. Jest as a JS unit testing framework and runner.
   Please refer below url for more details:
   https://jestjs.io/

   In jest.config.js: we can configure some key feature such as collectCoverage, collectCoverageFrom, coverageThreshold etc
   for getting exact code coverage with reports.

4. @vue/cli-plugin-e2e-cypress:
   This adds E2E testing support using Cypress.
   Cypress offers a rich interactive interface for running E2E tests, but currently only supports running the tests in Chromium.
   We can see colorful coverage report by opeing ../coverage/lcov-report/index.html via any browser.
   
   Please refer below url for more details:
   https://www.npmjs.com/package/@vue/cli-plugin-e2e-cypress

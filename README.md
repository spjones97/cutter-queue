# UNC-CH BeAM Laser Cutter Queue

### Technology

#### Front-End
Vue.js, vue-router, and Okta Vue SDK

#### Back-End
Node.js with Express, Okta JWT Verifier, Sequelize, and Finale.
I have also included an offloading secure authentication to Okta's OpenID Connect API that locks down protected routes and performs CRUD operations through a backend REST API server.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

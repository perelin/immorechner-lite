# immorechner-lite

...

LohntSichDas.de/Immobilie
LohntSichDas.de/Rente
...



## Deployment

### Heroku 

With a static heroku site
https://gist.github.com/hone/24b06869b4c1eca701f9
https://cli.vuejs.org/guide/deployment.html#heroku 


## Build Setup Vue-CLI

npm run serve
vue ui

## Todos

Monat vs Jahr? Im Code immer Jahr, zur Ausgabe/Eingabe Monat wo angebracht
Tilgung vs Laufzeit?
Liquidität/Cashflow als Begriff verwenden

## Names

https://docs.google.com/spreadsheets/d/1O1Kke6nAGTxTE5G9zt27n3CYPwQrn6mWK348ml99PFs/edit#gid=48529872

Bruttomietrendite pa: yieldRentGrossYear
Nettomietrendite pa: yieldRentNetYear
Kaufpreis: priceProperty
Nettokaltmiete pa: rentColdNetYear

## Dev Notes

### 2019-10-11

2do: on change month/year yiled value needs to update

### 2019-10-08

parcel is not working for some reason. Some Components are missing.
vue-cli is working fine

### Old

https://www.whatismydayrate.com/

https://github.com/vuejs-templates/webpack-simple 

https://vuejs.org/v2/guide/single-file-components.html

https://coolors.co/2e5266-6e8898-9fb1bc-d3d0cb-e2c044

https://fontawesome.com/how-to-use/on-the-web/using-with/vuejs

https://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-dollars-currency-string-in-javascript?page=1&tab=votes#tab-top

https://babeljs.io/docs/en/babel-plugin-transform-object-rest-spread/
https://vuex.vuejs.org/guide/state.html#object-spread-operator

https://stackoverflow.com/questions/14447668/input-type-number-is-not-showing-a-number-keypad-on-ios

https://devcenter.heroku.com/articles/dyno-metadata

https://stackoverflow.com/questions/48009893/expose-environment-in-parceljs
https://github.com/parcel-bundler/parcel/issues/702

https://stackoverflow.com/questions/18672452/left-align-and-right-align-within-div-in-bootstrap

https://github.com/kevinongko/vue-numeric (alternative: https://github.com/vuejs-tips/v-money)
https://stackoverflow.com/questions/46106037/vuex-computed-property-name-was-assigned-to-but-it-has-no-setter/46106438
https://itnext.io/anyway-this-is-how-to-use-v-model-with-vuex-computed-setter-in-action-320eb682c976

https://stackoverflow.com/questions/19330611/fixed-footer-in-bootstrap

https://www.npmjs.com/package/vue-scrollto

persitance
devCrossNet
just JSON.stringify it
https://github.com/devCrossNet/chaptr/blob/master/src/app/home/Home/Home.vue#L118



### Important

https://github.com/parcel-bundler/parcel/issues/1363 
https://github.com/parcel-bundler/parcel/issues/1234

### Parcel instead of Webpack

https://parceljs.org/

https://appdividend.com/2018/02/27/vue-js-setup-parcel-tutorial-scratch/

https://medium.com/@ibrahimbutt/if-youve-ever-configured-webpack-parcel-will-blow-your-mind-b615468cee78

https://alligator.io/vuejs/vue-parceljs/

https://github.com/parcel-bundler/parcel/issues/760

### Problem: Unknown browser major

Best fix:
https://github.com/parcel-bundler/parcel/pull/1432 => install cssnano locally

https://github.com/angular/angular-cli/issues/9020 => fix: "bootstrap": "4.0.0-beta.2" worked for me.

https://github.com/parcel-bundler/parcel/issues/645

https://stackoverflow.com/questions/48016668/browserslisterror-unknown-browser-major

## Testing with jest and vuex

https://markus.oberlehner.net/blog/testing-vuex-powered-vue-components-with-jest/

https://vuex.vuejs.org/guide/testing.html

https://vue-test-utils.vuejs.org/guides/testing-single-file-components-with-jest.html

https://stackoverflow.com/a/24273055/55049
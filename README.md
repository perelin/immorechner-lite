# immorechner-lite

> A Vue.js project

## Build Setup

parcel index.html 

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Dev Notes

https://github.com/vuejs-templates/webpack-simple 

https://vuejs.org/v2/guide/single-file-components.html

https://coolors.co/2e5266-6e8898-9fb1bc-d3d0cb-e2c044

https://fontawesome.com/how-to-use/on-the-web/using-with/vuejs

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

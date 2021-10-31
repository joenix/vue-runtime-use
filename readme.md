# vue-runtime-use

> vue.use in runtime

## install

```sh
npm i vue-runtime-use
# no
yarn add vue-runtime-use
```

## use

```js
import vueRuntimeUse from "vue-runtime-use";

vueRuntimeUse(Vue => {
  // Vue
});
```

## use in vue component

```js
import vueRuntimeUse from "vue-runtime-use";

export default {
  mounted() {
    vueRuntimeUse(Vue => {
      // Vue
    });
  }
};
```

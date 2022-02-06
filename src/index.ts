import HelloWorld from "./HelloWorld";
import { App } from "vue";

const components = {
  HelloWorld,
};

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，那么所有的组件都会被注册
const install = function (Vue: App): void {
  Vue.component(HelloWorld.name, HelloWorld);
};

export default {
  install,
  ...components,
};

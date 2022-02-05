import { App } from "vue";
import HelloWorld from "./HelloWorld.vue";

HelloWorld.install = (Vue: App) => {
  Vue.component(HelloWorld.name, HelloWorld);
};

export default HelloWorld;

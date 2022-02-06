import { createApp } from "vue";
import App from "./App.vue";
import ALL from "@/index";

const app = createApp(App);

app.use(ALL);

app.mount("#app");

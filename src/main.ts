import { createApp } from "vue";
import Shell from "./Shell.vue";
import router from "./router";
import store from "./store";
import "./styles/app.css";

createApp(Shell).use(store).use(router).mount("#app");

import { createApp } from "vue";
import Particles from "vue3-particles";
import App from "@/App.vue";

import "@/assets/css/main.css";


const app = createApp(App);

app.use(Particles as any);

app.mount("#app");
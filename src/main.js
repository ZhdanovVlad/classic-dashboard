import { createApp } from "vue";
import App from "./App.vue";

import "./styleFolder/app.css";

import router from "./router";


import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faBars,
  faHouseUser,
  faMagnifyingGlass,
  faMessage,
  faUserSecret,
  faUsers,
  faStar,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faUserSecret,
  faUsers,
  faHouseUser,
  faMessage,
  faBars,
  faMagnifyingGlass,
  faStar,
  faCamera
);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.mount("#app");

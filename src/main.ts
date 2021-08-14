import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import './plugins/axios'
import "./assets/tailwind.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAddressCard,
  faAt,
  faBookmark,
  faEnvelope,
  faExternalLinkSquareAlt,
  faMapMarkedAlt,
  faMapMarkerAlt,
  faQuestionCircle,
  faPhoneSquareAlt,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faAddressCard,
  faAt,
  faBookmark,
  faEnvelope,
  faExternalLinkSquareAlt,
  faMapMarkedAlt,
  faMapMarkerAlt,
  faQuestionCircle,
  faPhoneSquareAlt,
  faUserSecret,
);

const app = createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon);
//app.config.globalProperties.$_ = Lodash;
app.config.globalProperties.apiUrl = "https://parrot.app/api/v1/";
app.config.globalProperties.staticUrl = "https://static.puertoparrot.com/";
app.mount("#app");

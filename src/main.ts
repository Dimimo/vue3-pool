import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import { useStore } from "vuex";
//import './plugins/axios'
import "./assets/tailwind.css";
import { defineCustomElements as initSkeleton } from "skeleton-webcomponent-loader/loader";
initSkeleton();
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faAddressCard,
  faAt,
  faBookmark,
  faEnvelope,
  faExternalLinkSquareAlt,
  faGlassCheers,
  faMapMarkedAlt,
  faMapMarkerAlt,
  faMinusSquare,
  faQuestionCircle,
  faPercent,
  faPhoneSquareAlt,
  faPlusSquare,
  faThumbsUp,
  faThumbsDown,
  faUserSecret,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faAddressCard,
  faAt,
  faBookmark,
  faEnvelope,
  faExternalLinkSquareAlt,
  faGlassCheers,
  faMapMarkedAlt,
  faMapMarkerAlt,
  faMinusSquare,
  faQuestionCircle,
  faPercent,
  faPhoneSquareAlt,
  faPlusSquare,
  faThumbsUp,
  faThumbsDown,
  faUserSecret,
  faUserTie,
);

const app = createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon);
//app.config.globalProperties.$_ = Lodash;
app.config.globalProperties.apiUrl = "https://parrot.app/api/v1/";
app.config.globalProperties.staticUrl = "https://static.puertoparrot.com/";
app.config.globalProperties.season  = store.getters.changeSeason;
app.mount("#app");

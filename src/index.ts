import "narrat/dist/narrat.css";
import "./css/main.css";
import { registerPlugin, startApp, useScenes, NarratPlugin } from "narrat";
import scripts from "./scripts";
import config from "./config";
import { strings } from "./strings/strings";
import { DEBUG, USE_STEAM } from "./constants";
import { SteamPlugin } from "./steam-plugin";
import { shallowRef } from 'vue';
import SceneDialogSansMenu from '@/scenes/screenDialog.vue';

// On crée un mini-plugin dont le seul rôle est d'enregistrer notre scène
// au bon moment (onGameSetup = juste avant que le moteur démarre vraiment)
class ScenesPlugin extends NarratPlugin {
  onGameSetup() {
    useScenes().addNewScene({
      id: 'screenDialog',
      component: shallowRef(SceneDialogSansMenu),
      props: {},
    });
  }
}

window.addEventListener("load", () => {
  // On enregistre le plugin AVANT startApp
  registerPlugin(new ScenesPlugin());

  if (USE_STEAM) {
    registerPlugin(new SteamPlugin());
  }

  startApp({
    debug: DEBUG,
    logging: false,
    scripts,
    config,
    localization: {
      debug: DEBUG,
      lng: "en",
      resources: {
        ...strings,
      },
    },
  });
});
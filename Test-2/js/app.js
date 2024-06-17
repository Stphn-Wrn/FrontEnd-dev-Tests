import prebidConfig from './prebidConfig.js';
import apstagConfig from './apstagConfig.js';
import googleTagConfig from './googleTagConfig.js';
import axeptioLoader from './axeptioLoader.js';

const app = {
    init: () => {
        axeptioLoader.init();
        app.setupConsentListener(); // Utiliser l'objet `app` directement
    },
    setupConsentListener: () => {
        window._axcb = window._axcb || [];
        window._axcb.push((axeptio) => {
            axeptio.on("cookies:complete", (choices) => {
                if (choices.$$googleConsentMode.ad_personalization === 'granted') {
                    prebidConfig.init();
                    apstagConfig.init();
                    googleTagConfig.init();
                } else {
                    console.log('Publicité non autorisée par Axeptio');
                }
            });
        });
    }
};

document.addEventListener("DOMContentLoaded", app.init);

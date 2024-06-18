import prebidConfig from './prebidConfig.js';
import apstagConfig from './apstagConfig.js';
import googleTagConfig from './googleTagConfig.js';
import axeptioLoader from './axeptioLoader.js';

const deleteAxeptioCookie = () => {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        if (name === "axeptio_cookies") {
            document.cookie = name + "=; Path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
    }
};

const app = {
    init: () => {
        axeptioLoader.init();
        app.setupConsentListener();
        app.setupUnloadListener(); 
    },
    setupConsentListener: () => {
        window._axcb = window._axcb || [];
        window._axcb.push((axeptio) => {
            axeptio.on("cookies:complete", (choices) => {
                if (choices.$$googleConsentMode.ad_personalization === 'granted') {
                    prebidConfig.init(choices);
                    apstagConfig.init();
                    googleTagConfig.init();
                    document.getElementById('loading-image').style.display = 'none';
                    document.getElementById('div-2').style.display = 'block';
                } else {
                    console.log('Publicité non autorisée par Axeptio');
                }
            });
        });
    },
    setupUnloadListener: () => {
        window.addEventListener("beforeunload", deleteAxeptioCookie);
    }
};

document.addEventListener("DOMContentLoaded", app.init);

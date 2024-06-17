import prebidConfig from './prebidConfig.js';
import apstagConfig from './apstagConfig.js';
import googleTagConfig from './googleTagConfig.js';

const app = {
    init: function () {
        prebidConfig.init();
        apstagConfig.init();
        googleTagConfig.init();
    }
};

document.addEventListener("DOMContentLoaded", app.init);

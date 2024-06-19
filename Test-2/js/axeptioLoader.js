import axeptioConfig from './axeptioConfig.js';

const axeptioLoader = {
    init: function () {
        window.axeptioSettings = axeptioConfig;
        this.loadAxeptioScript();
    },
    loadAxeptioScript () {
        (function (d, s) {
            let t = d.getElementsByTagName(s)[0], e = d.createElement(s);
            e.async = true;
            e.src = "//static.axept.io/sdk.js";
            t.parentNode.insertBefore(e, t);
        })(document, "script");
    }
};

export default axeptioLoader;

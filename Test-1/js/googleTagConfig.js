const googleTagConfig = {
    init: function () {
        setupGoogleTag();
    },
    setupGoogleTag() {
        const googletag = window.googletag || { cmd: [] };
    
        googletag.cmd.push(function() {
            window.slot = googletag.defineSlot(`/21871128741/teststack`, [[300, 250]], 'div-2')
                .addService(googletag.pubads());
    
            googletag.pubads().enableAsyncRendering();
            googletag.enableServices();
            googletag.display("div-2");
        });
    }
};

export default googleTagConfig;

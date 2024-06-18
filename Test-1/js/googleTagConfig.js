const googleTagConfig = {
    init: function () {
        this.setupGoogleTag();
    },
    setupGoogleTag() {
        const googletag = window.googletag || { cmd: [] };
    
        googletag.cmd.push(function() {
            window.slot = googletag.defineSlot(`/21871128741/teststack`, [[300, 250]], 'div-2')
                .addService(googletag.pubads());
    
            googletag.pubads().enableAsyncRendering();
            googletag.enableServices();
            googletag.display("div-2");

            googletag.defineSlot(`/5950404/jardiner-malin.fr/fiche-jardinage_1`, [[1150, 250]], 'div-1') // Bidder Server side 
                .addService(googletag.pubads());
    
            googletag.pubads().enableAsyncRendering();
            googletag.enableServices();
            googletag.display("div-1");
        });
    }
};

export default googleTagConfig;

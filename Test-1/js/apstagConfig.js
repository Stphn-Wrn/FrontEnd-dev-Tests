let slot;

const apstagConfig = {
    init: function () {
        this.setupApstag();

    },
    setupApstag() {
        if (typeof window.apstag !== 'undefined' && typeof window.apstag.init === 'function') {
            window.apstag.init({
                pubID: '02baacae-0cfc-4942-8fc1-8f85c19e7b49',
                adServer: 'googletag'
            });
    
            window.apstag.fetchBids({
                slots: [
                    {
                        slotID: 'div-1', 
                        slotName: '/5950404/jardiner-malin.fr/fiche-jardinage_1', 
                        sizes: [[1150, 250]] 
                },
                {
                    slotID: 'div-2',
                    slotName: '/21871128741/teststack',
                    sizes: [[300, 250]]
                },
           ]
            }, function(bids) {
                window.googletag.cmd.push(function() {
                    setTimeout(function() {
                        console.log('refreshed');
                        window.apstag.setDisplayBids();
                        window.googletag.pubads().refresh([window.slot]);
                    }, 8 * 1000);
                });
            });
        } else {
            console.error('apstag is not defined or apstag.init is not a function');
        }
    }
};

export default apstagConfig;

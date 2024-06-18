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
                slots: [{
                    slotID: 'div-2',
                    slotName: '/21871128741/teststack',
                    sizes: [[300, 250]]
                }]
            }, function(bids) {
                console.log('Fetched bids:', bids); 
                if (Array.isArray(bids)) {
                    window.googletag.cmd.push(function() {
                        setTimeout(function() {
                            try {
                                window.apstag.setDisplayBids({ // I don't have the documentation of Apstag
                                    adServer: 'googletag',
                                    bids: bids
                                });
                                window.googletag.pubads().refresh([window.slot]);
                                
                            } catch (e) {
                                console.error('Error in setDisplayBids:', e);
                            }
                        }, 8000); // 8 * 1000 ms
                    });
                } else {
                    console.error('Invalid bids response:', bids);
                }
            });
        } else {
            console.error('apstag is not defined or apstag.init is not a function');
        }
    }
};

export default apstagConfig;

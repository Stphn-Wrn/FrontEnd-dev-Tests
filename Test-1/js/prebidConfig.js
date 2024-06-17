const prebidConfig = {
    init: function () {
        this.setupPrebid();
    },
    setupPrebid() {
        const div_2_sizes = [
            [970, 250],
        ];
    
        const PREBID_TIMEOUT = 1000;
    
        var pbjs = pbjs || {};
        pbjs.que = pbjs.que || [];
    
        const adUnits = [
            {
                code: 'div-2',
                mediaTypes: {
                    banner: {
                        sizes: div_2_sizes
                    }
                },
                bids: [{
                    bidder: 'appnexus',
                    params: {
                        placementId: 13144370
                    }
                }]
            }
        ];
    
        pbjs.que.push(function() {
            pbjs.addAdUnits(adUnits);
            pbjs.requestBids({
                bidsBackHandler: function() {
                    pbjs.setTargetingForGPTAsync();
                    window.googletag.pubads().refresh();
                },
                timeout: PREBID_TIMEOUT
            });
        });
    }
};

export default prebidConfig;

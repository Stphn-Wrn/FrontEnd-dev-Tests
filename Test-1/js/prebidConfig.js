const prebidConfig = {
    init: function () {
        this.setupPrebid();
    },
    setupPrebid() {
        const PREBID_TIMEOUT = 1000;

        var pbjs = pbjs || {};
        pbjs.que = pbjs.que || [];

        const adUnits = [
            {
                code: 'div-1',
                mediaTypes: {
                    banner: {
                        sizes: [[1150, 250]]
                    }
                },
                bids: [{
                    bidder: 'appnexus',
                    params: {
                        placementId: 13144370
                    }
                }]
            },
            {
                code: 'div-2',
                mediaTypes: {
                    banner: {
                        sizes: [[300, 250]]
                    }
                },
                bids: [{
                    bidder: 'appnexus',
                    params: {
                        placementId: 13144371
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

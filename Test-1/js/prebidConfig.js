const prebidConfig = {
    init: function () {
        this.setupPrebid();
    },
    setupPrebid() {
        const PREBID_TIMEOUT = 1000;

        var pbjs = pbjs || {}; // ES6 doesn't work, and i don't know why
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
                    bidder: 'apstag',
                        params: {
                            pubId: '02baacae-0cfc-4942-8fc1-8f85c19e7b49', 
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

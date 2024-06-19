const prebidConfig = {
    init: function (choices) {
        this.setupPrebid(choices);
    },
    setupPrebid(choices) {
        const div_2_sizes = [
            [970, 250],
        ];

        const PREBID_TIMEOUT = 1000;

        window.pbjs = window.pbjs || {};
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
            pbjs.setConfig({
                consentManagement: {
                    gdpr: {
                        cmpApi: 'custom',
                        timeout: 8000,
                        allowAuctionWithoutConsent: false,
                        consentDataProvider: function(callback) {
                            let consentData = {
                                gdprApplies: true,
                                consentString: choices.consentString,
                                addtlConsent: choices.additionalConsent
                            };
                            callback(consentData);
                        }
                    }
                }
            });

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

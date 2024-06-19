# FrontEnd dev - Tests

## 1. Instructions to start the project

- To launch the application, simply clone the Github repository from this address: XXX 
- Once it has been cloned, go to the "Test-1" repository folder and launch the index.html file from a local web server or from a hosting service. 

## 2. Instructions to configure prebid.js (prebidConfig.js)

- To configure prebid for this test, we start by defining the "advertising units":


```js
const adUnits = [
            {
                code: 'div-1', // Corresponds to the ID of the HTML element where the ad will be rendered
                mediaTypes: {
                    banner: {
                        sizes: [[1150, 250]] // This is the size of the advert, in this case a banner measuring 1150x250 pixels.
                    }
                },
                bids: [{
                    bidder: 'apstag', // This is the name of the bidder, "apstag" stands for Amazon Publisher Service Tag
                        params: {
                            pubId: '02baacae-0cfc-4942-8fc1-8f85c19e7b49', // Publisher ID for Amazon. 
                        }
                }]
            },
            {
                code: 'div-2', // Unique identifier for the ad unit. Corresponds to the ID of the HTML element where the ad will be rendered.
                mediaTypes: {
                    banner: {
                        sizes: [[300, 250]] // Dimensions of the advertising unit. Here, we're talking about a 300x250 pixel banner.
                    }
                },
                bids: [{
                    bidder: 'appnexus', // Name of the bidder. 'appnexus' refers to the AppNexus auction platform.
                    params: {
                        placementId: 13144371 // Placement ID for AppNexus. Unique identifier provided by AppNexus for this advertising placement.
            }
        }]
    }
];
```

## 3. Instructions to configure Amazon TAM (apstagConfig.js)

```js
                window.apstag.init({ // Initializes the Amazon Publisher Services (Apstag) configuration.
                        pubID: '02baacae-0cfc-4942-8fc1-8f85c19e7b49', // Publisher's unique identifier assigned to the APS account
                        adServer: 'googletag' // Specifies the ad server to be used.
                });
                window.apstag.fetchBids({ // Lance une requête pour récupérer les enchères d'APS.
                        slots: [ // Defines the advertising spaces for which bids will be collected.
                            {
                                slotID: 'div-1', // ID of the HTML element where the ad will be displayed.
                                slotName: '/5950404/jardiner-malin.fr/fiche-jardinage_1', // Unique path for the ad placement. It corresponds to the path defined in Google Ad Manager.
                                sizes: [[1150, 250]] // Dimensions of the advertising space.
                            },
                            // Same as above
                            {
                                slotID: 'div-2',
                                slotName: '/21871128741/teststack',
                                sizes: [[300, 250]]
                            },
                        ]
                    }, function(bids) { // Callback function executed after recovering bids.
                        window.googletag.cmd.push(function() { // Adds a function to the Google Publisher Tag command queue. It will be executed as soon as GPT is ready.
                            setTimeout(function() {
                                window.apstag.setDisplayBids(); // Assigns recovered bids to the defined slots.
                                window.googletag.pubads().refresh([window.slot]); // Refreshes the ads in the specified advertising spaces.
                            }, 8 * 1000);
                        });
                });
```

Once Amazon TAM and Prebid have been configured, all that remains is to set up the configuration for Google Publisher Tag.


## What I thought of this part of the test

Pros: 
- The subject of the test was very interesting, a real change from the front-end development I usually do.  

- Although I wasn't very happy with the end result, I'm motivated to learn more about this aspect of development.

Cons: 

- The complexity of getting to grips with all the documentation and the project in a week, especially for Amazon TAM where I had to do a lot of research due to a lack of documentation. 

- Some difficulties in understanding the code itself in the documentation, I like to know how it works so that I can better visualise what I need to develop.

- When initialising pbjs I have to use var instead of const/let. I'd like to know why.



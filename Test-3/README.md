# FrontEnd dev - Tests

## 1. Instructions to use modules javascript in this project

- To start with, we create a folder that will contain all our javascript files. We'll create a main file that we'll import into our html, specifying that it's a module. 

```html
<script type="module" src="js/app.js"></script>
```

- Once in this file (app.js), we import our various files that will be useful for the smooth running of the application.

```js
import prebidConfig from './prebidConfig.js';
import apstagConfig from './apstagConfig.js';
import googleTagConfig from './googleTagConfig.js';
```

- Then we create an object (app) which is defined with an init method. This init method will initialise the 3 imported modules, so we need to create our modules in our other files beforehand. 

```js

const app = {
    init: function () {
        prebidConfig.init();
        apstagConfig.init();
        googleTagConfig.init();
    }
};

/*
* googleTagConfig.js file
*/
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
```

- The app object's init method will only start executing when the DOM has been fully loaded. 

```js
document.addEventListener("DOMContentLoaded", app.init);
```

- The advantage of modules is that they make it easier to manage maintainability by cutting up the code. This requires a bit of upstream preparation but saves time over time.  



## What I thought of this part of the test

Pros : 
- This has allowed me to open up my courses again as I haven't done javascript in modules for a long time.  
- I didn't know about the window. for the global scope. 

Cons: 
- I had a few problems integrating certain elements into modules and getting them to work together, particularly with the Axeptio CMP.
- Some points are functional but not efficient, and I haven't managed to find a solution to resolve certain problems.
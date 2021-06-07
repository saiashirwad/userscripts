// ==UserScript==
// @name         Make Whatsapp Web Vimmable Again
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Use Whatsapp Web with Vimium 
// @author       saiashirwadr@gmail.com
// @match        https://web.whatsapp.com/
// @icon         https://www.google.com/s2/favicons?domain=whatsapp.com
// @grant        none
// ==/UserScript==


(new MutationObserver(check)).observe(document, {childList: true, subtree: true});

let pane;

function check(changes, observer) {
    if(document.querySelector('._2aBzC')) {
        observer.disconnect();
        pane = document.querySelector('#pane-side');
        let li = document.getElementsByClassName("_3Dr46");
        for (let id of li) {
            let button = document.createElement("button");
            button.id = "vimium_doodad";
            button.innerHTML = ".";
            button.style.zIndex = -1;
            id.appendChild(button);
        }
    }
}




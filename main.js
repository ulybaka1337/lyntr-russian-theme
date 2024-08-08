// ==UserScript==
// @name         lyntr russian theme
// @namespace    https://discord.gg/7radMBMnNZ
// @version      v1.0.0
// @description  this is fire!!
// @author       ulybaka1337
// @match        https://lyntr.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    /*let lyntDivClass = "flex w-full gap-3 rounded-xl bg-lynt-foreground p-3 transition-colors hover:bg-border";
    let lyntDivReplied = "rounded-lg border-2 border-primary p-4 drop-shadow";
    let lyntrContent = "max-w-[490px] whitespace-pre-wrap break-words text-lg";
    let lyntrUsername = "truncate max-w-[60%] rounded-sm text-xl font-bold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-black";
    let lyntrVerifiedBadge_div = "flex h-full w-7 justify-center";
    let lyntrProfileButton = "static bottom-2 flex max-w-md cursor-pointer items-center gap-4 rounded-full bg-border p-4 md:absolute md:w-[250px]";*/

    let stylesheet = document.createElement("style");
    stylesheet.id = "raresense-tech-geoowierajg";

    stylesheet.textContent = `
    body {
    background-image: url("https://raw.githubusercontent.com/ulybaka1337/lyntr-russian-theme/main/background.png");
    background-size: cover;
    }
    .shrink-0 {
    opacity: 0;
    }
    .text-xl {
    color: #dddddd;
    }
    .gap-4 {
    background-color: #00000050;
    border-width: 10px;
    border-radius: 5px;
    border-color: #00000000;
    }
    .p-3 {
    background-color: #00000060;
    }
    .text-card-foreground {
    background-color: #00000040;
    border-colour: #00000000;
    }
    .p-4 {
    background-color: #00000060;
    border-color: #00000000;
    border-radius: 4px;
    border-width: 2px;
    }
    .bg-border {
    background-color: #00000060;
    }
    }
    .bottom-2 {
    padding-bottom: 20px;
    border-width: -4px;
    }
    .h-10 {
    background-color: #00000060;
    color: #ffffff
    }
    .rounded-b-lg {
    border-radius: 0px;
    }
    `
    document.head.appendChild(stylesheet);


})();

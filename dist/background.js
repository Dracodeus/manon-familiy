"use strict";
chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({ test: 1235 }, function () { console.log("Works"); });
});

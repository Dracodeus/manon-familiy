chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({test: 1235}, () => {console.log("Works")})
})
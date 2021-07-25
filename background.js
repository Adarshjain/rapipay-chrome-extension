chrome.runtime.onInstalled.addListener(function() {
    chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
        console.log('')
        if (changeInfo.status === 'complete') {
            chrome.tabs.sendMessage(tabId, {
                message: 'TabUpdated'
            });
        }
    })
});

// chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
//     console.log('message received')
// });

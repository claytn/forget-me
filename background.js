/** THIS IS TEMORARY - WILL SOON ALLOW USERS TO ADD DOMAINS MANUALLY */
chrome.storage.sync.set({'domains': ['medium.com']}, function() {
  console.log('Value is set to ' + 'medium');
});

chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {
    if(request.message === "open_incognito" ) {
      chrome.windows.create({ url: request.url, incognito: true });
    }
    else if(request.message === "read_storage") {
      chrome.storage.sync.get(['domains'], (result) => {
        // Send a message to the active tab
        chrome.tabs.query({active: true, currentWindow: true}, tabs => {
          const [activeTab] = tabs
          chrome.tabs.sendMessage(activeTab.id, 
            { message: "fetched_domain_storage",  storage: result });
        });
      });
    }
  }
);



const BROWSER = chrome || browser 

BROWSER.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {
    if(request.message === "open_incognito" ) {
      BROWSER.windows.create({ url: request.url, incognito: true });
    }
  }
);
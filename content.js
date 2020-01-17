
const createIncognitoLinks = domain => {
  const incognitoLinks = $(`a[href*=\"${domain}\"]`)
  incognitoLinks.toArray().forEach(element => {
    element.onclick = evt => {
      evt.preventDefault();
      chrome.runtime.sendMessage({
        message: "open_incognito", 
        url: element.href
      }) 
    }
  });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if(request.message === "fetched_domain_storage") {
      const domains = request.storage && request.storage.domains
      domains && domains.forEach((domain) => {
        createIncognitoLinks(domain)
      })
    }
  }
);

chrome.runtime.sendMessage({ message: "read_storage" })






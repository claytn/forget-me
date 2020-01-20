const BROWSER = chrome || browser

const domains = [
  "medium.com",
  "nytimes.com",
  "latimes.com",
  "wsj.com"
  /* ADD MORE DOMAINS HERE */
]

const createIncognitoLinks = domain => {
  const incognitoLinks = $(`a[href*=\"${domain}\"]`)
  incognitoLinks.toArray().forEach(element => {
    element.onclick = evt => {
      evt.preventDefault();
      BROWSER.runtime.sendMessage({
        message: "open_incognito", 
        url: element.href
      }) 
    }
  });
}

domains.forEach(domain => createIncognitoLinks(domain))
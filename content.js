// content.js

const incognitoLinks = $("a[href^='https://medium.com']")
incognitoLinks.toArray().forEach(element => {
  element.onclick = evt => {
    evt.preventDefault();
    chrome.runtime.sendMessage({
      message: "open_incognito", 
      url: element.href
    }) 
  }
});


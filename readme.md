### forget-me

> A chrome extension that opens a set list of websites in an incognito window.

Motivation: Many news sites and blog sites track a ton of personal info and have limits on the amount of content you can view if they remember your browser. I found myself copying and pasting a lot of urls into an incognito window to avoid this and decided it would be nice to automate the process for popular sites with heavy tracking and read limits. I wanted these particular sites to "forget me", and treat me like a brand new user (going incognito does this perfectly).

I don't plan on launching this as an extension in the chrome/mozilla extension stores. I really doubt many people would find this that useful, but it's a solution that works for me. If you do want to download it in your browser and add your own unique domains, I have some instructions below to do it.


#### Installing

*Sidenote: this extension is only supported by chrome. I'll be adding a cross-browser compatible version soon. Check the repo for updates.*

Download the code in this repo by clicking the "Clone or download" drop-down and then "Download ZIP". Unzip the folder on your machine. You can add your own domains inside the `content.js`.

Once you're done adding your own domains, open chrome and type the following into the address bar:

`chrome://extensions/`

This will take you to the chrome extension console. In the top right corner you should see a toggle to turn on "Developer Mode". Turn it on if it isn't already. 

Once on, you should see an option on the left hand corner of the console to "Load unpacked". Click that and select the unzipped "forget-me" repo folder. 

The extension should now be installed and active 🙂



# INSuRE Chrome Extension
## General
ThirdEye Detection is an extension built for the popular web browser Google Chrome. The point of the extension is to filter malcious URLs through three tiers of detection. 
-First being a user-defined blacklist/whitelist which is stored on the browser's local storage.
-Next, the fetched URL gets run through our personal master blacklist, which is hosted on a Node Server(https://github.com/chancebrilz/insure-chrome-extension-server) and contains almost 2 million entries.
-Finally, the URL in question is examined by our "Recurrent Neural Network," which is an A.I. that cross references the URL with other malcious URLs that the A.I. has been trained on to determine if there are any similarities.
## Next up

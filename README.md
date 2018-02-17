# Amazon-Echo-Ethereum-API
Allows you to make ethereum cryptocurrency transfers directly by speaking with your Amazon Echo. 
Also has a user interface allowing you to create a contact list.
Finally, ensures that you cannot make transfers without uttering your passphrase first so that BigBadBilly can't steal your cryptocashhhh.




App user flow:

-User can authenticate themselves and create a list of contacts they want to transfer cash to on an Electron App.
-The Electron App uses oAuth to give the app permissions. Connects to the Starling Api to obtain data/ send payments on behalf of the user.
-The Electron App also runs a server on the local network. Our Amazon Echo voice assistant is connect to this local network.
-User authenticates beforehand. Then user can use the voice assistant to send cash. It sends a post request to the app which sends a request to the API.

General workload distribution:
-Flinn builds Electron App UI
-Vishal develops a nodejs server that communicates with Amazon Echo
-Vishal gets Amazon Echo Alexa skills built.

Schedule:
14:20-15:00: Flinn, get DevPost sorted. Vishal, get us an Amazon Echo. Both of us research the Starling API
15:00-16:00: 

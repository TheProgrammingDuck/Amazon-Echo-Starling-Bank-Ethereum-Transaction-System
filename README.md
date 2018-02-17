# Amazon-Echo-Ethereum-API
<p>Allows you to make ethereum cryptocurrency transfers directly by speaking with your Amazon Echo. </p>
<p> Also has a user interface allowing you to create a contact list.</p>
Finally, ensures that you cannot make transfers without uttering your passphrase first so that BigBadBilly can't steal your cryptocashhhh.




App user flow:

-User can authenticate themselves and create a list of contacts they want to transfer cash to on an Electron App.
-The Electron App uses oAuth to give the app permissions. Connects to the Starling Api to obtain data/ send payments on behalf of the user.
-The Electron App also runs a server on the local network. Our Amazon Echo voice assistant is connect to this local network.
-User authenticates beforehand. Then user can use the voice assistant to send cash. It sends a post request to the app which sends a request to the API.

<div>
General workload distribution:
  <ul>
<li>Flinn builds Electron App UI</li>
<li-Vishal develops a nodejs server that communicates with Amazon Echo</li>
<li>-Vishal gets Amazon Echo Alexa skills built.</li>
  </ul>
</div>

Schedule:
<p>14:20-15:00: Flinn, get DevPost sorted. Vishal, get us an Amazon Echo. Both of us research the Starling API</p>
<p>15:00-16:00: </p>

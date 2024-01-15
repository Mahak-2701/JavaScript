/**
 * Server-Sent Events (SSE) is a technology that enables unidirectional communication from a server to a client over an HTTP connection. 
 * Unlike traditional methods like polling, where the client constantly asks the server for updates, 
 * SSE allows the server to push updates to the client automatically. 
 */

const http = require('http');




{/* <script> */}
  const eventSource = new EventSource('http://localhost:3000/events');

  eventSource.onmessage = (event) => {
    console.log('Received event:', event.data);
    // Display the message on the page, for example:
    document.getElementById('time').textContent = event.data;
  };
{/* </script> */}
{/* <p id="time"></p> */}
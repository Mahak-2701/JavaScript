// 


{/* <script> */}
  const eventSource = new EventSource('http://localhost:3000/events');

  eventSource.onmessage = (event) => {
    console.log('Received event:', event.data);
    // Display the message on the page, for example:
    document.getElementById('time').textContent = event.data;
  };
{/* </script> */}

{/* <p id="time"></p> */}

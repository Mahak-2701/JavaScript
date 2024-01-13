// Fetch API example
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched data:', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// XMLHttpRequest (XHR) example
function fetchDataWithXHR() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.example.com/data');
    xhr.onload = () => {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            console.log('Fetched data (XHR):', data);
        } else {
            console.error('Error fetching data (XHR):', xhr.statusText);
        }
    };
    xhr.onerror = () => {
        console.error('Network error occurred (XHR)!');
    };
    xhr.send();
}

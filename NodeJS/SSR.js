// Import necessary modules
const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

// Create an Express application
const app = express();

// Define a simple React component
const HelloMessage = (props) => {
  return React.createElement('div', null, `Hello, ${props.name}!`);
};

// Define a route for SSR
app.get('/', (req, res) => {
  // Render the React component to HTML
  const html = ReactDOMServer.renderToString(React.createElement(HelloMessage, { name: 'Server-Side Rendering' }));


import React from 'react';
import logo from './logo.svg';
import './App.scss';

import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      {/* NOTE: Keep the helmet code below and change the app title.
          Add any meta tags you want, or any tag you want to go in the header. 
          You can modify everything else! */}
      <Helmet>
        <title>Your App Title Here</title>
      </Helmet>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Brainstation 3D Starter
        </a>

        <a
          className="App-link"
          href={`http://localhost:8080/ping`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Server Ping
        </a>
      </header>
    </div>
  );
}

export default App;

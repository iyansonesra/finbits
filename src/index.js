import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AboutUs from './AboutUs';
import ExamplePage from './examplePage/examplesPage.js'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App/>
    {/* <Router>
      <Route path="/" component={App} />
      <Route path="/AboutUs" component={AboutUs}/>
      <Route path="/ExamplePage" component={ExamplePage}/>
    </Router> */}
  </React.StrictMode>
);


document.body.style = 'background: aliceblue;';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
/* import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'; */
import 'semantic-ui-css/semantic.min.css';
//import 'semantic-ui/dist/semantic.min.css';


import App from './components/App/App';
$(document).ready(function () {
  ReactDOM.render(<App />, document.getElementById('container'));
}); 

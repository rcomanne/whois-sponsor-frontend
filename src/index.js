import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import axios from "axios";

axios.defaults.headers.post['Content-Type'] = 'application/json'

ReactDOM.render(
    <React.StrictMode><App/></React.StrictMode>,
    document.getElementById('root')
)
;

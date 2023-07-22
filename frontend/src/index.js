import React from 'react';
import ReactDOM from 'react-dom/client';

import {BrowserRouter} from 'react-router-dom'
import {Provider} from "react-redux";

import App from './App';

import store from "./store/store";
import {AuthContextProvider} from "./Context/auth";

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <AuthContextProvider>
                <App/>
            </AuthContextProvider>
        </Provider>
    </BrowserRouter>
);

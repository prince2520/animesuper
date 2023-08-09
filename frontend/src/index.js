import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router } from "react-router-dom";
import {Provider} from "react-redux";

import App from './App';

import store from "./store/store";
import {AuthContextProvider} from "./Context/auth";
import 'react-loading-skeleton/dist/skeleton.css'


import './index.css';
import {SkeletonTheme} from "react-loading-skeleton";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <SkeletonTheme
        baseColor={`var(--skeleton)`}
        highlightColor={`var(--skeleton-highlight)`}>
        <Router>
            <Provider store={store}>
                <AuthContextProvider>
                    <App/>
                </AuthContextProvider>
            </Provider>
        </Router>
    </SkeletonTheme>
);

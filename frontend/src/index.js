import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from "react-redux";
import { SkeletonTheme } from "react-loading-skeleton";
import { BrowserRouter as Router } from "react-router-dom";


import App from './App';
import store from "./redux/store";

import 'react-loading-skeleton/dist/skeleton.css'
import './style.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <SkeletonTheme
        baseColor={`var(--skeleton)`}
        highlightColor={`var(--skeleton-highlight)`}>
        <Router>
            <Provider store={store}>
                <App />
            </Provider>
        </Router>
    </SkeletonTheme>
);

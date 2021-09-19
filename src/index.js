import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import App from './App';
import { store } from './store'
import reportWebVitals from './reportWebVitals';
import {CarouselContext, FooterIconsContext, LinksContext} from "./context";
import {carousel, footerIconsList, links} from "./constants";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <LinksContext.Provider value={links}>
              <CarouselContext.Provider value={carousel}>
                  <FooterIconsContext.Provider value={footerIconsList}>
                      <App />
                  </FooterIconsContext.Provider>
              </CarouselContext.Provider>
          </LinksContext.Provider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

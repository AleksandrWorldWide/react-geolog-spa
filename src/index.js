import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WebFont from 'webfontloader'
import { Provider } from 'react-redux';
import {store} from './redux/store'

WebFont.load({
	google: {
		families: ['Rubik: 400,500,600,700', 'Open Sans: 700', 'sans-serif']
	}
})




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	  <Provider store={store}>
	  		<App title = {'geolog'}/>
	  </Provider>
    
  </React.StrictMode>
);


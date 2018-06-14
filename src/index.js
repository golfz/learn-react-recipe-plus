import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RecipePage from './RecipePage'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RecipePage />, document.getElementById('root'));
registerServiceWorker();

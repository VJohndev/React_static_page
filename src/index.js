import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import BaseLayout from './components/BaseLayout';
import Other from './components/Other';
import BMW from './components/BMW';
import Accessories from './components/Accessories';
import ShowProduct from './components/ShowProduct';
import registerServiceWorker from './registerServiceWorker';
import About from './components/Details/About';
import Contact from './components/Details/Contact';
import Gallery from './components/Details/Gallery';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/Other Fishes" component={Other}  />
        <Route path="/BMW" component={BMW} />
        <Route path="/Accessories" component={Accessories} />
        <Route exact path="/products/:id" component={ShowProduct} />
        <Route exact path="/Home" component={App} />
        <Route exact path="/Gallery" component={Gallery} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/About" component={About} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>

, document.getElementById('root'));
registerServiceWorker();

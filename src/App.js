import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/index.js';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './page/login';
import Home from './page/detail/home';
import EntryWarehouse from './page/detail/entry';
import DeliveryWarehouse from './page/detail/delivery';
import Dispatch from './page/detail/dispatch';
import Sale from './page/detail/sale';
import Supplier from './page/detail/supplier';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Route path='/' exact component={Login}/>
                    <Route path='/home' exact component={Home}/>
                    <Route path='/entry_warehouse' exact component={EntryWarehouse}/>
                    <Route path='/delivery_warehouse' exact component={DeliveryWarehouse}/>
                    <Route path='/workshop_dispatch' exact component={Dispatch}/>
                    <Route path='/sale_dispatch' exact component={Sale}/>
                    <Route path='/supplier' exact component={Supplier}/>
                </div>
            </BrowserRouter>
        </Provider>
    );
  }
}

export default App;

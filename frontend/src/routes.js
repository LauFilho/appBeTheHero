import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/login';
import Registrar from './pages/registrar'
import Profile from './pages/profile'
import novoCaso from './pages/novoCaso'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/registrar" component={Registrar} />
                <Route path="/profile" component={Profile} />
                <Route path="/novoCaso/novo" component={novoCaso} />
            </Switch>
        </BrowserRouter >
    );
}
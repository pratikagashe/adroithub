import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../home'
import Terms from '../terms'
import Privacy from '../privacy'
import Header from '../header'
import TechStack from '../techStack'

const AppRoutes = () => {
    return (
        <BrowserRouter basename="/">
            <Route component={Header} />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/terms/" component={Terms} />
                <Route exact path="/privacy-policy/" component={Privacy} />
                <Route exact path="/technologies" component={TechStack} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRoutes

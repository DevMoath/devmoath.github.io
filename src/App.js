import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Theme from './components/layouts/Theme'
import BpmAdvise from './components/bpm-advise/BpmAdvise'

function App() {
    return (
        <BrowserRouter>
            <Theme>
                <Switch>
                    <Route exact
                           path="/"
                           component={Home}/>
                    <Route exact
                           path="/bpm-advise"
                           component={BpmAdvise}/>
                    <Route path="*"
                           component={NotFound}/>
                </Switch>
            </Theme>
        </BrowserRouter>
    )
}

export default App

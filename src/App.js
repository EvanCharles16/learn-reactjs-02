import React from 'react'
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './component/Home'
import Navbar from './component/Navbar';
import TodoApp from './component/TodoApp/';
import DataWanderLink from './component/DataWanderLink'


function App() {
    return (
      <div>
        <Router>
          <Navbar/>
        <Container>

          <Switch>
            <Route path="/" exact="true">
              <Home></Home>
            </Route>

            <Route path="todapp">
              <TodoApp/>
            </Route>     

            <Route path="data_wanderlink">
              <DataWanderLink/>
            </Route>

          </Switch>
          
            <TodoApp/>
        </Container>
        </Router>
      </div>
    ); 
}

export default App;
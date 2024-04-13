import {Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <Switch>
    <Route path="/login" component={LoginForm} />
    <Route path="/Home" component={Home} />
  
  </Switch>
)

export default App

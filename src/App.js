import React from 'react'
import NavbarHeader from './NavbarHeader'
import Login from './Login'
import User from './User'
import Posts from './Posts'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavbarHeader />
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/user' exact component={User} />
          <Route path='/posts' exact component={Posts} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App

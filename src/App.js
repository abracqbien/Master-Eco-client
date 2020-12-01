import React from "react"
import { Switch, Route } from "react-router-dom"

// Components
import Register from "./pages/auth/Register"
import Header from "./components/nav/Header"
import Login from "./pages/auth/Login"
import Home from "./pages/Home"

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  )
}

export default App

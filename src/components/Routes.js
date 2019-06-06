import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from '../views/Home'
import About from '../views/About'
import TopicList from '../views/TopicList'
import NoMatch from '../views/NoMatch'
import TopicDetail from '../views/TopicDetail'
import NavBar from '../views/NavBar'


export const Routes = () =>{

  return(
    <div>
      <NavBar />
      <Switch>
      <Route exact path='/'>
        <Redirect to='/Home' />
      </Route>
      <Route path ="/About" component={About} />
        <Route exact path='/Home' component={Home} />
        <Route exact path='/Topics' component={TopicList} />
        <Route exact path='/Topics/:topicId' component={TopicDetail} />
        <Route component={NoMatch} /> 
      </Switch>
    </div>
  )
}
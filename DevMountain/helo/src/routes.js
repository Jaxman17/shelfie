import React from 'react';
import {Switch, Route} from 'react-router-dom';

// Components //
import Auth from './Components/Auth/Auth';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Post from './Components/Post/Post';
// import Nav from './Components/Nav/Nav';
// /// // // 

export default (
    <Switch>
        <Route exact path='/' component={Auth}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/post' component={Post}/>
        <Route path='/form' component={Form}/>
    </Switch>
)

import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import { Button, Container,DividerHeader,Icon,Message,Menu,Segment} from 'semantic-ui-react';

import axios from 'axios';

import logo from './logo.svg';
import Home from '../common/Home';
import About from '../common/About';
import AddUser from '../AddUser/AddUser';
import EditUser from '../EditUser/EditUser';
import './App.css';

class App extends Component {
      
  render() {
    return (        
        
        <Router > 
            <div>
                <Container>
                    <Menu>
                        <Menu.Item  as={Link}
                        name="home"
                        to="/"
                        content="Home"
                        icon="home"/>
                        <Menu.Item  as={Link}
                        name="about"
                        to="/about"
                        content="About"/>
                    </Menu>
                </Container>

                <div className='App'>
                    <div className='App-header'>
                        <img src={logo} className='App-logo' alt='logo' />
                        <h1 className='App-intro'>SIMPLE MERN CRUD</h1>
                    </div>
                </div>

                <Container>         
                    <Route exact path="/" component={Home}/>
                    <Route path="/adduser" component={AddUser}/> 
                    <Route path='/edituser/:userID' component={EditUser} />
                    <Route path="/about" component={About}/>                
                </Container>

            </div>
      </Router>
    );
  }
}

export default App;

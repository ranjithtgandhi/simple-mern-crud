
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import { Button,Icon} from 'semantic-ui-react';
import TableUser from '../TableUser/TableUser';
import axios from 'axios';
class Home extends Component {

    constructor() {
        super();
        this.state = {
          users: []
        }
    
        this.fetchUsers = this.fetchUsers.bind(this);
        this.onReRender = this.onReRender.bind(this);
      }
      componentDidMount() {
        this.fetchUsers();
      }
      fetchUsers() {
        axios.get(`/api/user`)
        .then((response) => {
          this.setState({ users: response.data });
        })
        .catch((err) => {
          console.log(err);
        });
      }
      onReRender(){
        this.fetchUsers();
      }
  render() {
    return (  
        <div className="ui grid">
            <div className="row"> <div class="column"><Button floated='right' positive as={Link}
                        name="adduser"
                        to="/adduser"> <Icon name='plus' />Add New</Button></div></div>
            <div class="row"> 
                <div class="column">
                    <TableUser
                        headerTitle='Add User'
                        buttonTriggerTitle='Add New'
                        buttonSubmitTitle='Add'
                        buttonColor='green'
                        users={this.state.users}
                        onReRender={this.onReRender}
                    />
                </div>
            </div>
        </div>
    );
  }
}

export default Home;

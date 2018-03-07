
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Table,Button} from 'semantic-ui-react';
import axios from 'axios';
class TableUser extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
   
}
componentDidMount() {                     
 console.log('componentDidMount');
}
componentDidUpdate() {       
  console.log('componentDidUpdate');
}
componentWillMount() {
console.log('componentWillMount'); 
}
componentWillUnmount() {
  console.log('componentWillUnmount'); 
  }
handleDelete(id){
  console.log(id);
axios.delete('/api/user/'+id)
.then((response) => {
  this.props.onReRender();
   
  })
  .catch((err) => {
    
    if (err.response) {
      if (err.response.data) {
        this.setState({
          formClassName: 'warning',
          formErrorMessage: err.response.data.msg
        });
      }
    }
    else {
      this.setState({
        formClassName: 'warning',
        formErrorMessage: 'Something went wrong. ' + err
      });
    }
  });
  
}
  render() {
      
    let {users,onReRender} = this.props;
    
    if(users.length){
      users = users.map((user) => 
        <Table.Row key={user._id} id={`${user._id}`}>
          <Table.Cell>{user.firstName}</Table.Cell>
          <Table.Cell>{user.lastName}</Table.Cell>
          <Table.Cell>
              <Button color='blue' as={Link}  to={`/edituser/${user._id}`}>Edit</Button>
              <Button negative onClick={this.handleDelete.bind(this, user._id)}>Delete</Button>
          </Table.Cell>
        </Table.Row>
      );
      users =  [...users].reverse();
    }else{
     users = (<Table.Row><Table.Cell colSpan='3' textAlign='center'><b>No Records Found...</b></Table.Cell></Table.Row>);    
    }
    
    return (
      <Table fixed sortable color="blue">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
        {users}
        </Table.Body>
      </Table>
    );
  }
}

export default TableUser;

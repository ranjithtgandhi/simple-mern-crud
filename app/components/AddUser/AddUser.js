
import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import { Button, Container,Divider,Header,Icon,Message,Form,Grid} from 'semantic-ui-react';
import axios from 'axios';


class AddUser extends Component {
    constructor(props) {
        super(props);        
        this.state = {
            firstName: '',
            lastName: '',
            formClassName:'',
            formSuccessMessage:''
        }
       
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       
    }
   
    handleInputChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;    
        this.setState({ [name]: value });
    }
    handleSubmit(e) {  
        e.preventDefault(); 
        if(!$('form#addUser').form('validate form')){
            return false;
        }
       
        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName
        }
        const method =  'post';
        const params =  '';

        axios({
            method: method,
            responseType: 'json',
            url: `/api/user`,
            data: user
        })
        .then((response) => {
            /* this.setState({
              formClassName: 'success',
              formSuccessMessage: response.data.msg
            }); */
            console.log('created...');
            this.props.history.push("/"); 
            
          })
          .catch((err) => {
            console.log(err);
           /*  if (err.response) {
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
            } */
          });
    }
    render(){
        const formClassName = this.state.formClassName;
        const formSuccessMessage = this.state.formSuccessMessage;
        const formErrorMessage = this.state.formErrorMessage;

        return (
            <Container>
            <Grid centered columns={2}>
                <Grid.Column>
                    <h3>Add User</h3>
                    <Form id="addUser" className={formClassName} onSubmit={this.handleSubmit}>
                        <Form.Group widths='equal'>
                            <Form.Input fluid name='firstName' label='First name'  placeholder='First name' onChange={this.handleInputChange} />
                            <Form.Input fluid name='lastName' label='Last name'  placeholder='Last name' onChange={this.handleInputChange} />
                        </Form.Group>
                        <Form.Button color='blue'>Submit</Form.Button>
                    </Form>
                </Grid.Column>
            </Grid>
            </Container>
        );
    }
}

export default AddUser
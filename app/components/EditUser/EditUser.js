
import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import { Button, Container,Divider,Header,Icon,Message,Form,Grid} from 'semantic-ui-react';
import axios from 'axios';


class EditUser extends Component {
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
    componentDidMount() {                  
       console.log('componentDidMount');
    }
    componentDidUpdate() {       
        console.log('componentDidUpdate');
        
    }
    componentWillMount() { 
        if (this.props.match.params.userID) {
            axios.get(`/api/user/${this.props.match.params.userID}`)
            .then((response) => {
                this.setState({
                    firstName: response.data.firstName,
                    lastName: response.data.firstName
                });
            })
            .catch((err) => {
            console.log(err);
            });
        }
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
        const method = 'put' ;
        const params = this.props.match.params.userID;

        axios({
            method: method,
            responseType: 'json',
            url: `/api/user/${params}`,
            data: user
        })
        .then((response) => {
            this.props.history.push("/");
            
          })
          .catch((err) => {
              console.log(err);
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
                    <h3>Edit User</h3>
                    <Form id="addUser" className={formClassName} onSubmit={this.handleSubmit}>
                        <Form.Group widths='equal'>
                            <Form.Input fluid name='firstName' label='First name' value={this.state.firstName}   placeholder='First name' onChange={this.handleInputChange} />
                            <Form.Input fluid name='lastName' label='Last name'   value={this.state.lastName} placeholder='Last name' onChange={this.handleInputChange} />
                        </Form.Group>
                        <Form.Button color='blue'>Submit</Form.Button>
                    </Form>
                </Grid.Column>
            </Grid>
            </Container>
        );
    }
}

export default EditUser
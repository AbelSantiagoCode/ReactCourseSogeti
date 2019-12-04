import React, {Component } from 'react';
import UserList from './UserList';

class UserApp extends Component {
    
    constructor(){
        super();
        this.state = {
          users : [
              {id: 1, name: "miguel", email:"test@emaigl.com"},
              {id:2, name:"test", email:"test2@email2.com"}
          ]  
        };
    }
    render(){
        return(
            <UserList users = {this.state.users}></UserList>
        );
    }
}

export default UserApp;
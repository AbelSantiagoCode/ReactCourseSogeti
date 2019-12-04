import React from 'react';
import UserList from './UserList';

export interface Props {

};

export interface State {
    users: {id:number,name:string,email:string }[]
};

class UserApp extends React.Component<Props,State>{
    constructor(props: Props){
        super(props);
        this.state = {
            users : [
                {id: 1, name: "miguel", email:"test@emaigl.com"},
                {id:2, name:"test", email:"test2@email2.com"}
            ]  
          };
    }

    public render(){
        return(
            <UserList users = {this.state.users}></UserList>
        );
    }
}

export default UserApp;
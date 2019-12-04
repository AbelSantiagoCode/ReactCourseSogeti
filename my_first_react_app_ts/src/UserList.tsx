import React from 'react';
import User from './User';

export interface Props {
    users: {id:number,name:string,email:string }[]
};

export interface State {

};

class UserList extends React.Component<Props,State>{
    constructor(props: Props){
        super(props);

    }

    public render(){
        return(
            <ul>
                {
                    this.props.users.map(u => {
                        return(
                            <User key={u.id} name={u.name} email={u.email}></User>
                        );
                    })
                }
            </ul>
        );

    }
}

export default UserList;
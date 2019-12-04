import React, {Component} from 'react';
import User from './User';

class UserList extends Component{
    render() {
        return ( /* return es un metodo anonimo (); */
            <ul>
                {

                    this.props.users.map(u => { /* es un hash map y un foreach alhora */
                        return (
                            <User key={u.id} name={u.name} email={u.email}></User>
                        );
                    })
                }
            </ul>
        );
    }
}

export default UserList;
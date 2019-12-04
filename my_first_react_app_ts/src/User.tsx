import React from 'react';

export interface Props {
    key: number
    name: string,
    email: string

};

export interface State {

};

class User extends React.Component<Props,State>{
    constructor(props: Props){
        super(props);
/*         this.state = {
            showAddress : false,
            showName: false,
            userName : ''
        } */
    }
    public render(){
        return(
            <li>
                {this.props.name} - {this.props.email}
            </li>
        );
    }

}

export default User;
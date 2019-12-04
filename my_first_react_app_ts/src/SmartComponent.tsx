import React from 'react';

export interface Props {
    name: string,
    address: string

};

export interface State {
    showName: boolean,
    showAddress: boolean,
    userName: string
};

class SmartComponent extends React.Component<Props,State>{
    constructor(props: Props){
        super(props);
        this.state = {
            showAddress : false,
            showName: false,
            userName : ''
        }
    }

    /* Function or action for react component with typescript. This function is called 
    Click on show user Name  button in render fuction in line 36. */
    public onShowName = (userName: string): void => {
        this.setState({ showName: true, userName: userName });
    }
    public render(){
        return (
            <div>
                <h1>This is Typescript Smart Component</h1>
                <button onClick={()=> this.onShowName('username of user')}>Show user name</button>
                {/* clase sin nombre */}
                {
                    this.state.showName && <div>{this.state.userName}</div>
                }
            </div>
        );
    }
}

export default SmartComponent;
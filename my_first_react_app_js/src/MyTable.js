import React from 'react';

let id = 0;

function createData(option, type){
    id += 1;
    return {id, option, type};
}

let rows = [
    createData("Setting One","Private"),
    createData('Setting Two','Public'),
    createData('Setting Three','Que pasa Bro'),
    createData('Setting Four','Private')
];

export default class MyTable extends React.Component{
    render(){
        return(
            <table>
                {
                    rows.map( row => (
                        <tr key={row.id}>
                            <td>{row.option}</td>
                            <td>{row.type}</td>
                        </tr>
                        ))
                }
            </table>
        );
    }
}
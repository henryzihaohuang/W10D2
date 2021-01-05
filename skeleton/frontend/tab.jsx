import React from 'react'

export default class Tab extends React.Component{

    constructor(props){
        super(props);
        this.state = {currentTab: 0}
    }

    render(){
        const tab = this.props.tabs[this.state.currentTab];
        return (
            <div>
                <h1>{tab}</h1>
                <div></div>
            </div>
        )
    }


}
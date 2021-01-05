import React from 'react'

export default class Tab extends React.Component{

    constructor(props){
        super(props);
        this.state = {currentTab: 0}
    }

    render(){
        const header = this.props.tabs.map = (el,idx) => {
            if (idx === this.state.currentTab){
                return <h1 className="current">{el.title}</h1>
            } else {
                return <h1>{el.title}</h1>
            }
        };
        
        return (
            <div className="tab">
                <header>{header}</header>
                <article>{this.props.tabs[this.state.currentTab].content} </article>
            </div>
        )
    }


}
import React from 'react'

export default class Tab extends React.Component{

    constructor(props){
        super(props);
        this.state = {currentTab: 0}
        this.selectedTab = this.selectedTab.bind(this);
    }

    selectedTab(event){
        event.preventDefault();
        this.setState({currentTab: event.currentTarget.key})
    }

    render(){
        const header = this.props.tabs.map((el,idx) => {
            if (idx === this.state.currentTab){
                return <li onClick={this.selectedTab} key={idx}><h1 className="current">{el.title}</h1></li>
            } else {
                return <li onClick={this.selectedTab} key={idx}><h1>{el.title}</h1></li>
            }
        });
        
        return (
            <div className="tab">
                <header>
                    <ul>
                        {header}
                    </ul>
                </header>
                <article>{(this.props.tabs[this.state.currentTab])} </article>
            </div>
        )
    }


}
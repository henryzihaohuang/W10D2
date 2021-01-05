import React from 'react';

export default class Clock extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            time: new Date(),
            date: new Date()
        }

        //bind functions
        this.tick = this.tick.bind(this);

    }

    componentDidMount(){
        this.interval = setInterval(this.tick,1000);

    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }


    tick() {
        this.setState({
            time: new Date()
        })
    }

    render() {
        return(
            <div className="clock">
            <h1>Clock</h1>
                <h2>{this.state.time.getHours()} :
                    {this.state.time.getMinutes()} :
                    {this.state.time.getSeconds()} </h2>

                <h2>
                    {this.state.date.toLocaleDateString()} 
                </h2>
            </div>

        )
    }
}
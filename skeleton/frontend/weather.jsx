import React from 'react';

export default class Weather extends React.Component {

    constructor(props) {
        super(props)

        this.state = ({
            weather: "",
            temperature: ""
        })

        //bind functions

        this.getWeather = this.getWeather.bind(this);
        this.processWeather = this.processWeather.bind(this);
    }

    componentDidMount() {
        let geo = navigator.geolocation;
        geo.getCurrentPosition(
            (position) => {
                this.getWeather(position.coords.latitude, position.coords.longitude)  
            }
        );
    }

    getWeather(lat,lon) {
        const res = $.ajax({
            method: 'GET',
            url: `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=26c83a8c404794c987d02d78b70ae9f8`, 
        })

        res.then(this.processWeather);
    }

    processWeather(res){
        this.setState({
            weather: res.weather.main,
            temperature: res.main.temp
        })
    }

    render() {
        return(
            <div className="weather">
            <h1>Weather description</h1>

            <h2>{this.state.weather}, {this.state.temperature} </h2>
            </div>
        )
    }


}
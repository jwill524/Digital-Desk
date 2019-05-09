import React from 'react';
import Titles from '../Titles'
import Form from '../Form'
import Weather from '../weather'
import { NavLink } from 'react-router-dom';



const Api_Key = "5fd161b3f496de85852792f81ca1cdf0"

class cheese extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  
  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}&units=imperial`);

    const response = await api_call.json();
    
    if(city && country){
      console.log(response);
    this.setState({
      temperature: response.main.temp,
      city: response.name,
      country: response.sys.country,
      humidity: response.main.humidity,
      description: response.weather[0].description,
      error: ""
    })

    }else{
      this.setState({
        error: "Please enter values..."
      })
    }
  }
  render() {
    return (
      <div className="pie">
    {/* I had to add a navlink so it would register on the main background */}
      <NavLink to="/" style={{color:"black", fontSize:"20px"}}>Home</NavLink>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather 
        temperature={this.state.temperature}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        description={this.state.description}
        error={this.state.error} />
      </div>
    )
  }
}
export default cheese;
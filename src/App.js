import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = `${process.env.REACT_APP_API_KEY}`;

class App extends React.Component { 
  getForecast = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const tempArrays = []
    const newArray = []
    const temp = undefined
    const temp_max = undefined
    const temp_min = undefined
    const humidity = undefined
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=imperial`);
    const data = await api_call.json();
    console.log(data);
    const listArray=data.list
    console.log(listArray)
    let newArr = listArray.map(day => {
      const date = new Date(day.dt * 1000);
      const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
      const name = days[date.getDay()];
      const temp = day.main.temp;
      const temp_max = day.main.temp_max;
      const temp_min = day.main.temp_min;
      const humidity = day.main.humidity;
      const description = day.weather[0].description;
      console.log(`date: ${date} name: ${name} temp: ${temp} temp_max: ${temp_max} temp_min: ${temp_min} humidity: ${humidity} description: ${description}`);
      return newArr = [{date}, {name}, {temp}, {temp_max}, {temp_min}, {humidity}, {description}];
    })
    console.log(JSON.stringify(newArr))
    // console.log(`tempArrays: ${newArr} newArrays: ${newArray}`)
  }
  render(){
    return(
      <div>
        <Titles />
        <Form getForecast={this.getForecast} />
        <Weather />
      </div>
    )
  }
}

export default App;
import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = `${process.env.REACT_APP_API_KEY}`;

class App extends React.Component { 
  getForecast = async (e) => {
    e.preventDefault();
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Manchester,uk&appid=${API_KEY}&units=imperial`);
    const data = await api_call.json();
    console.log(data);
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
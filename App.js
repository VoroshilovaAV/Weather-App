import React from 'react';
import { Alert } from 'react-native';
import axios from 'axios';
import * as Location from 'expo-location';
import { API_KEY } from './src/constants'
import Loading from './src/components/Loading';
import Weather from './src/components/Weather';

export default class extends React.Component {
  
  state = {
    isLoading: true
  }

  getWeather = async(latitude, longitude) => {    
    const {data: {main: {temp}, weather, name}} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    this.setState({
      isLoading: false, 
      temp: temp, 
      city: name,
      condition: weather[0].main
    });
  }
  
  getLocation = async() => {    
    try {
      await Location.requestForegroundPermissionsAsync();      
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);      
    } catch(error){
      Alert.alert('Can`t locate', "It's very sad :(")
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const {isLoading, temp, city, condition} = this.state;
    return (
      isLoading ? <Loading /> : <Weather temp={Math.round(temp)} city={city} condition={condition}/>     
    );
  } 
}

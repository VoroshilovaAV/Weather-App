import React from 'react';
import { Alert } from 'react-native';
import * as Location from 'expo-location';
import Loading from './Loading';

const API_KEY = '73da943d35f5f03ad9e59ba316761a1b';
export default class extends React.Component {
  
  state = {
    isLoading: true
  }
  
  getLocation = async() => {    

    try {
      await Location.requestForegroundPermissionsAsync();      
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.setState({isLoading: false});
      //сделать запрос к API
    } catch(error){
      Alert.alert('Не могу определить местоположение', "Очень грустно:(")
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const {isLoading} = this.state;
    return (
      isLoading ? <Loading /> : null      
    );
  } 
}
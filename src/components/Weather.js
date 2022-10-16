import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import propTypes from 'prop-types';
import weatherOptions from '../constants';

export default function Weather({temp, condition}) {
    return (
        <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}>
            <StatusBar barStyle='light-content' />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color='white'/>
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>                
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>  
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>     
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: propTypes.number.isRequired,
    condition: propTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Clear", "Clouds", "Mist", "Smoke", "Haze", "Dust", "Fog", "Sand", "Ash", "Squall", "Tornado"]).isRequired
}

const styles = StyleSheet.create({
    container:{
        flex: 1        
    },
    halfContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    temp:{
        fontSize: 42,  
        color: 'white'     
    },
    title: {
        color: 'white',
        fontSize: 38,
        fontWeight: '300',
        marginBottom: 10,
        textAlign: 'left'
    },
    subtitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'left'
    },
    textContainer: {
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
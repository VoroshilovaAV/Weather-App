import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function Loading() {
    return (<View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.text}>Getting weather...</Text>
    </View>)
}
const styles = StyleSheet.create({
    container:{
       flex: 1,
       justifyContent:'flex-end',
       paddingHorizontal: 30,
       paddingVertical: 80,
       backgroundColor: "#E6E6FA",
    },
    text: {
        color: "2c2c2c",
        fontSize: 25
    }
})

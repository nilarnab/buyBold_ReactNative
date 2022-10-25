import React, { useState, useEffect } from 'react'
import MapView from 'react-native-maps';
import { Marker, AnimatedRegion, Animated } from 'react-native-maps';
import { View, Text, StyleSheet, Button } from 'react-native';
import * as Location from 'expo-location';




// class Map extends React.Component {
//     constructor(props) {
//         super(props)
//         // console.log(props);
//         this.state = {
//             region: {
//                 latitude: 26.91250253532257,
//                 longitude: 75.79602722078562,
//                 latitudeDelta: 0.0922,
//                 longitudeDelta: 0.0421,
//             },
//             marker: null
//         }
//     }
//     render(props) {



//         return (<>

//             <MapView
//                 style={styles.mapStyle}
//                 showsUserLocation={true}
//                 zoomEnabled={true}
//                 zoomControlEnabled={true}
//                 initialRegion={this.state.region}
//                 // onClick={alert("clicked")}
//                 onPress={(e) => {
//                     let coordinates = e.nativeEvent.coordinate;
//                     // console.log(coordinates);
//                     this.setState({
//                         region: {
//                             latitude: coordinates.latitude,
//                             longitude: coordinates.longitude,
//                             latitudeDelta: 0.0922,
//                             longitudeDelta: 0.0421,
//                         }
//                     })

//                 }}
//             >

//                 <Marker
//                     coordinate={{ latitude: this.state.region.latitude, longitude: this.state.region.longitude }}
//                     title={"Address"}
//                     description={"This will be used as your deliverry address"}
//                 />
//             </MapView>
//             <Text style={{ top: 50, textAlign: 'center', fontSize: 22, marginBottom: 100 }}>Select Your Location</Text>
//             <View style={styles.screen}>
//                 <Button title="Confirm" style={{}} onPress={() => { this.props.navigation.navigate('Phone') }} />
//             </View>

//         </>
//         )
//     }
// }

export const Map = (props) => {

    const [state, setState] = useState(
        {
            latitude: 20.91250253532257,
            longitude: 10.79602722078562,
            latitudeDelta: 9.22,
            longitudeDelta: 4.21,
        }
    );
    const [location, setLocation] = useState({
        coords: {
            latitude: 20.91250253532257,
            longitude: 10.79602722078562
        }
    });
    const [errorMsg, setErrorMsg] = useState(null);

    console.log("location")
    console.log(location)

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            let state = {
                lattitude: location.coords.latitude,
                longitude: 10.79602722078562,
                latitudeDelta: 9.22,
                longitudeDelta: 4.21,
            };
            setState(state);
            setLocation(location)
        })();
    }, []);


    return (
        <>
            <Animated
                style={styles.mapStyle}
                showsUserLocation={true}
                zoomEnabled={true}
                zoomControlEnabled={true}
                onPress={(e) => {
                    let coordinates = e.nativeEvent.coordinate;
                    setLocation({
                        coords: {
                            latitude: coordinates.latitude,
                            longitude: coordinates.longitude
                        }
                    })

                }}
                initialRegion={state}
            >
                <Marker
                    coordinate={{ latitude: location.coords.latitude, longitude: location.coords.longitude }}
                    title={"JavaTpoint"}
                    description={"Java Training Institute"}
                />

            </Animated>
            <View style={styles.screen}>
                <Button title="Confirm" style={{}} onPress={() => { props.navigation.navigate('Phone') }} />
            </View>
        </>

        //             <MapView
        //                 style={styles.mapStyle}
        //                 showsUserLocation={true}
        //                 zoomEnabled={true}
        //                 zoomControlEnabled={true}
        //                 initialRegion={this.state.region}
        //                 // onClick={alert("clicked")}
        //                 onPress={(e) => {
        //                     let coordinates = e.nativeEvent.coordinate;
        //                     // console.log(coordinates);
        //                     this.setState({
        //                         region: {
        //                             latitude: coordinates.latitude,
        //                             longitude: coordinates.longitude,
        //                             latitudeDelta: 0.0922,
        //                             longitudeDelta: 0.0421,
        //                         }
        //                     })

        //                 }}
        //             >

        //                 <Marker
        //                     coordinate={{ latitude: this.state.region.latitude, longitude: this.state.region.longitude }}
        //                     title={"Address"}
        //                     description={"This will be used as your deliverry address"}
        //                 />
        //             </MapView>
        //             <Text style={{ top: 50, textAlign: 'center', fontSize: 22, marginBottom: 100 }}>Select Your Location</Text>
        //             <View style={styles.screen}>
        //                 <Button title="Confirm" style={{}} onPress={() => { this.props.navigation.navigate('Phone') }} />
        //             </View>

        //         </>

    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mapStyle: {
        position: 'relative',
        left: 0,
        right: 0,
        bottom: 0,
        height: 500
    },
});
export default Map
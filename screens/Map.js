import React from 'react'
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { View, Text, StyleSheet, Button } from 'react-native';

class Map extends React.Component {
    constructor(props) {
        super(props)
        // console.log(props);
        this.state = {
            region: {
                latitude: 26.91250253532257,
                longitude: 75.79602722078562,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            marker: null
        }
    }
    render(props) {
        return (<>

            <MapView
                style={styles.mapStyle}
                showsUserLocation={true}
                zoomEnabled={true}
                zoomControlEnabled={true}
                initialRegion={this.state.region}
                // onClick={alert("clicked")}
                onPress={(e) => {
                    let coordinates = e.nativeEvent.coordinate;
                    // console.log(coordinates);
                    this.setState({
                        region: {
                            latitude: coordinates.latitude,
                            longitude: coordinates.longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }
                    })

                }}
            >

                <Marker
                    coordinate={{ latitude: this.state.region.latitude, longitude: this.state.region.longitude }}
                    title={"Address"}
                    description={"This will be used as your deliverry address"}
                />
            </MapView>
            <Text style={{ top: 50, textAlign: 'center', fontSize: 22, marginBottom: 100 }}>Select Your Location</Text>
            <View style={styles.screen}>
                <Button title="Confirm" style={{}} onPress={() => { this.props.navigation.navigate('Phone') }} />
            </View>

        </>
        )
    }
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
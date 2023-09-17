import React from 'react'
import { useRouter } from 'expo-router';
import styles from './mapview.style';
import MapView, { Heatmap } from 'react-native-maps';

const MapViewWidget = () => {
    const router = useRouter();

    const baseLatitude = 1.2936; // Latitude of Suntec Singapore Convention and Exhibition Centre
    const baseLongitude = 103.857; // Longitude of Suntec Singapore Convention and Exhibition Centre

    const dataPoints = [];

    const getRandomNumberInRange = (min, max) => {
        return Math.random() * (max - min) + min;
    }

    for (let i = 0; i < 10000; i++) {
        const latitude = baseLatitude + getRandomNumberInRange(-0.0005, 0.0005); // Generate a random latitude within a larger range
        const longitude = baseLongitude + getRandomNumberInRange(-0.0005, 0.0005); // Generate a random longitude within a larger range
        const weight = 1;

        const dataPoint = {
            latitude,
            longitude,
            weight
        };

        dataPoints.push(dataPoint);
    }

    let currentLocation = {
        latitude: 1.2936,
        longitude: 103.857,
        latitudeDelta: 0.0167,
        longitudeDelta: 0.0180,
    }

    return (
        <MapView
            provider='google'
            style={styles.map}
            initialRegion={currentLocation}
            showsUserLocation='true'
            showsBuildings='true'
        >
            <Heatmap
                points={dataPoints}
                opacity={1}
                radius={50} />
        </MapView>
    );
}

export default MapViewWidget;
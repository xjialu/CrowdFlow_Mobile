import React, { useEffect, useState } from 'react'
import { useRouter } from 'expo-router';
import styles from './mapview.style';
import { View } from 'react-native'
import MapView, { Heatmap, PROVIDER_GOOGLE } from 'react-native-maps';

const MapViewWidget = () => {
    const router = useRouter();
    const [points, setPoints] = useState(null);

    useEffect(() => {
        generatePoints();
        function intervals() {
            setInterval(generatePoints, 5000)
        }
        intervals()
        return intervals
    }, [])

    const baseLatitude = 1.2936; // Latitude of Suntec Singapore Convention and Exhibition Centre
    const baseLongitude = 103.857; // Longitude of Suntec Singapore Convention and Exhibition Centre


    const getRandomNumberInRange = (min, max) => {
        return Math.random() * (max - min) + min;
    }

    const gradient = {
        "colors": ["#00FF00", "#FFA500", "#FF0000"],
        "startPoints": [0.0001, 0.005, 0.01],
        "colorMapSize": 256
    }

    function generatePoints() {
        const dataPoints = [];

        for (let i = 0; i < 100; i++) {
            const latitude = baseLatitude + getRandomNumberInRange(-0.0005, 0.0004); // Generate a random latitude within a larger range
            const longitude = baseLongitude + getRandomNumberInRange(-0.0004, 0.0005); // Generate a random longitude within a larger range
            const weight = 1;

            const dataPoint = {
                latitude,
                longitude,
                weight
            };

            dataPoints.push(dataPoint);
        }
        setPoints(dataPoints)
    }

    let currentLocation = {
        latitude: 1.2936,
        longitude: 103.857,
        latitudeDelta: 0.0167,
        longitudeDelta: 0.0180,
    }

    const camera = {
        center: {
            latitude: 1.2936,
            longitude: 103.857,
        },
        pitch: 1,
        heading: 1,

        // Only when using Google Maps.
        zoom: 18.5
    }

    return (
        <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={currentLocation}
            camera={camera}
        >
            <Heatmap
                points={points}
                opacity={0.7}
                radius={50}
                gradient={gradient}
            />
        </MapView>
    );
}

export default MapViewWidget;
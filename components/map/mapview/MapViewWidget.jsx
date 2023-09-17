import React from 'react'
import { useRouter } from 'expo-router';

import styles from './mapview.style';
import MapView from 'react-native-maps';
import { Heatmap } from 'react-native-maps';

const MapViewWidget = () => {
    const router = useRouter();

    let points = [
        { "latitude": 1.2931, "longitude": 103.8593, "weight": 2598 },
        { "latitude": 1.2932, "longitude": 103.8593, "weight": 8913 },
        { "latitude": 1.2930, "longitude": 103.8593, "weight": 7123 },
        { "latitude": 1.2931, "longitude": 103.8593, "weight": 3987 },
        { "latitude": 1.2930, "longitude": 103.8592, "weight": 1576 },
        { "latitude": 1.2932, "longitude": 103.8592, "weight": 6543 },
        { "latitude": 1.2931, "longitude": 103.8592, "weight": 2387 },
        { "latitude": 1.2932, "longitude": 103.8593, "weight": 5126 },
        { "latitude": 1.2932, "longitude": 103.8592, "weight": 3478 },
        { "latitude": 1.2932, "longitude": 103.8592, "weight": 7241 },
        { "latitude": 1.2930, "longitude": 103.8592, "weight": 9465 },
        { "latitude": 1.2931, "longitude": 103.8592, "weight": 6289 },
        { "latitude": 1.2932, "longitude": 103.8592, "weight": 4823 },
        { "latitude": 1.2933, "longitude": 103.8592, "weight": 7856 },
        { "latitude": 1.2931, "longitude": 103.8593, "weight": 3562 },
        { "latitude": 1.2930, "longitude": 103.8593, "weight": 1894 },
        { "latitude": 1.2931, "longitude": 103.8593, "weight": 8739 },
        { "latitude": 1.2932, "longitude": 103.8593, "weight": 5321 },
        { "latitude": 1.2930, "longitude": 103.8592, "weight": 6217 },
        { "latitude": 1.2932, "longitude": 103.8592, "weight": 4265 },
        { "latitude": 1.2931, "longitude": 103.8592, "weight": 2543 },
        { "latitude": 1.2932, "longitude": 103.8593, "weight": 7954 },
        { "latitude": 1.2932, "longitude": 103.8592, "weight": 1137 },
        { "latitude": 1.2932, "longitude": 103.8592, "weight": 6341 },
        { "latitude": 1.2930, "longitude": 103.8592, "weight": 9172 },
        { "latitude": 1.2931, "longitude": 103.8593, "weight": 3458 },
        { "latitude": 1.2932, "longitude": 103.8593, "weight": 7863 },
        { "latitude": 1.2931, "longitude": 103.8593, "weight": 9247 },
        { "latitude": 1.2932, "longitude": 103.8593, "weight": 6698 },
        { "latitude": 1.2930, "longitude": 103.8592, "weight": 4312 },
        { "latitude": 1.2932, "longitude": 103.8592, "weight": 5992 },
        { "latitude": 1.2931, "longitude": 103.8592, "weight": 1971 },
        { "latitude": 1.2932, "longitude": 103.8593, "weight": 5934 },
        { "latitude": 1.2932, "longitude": 103.8592, "weight": 9274 },
        { "latitude": 1.2932, "longitude": 103.8592, "weight": 8241 },
        { "latitude": 1.2930, "longitude": 103.8592, "weight": 1122 },
        { "latitude": 1.2931, "longitude": 103.8593, "weight": 2457 },
        { "latitude": 1.2932, "longitude": 103.8593, "weight": 6815 },
        { "latitude": 1.2931, "longitude": 103.8593, "weight": 3279 },
        { "latitude": 1.2932, "longitude": 103.8593, "weight": 8237 },
        { "latitude": 1.2930, "longitude": 103.8592, "weight": 2787 },
        { "latitude": 1.2932, "longitude": 103.8592, "weight": 1876 },
        { "latitude": 1.2931, "longitude": 103.8592, "weight": 6824 },
        { "latitude": 1.2932, "longitude": 103.8593, "weight": 2398 }
    ];

    let currentLocation = {
        latitude: 1.2931,
        longitude: 103.8593,
        latitudeDelta: 0.0167,
        longitudeDelta: 0.0180,
    }

    return (
        <MapView
            provider='google'
            style={styles.map}
            initialRegion={currentLocation}
            showsUserLocation='true'
        >
            <Heatmap
                points={points}
                opacity={1}
                radius={35} />
        </MapView>
    );
}

export default MapViewWidget;
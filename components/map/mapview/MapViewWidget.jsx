import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useRouter } from 'expo-router';
import MapView from 'react-native-maps';

import styles from './mapview.style';

const MapViewWidget = () => {
    const router = useRouter();
    return (
        <MapView style={{ height: "75%", width: "100%" }}
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        />
    );
}

export default MapViewWidget;
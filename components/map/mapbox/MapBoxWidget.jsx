import React from 'react';
import { StyleSheet, View } from 'react-native';
import Mapbox from '@rnmapbox/maps';

Mapbox.setAccessToken('pk.eyJ1IjoiZXZhbnlhbjEzIiwiYSI6ImNsbWJxdjZicTBycngzaGw1YzU3c2FkaHQifQ.S-X2FSWIpbSY8S2cJXzaEw');

const MapBoxWidget = () => {
    return (
        <View style={styles.page}>
          <View style={styles.container}>
            <Mapbox.MapView style={styles.map} />
          </View>
        </View>
      );    
}

export default MapBoxWidget;

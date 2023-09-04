import { useState } from 'react';
import { 
  View, Text, TouchableOpacity, FlatList, ActivityIndicator 
} from 'react-native';
import { useRouter } from 'expo-router';
import styles from './mapwidget.style';
import { COLORS, SIZES } from '../../../constants';
import PopularStallsCard from '../../common/cards/popular/PopularStallsCard';
import { isLoaded } from 'expo-font';

const MapWidget = () => {
  const router = useRouter();
  const isLoading = false;
  const error = false;
  const goToMap = () => {
    router.push('/map');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Map
        </Text>
      </View>
      <TouchableOpacity style={styles.container} onPress={goToMap}>
        <Text>
          map
        </Text>
      </TouchableOpacity>
    </View>
  )
}


export default MapWidget
import { useState } from 'react';
import { 
  View, Text, TouchableOpacity, FlatList, ActivityIndicator 
} from 'react-native';
import { useRouter } from 'expo-router';

import styles from './popularstalls.style';
import { COLORS, SIZES } from '../../../constants';
import PopularStallsCard from '../../common/cards/popular/PopularStallsCard';

const Popularstalls = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Popular Stalls
        </Text>
      </View>
    </View>
  )
}

export default Popularstalls
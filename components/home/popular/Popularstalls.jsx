import { useState } from 'react';
import { 
  View, Text, TouchableOpacity, FlatList, ActivityIndicator 
} from 'react-native';
import { useRouter } from 'expo-router';

import styles from './popularstalls.style';
import { COLORS, SIZES } from '../../../constants';
import PopularStallsCard from '../../common/cards/popular/PopularStallsCard';
import { isLoaded } from 'expo-font';

const Popularstalls = () => {
  const router = useRouter();
  const isLoading = false;
  const error = false;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Popular Stalls
        </Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>
            Show all
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong.</Text>
        ) : (
          <FlatList
            data={["Amazon", "Apple", "Microsoft"]}
            renderItem={({ item }) => (
              <PopularStallsCard 
                selectedJob={false}
                item={item}
              />
          )}
          keyExtractor={(item) => item?.stall_id}
          contentContainerStyle={{columnGap: SIZES.medium}}
          horizontal
        />
        )}
      </View>
    </View>
  )
}

export default Popularstalls
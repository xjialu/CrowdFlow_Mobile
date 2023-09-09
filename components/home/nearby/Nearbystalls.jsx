import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { SIZES } from '../../../constants'
import NearbyStallsCard from '../../common/cards/nearby/NearbyStallsCard'
import PopularStallsCard from '../../common/cards/popular/PopularStallsCard'

import styles from './nearbystalls.style'

const Nearbystalls = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Nearby Stalls
        </Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>
            Show all
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        <FlatList
          data = {"1,2"}
          renderItem = {({item}) => (
            <NearbyStallsCard
            item={item}
            // selectedJob={selectedJob}
            // handleCardPress={handleCardPress}
            />
          )}
          keyExtractor={item => item?.job_id}
          contentContainerStyle = {{ columnGap:SIZES.medium}}
        />
      </View>

    </View>
  )
}

export default Nearbystalls
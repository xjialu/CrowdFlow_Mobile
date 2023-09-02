import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import styles from './nearbystallscard.style'

const NearbyStallsCard = () => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={
            require("/Users/xujialu/Desktop/CrowdFlow_Mobile/assets/icons/amazon.png")
          }
        />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default NearbyStallsCard
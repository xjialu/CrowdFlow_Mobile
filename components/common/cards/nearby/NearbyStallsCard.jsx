import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import styles from './nearbystallscard.style'

const NearbyStallsCard = ({ stall, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={
            require=("../../../../assets/icons/amazon.png")
          }
          resizeMode='contain'
          style={styles.logImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          Amazon
        </Text>

        <Text style={styles.jobType}>Tech and IT</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyStallsCard
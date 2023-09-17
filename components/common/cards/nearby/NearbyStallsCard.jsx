import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import styles from './nearbystallscard.style'

const imageMap = {
  Amazon: require('../../../../assets/icons/amazon.png'),
  Apple: require('../../../../assets/icons/apple.png'),
  Microsoft: require('../../../../assets/icons/microsoft.png'),
  Figma: require('../../../../assets/icons/figma.png'),
  Linkedin: require('../../../../assets/icons/linkedin.png'),
  Slack: require('../../../../assets/icons/slack.png'),
  Twitch: require('../../../../assets/icons/twitch.png'),
};

const NearbyStallsCard = ({ stall, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={
            imageMap[stall]
          }
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {stall}
        </Text>

        <Text style={styles.jobType}>Tech and IT</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyStallsCard
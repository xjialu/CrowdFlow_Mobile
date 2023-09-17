import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularstallscard.style'

const imageMap = {
  Amazon: require('../../../../assets/icons/amazon.png'),
  Apple: require('../../../../assets/icons/apple.png'),
  Microsoft: require('../../../../assets/icons/microsoft.png'),
};

const PopularStallsCard = ({ item, selectedJob, /*handleCardPress*/ }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
    // onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={(imageMap[item])}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>{item}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          Hall 2, Area A
        </Text>
        <Text style={styles.location}>
          500m away
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularStallsCard
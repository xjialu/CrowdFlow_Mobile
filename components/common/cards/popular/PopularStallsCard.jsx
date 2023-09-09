import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './popularstallscard.style'

const PopularStallsCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={ require("../../../../assets/icons/amazon.png") } 
          resizeMode="contain"
          style={styles.logoImage}
          />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>Amazon</Text>
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
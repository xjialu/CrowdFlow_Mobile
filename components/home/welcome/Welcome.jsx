import { useState } from 'react'
import { 
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList 
} from 'react-native'
import { useRouter } from 'expo-router';

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'

const stallTypes = ["IT", "Business", "Engineering", "Science", "Arts", "Others"]

const Welcome = () => {
  const router = useRouter();
  const [activeStallType, setActiveStallType] = useState('IT')

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello, John</Text>
        <Text style={styles.welcomeMessage}>Find your next stop</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
          style={styles.searchInput} 
          value=""
          onChange={() => {}}
          placeholder="Where would you like to visit?" 
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList 
          data={stallTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
            style={styles.tab(activeStallType, item)}
            onPress={() => {
              setActiveStallType(item);
              router.push('/search/${item}')
            }}
            >
                <Text style={styles.tabText(activeStallType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />

      </View>
    </View>
  )
}

export default Welcome
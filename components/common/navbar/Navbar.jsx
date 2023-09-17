import styles from "./Navbar.style"
import { View, Text, TouchableOpacity, Image, Pressable, StyleSheet} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useRouter } from 'expo-router'
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const router = useRouter();
const goToMap = () => {
  router.push('/map');
}

const Navbar = () => {
    return (
        <View style={styles.NavContainer}>
          <View style={styles.NavBar}>
            <View style={styles.IconBehave}>
              <Pressable onPress={goToMap} >
              <AntDesign name="home" size={26} color="white" />
              </Pressable>
              <Pressable>
              <Ionicons name="ios-map-outline" size={26} color="white" />
              </Pressable>
              <Pressable>
              <AntDesign name="bulb1" size={26} color="white" />
              </Pressable>
              <Pressable>
              <Ionicons name="ios-settings-outline" size={26} color="white" />
              </Pressable>
            </View>
          </View>

        </View>
      );
}

export default Navbar

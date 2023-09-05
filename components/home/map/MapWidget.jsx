import { 
  View, Text, TouchableOpacity
} from 'react-native';
import { useRouter } from 'expo-router';
import styles from './mapwidget.style';
import { Button } from "@react-native-material/core";
import { Surface } from "@react-native-material/core";

const MapWidget = () => {
  const router = useRouter();
  const goToMap = () => {
    router.push('/map');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Map
        </Text>
      </View>
      <Surface
        elevation={2}
        margin={10}
        category="medium"
        style={{ width: 380, height: 150 }}
      />
    </View>
  )
}


export default MapWidget
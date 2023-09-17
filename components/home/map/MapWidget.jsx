import {
  View, Text, TouchableOpacity, ImageBackground
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
        <Text style={styles.headerTitle} onPress={goToMap}>
          Map
        </Text>
      </View>
      <TouchableOpacity onPress={goToMap}>
        <Surface
          elevation={2}
          margin={10}
          category="medium"
          style={{
            overflow: "hidden",
            justifyContent: "center"
          }}
        >
          <ImageBackground
            source={require("../../../assets/images/map.png")}
            style={{
              width: 380,
              height: 200,
              justifyContent: "center",
            }}
          >
          </ImageBackground>
        </Surface>

      </TouchableOpacity>
    </View>
  )
}


export default MapWidget
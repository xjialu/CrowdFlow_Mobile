import styles from "./Navbar.styles"
import Icon from 'react-native-ico-material-design';
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Navbar = () => {
    return (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
    
              if (route.name === 'index') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'index') {
                iconName = focused ? 'star' : 'star-outline';
              } else if (route.name === 'map') {
                iconName = focused ? 'map' : 'map-outline';
              } else if (route.name === 'settings') {
                iconName = focused ? 'settings' : 'settings-outline';
              }
              return <MaterialIcons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Home" component={index} />
          <Tab.Screen name="Recommendations" component={index} />
          <Tab.Screen name="Map" component={Mmap} />
          <Tab.Screen name="Settings" component={map} />
        </Tab.Navigator>
      );
}

export default Navbar

import styles from "./Navbar.style"
import { View, Text, TouchableOpacity, Image, Pressable, StyleSheet} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useRouter } from 'expo-router'
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from "react";
import { COLORS } from "../../../constants";

const Tab = createBottomTabNavigator();
const router = useRouter();

const Navbar = ({ defaultPage }) => {
  const activePage = defaultPage; // Initialize with the default page
  const goToMap = () => {
    router.push('/map');
  }
  const goToHome = () => {
    router.back()
  }
    return (
        <View style={styles.NavContainer}>
          <View style={styles.NavBar}>
            <View style={styles.IconBehave}>
              <Pressable onPress={goToHome}>
              <AntDesign name="home" size={26} color={activePage === 'home' ? COLORS.tertiary : 'white'} />
              </Pressable>
              <Pressable onPress={goToMap}>
              <Ionicons name="ios-map-outline" size={26} color={activePage === 'map' ? COLORS.tertiary : 'white'} />
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

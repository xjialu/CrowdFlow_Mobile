import { View, ScrollView, SafeAreaView, Image } from 'react-native';
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { COLORS, icons, images, SIZES } from '../constants';
import { Nearbystalls, Popularstalls, ScreenHeaderBtn, Welcome, MapWidget, Navbar } from '../components';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const Home = () => {

    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <Image
                            source={require("../assets/icon.png")}
                            style={{
                                height: 40,
                                width: 120,
                                resizeMode: "contain"
                            }}
                        />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension='60%' />
                    ),
                    headerTitle: ""
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        padding: SIZES.medium,
                    }}
                >
                    <Welcome />
                    <MapWidget />
                    <Popularstalls />
                    <Nearbystalls />
                </View>
            </ScrollView>
            <Navbar />
        </SafeAreaView>
    )
}

export default Home;

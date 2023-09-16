import { View, ScrollView, SafeAreaView, ViewComponent } from 'react-native';
import { useState } from 'react';
import { Stack, useRouter, Drawer } from 'expo-router';
import { COLORS, icons, images, SIZES } from '../constants';
import { ScreenHeaderBtn, ActivityStatus, MapViewWidget, Navbar } from '../components';

const Map = () => {

    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' onPress={() => navigation.openDrawer()} />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension='60%' />
                    ),
                    headerTitle: "",
                }}
            />
            <MapViewWidget />
            <Navbar />
        </SafeAreaView >
    )
}

export default Map;
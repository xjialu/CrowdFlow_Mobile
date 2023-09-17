import { View, StyleSheet } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { icons, images, } from '../constants';
import { ScreenHeaderBtn, MapViewWidget, Navbar } from '../components';

const Map = () => {

    const router = useRouter();
    const goToHome = () => {
        router.back();
    }

    return (
        <View style={{ flex: 1 }}>
            <Stack.Screen
                options={{
                    headerTransparent: true,
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.left} dimension='60%' handlePress={goToHome} />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension='60%' />
                    ),
                    headerTitle: "",
                }}
            />
            <MapViewWidget />
            <Navbar defaultPage={'map'}/>
        </View>
    )
}

export default Map;
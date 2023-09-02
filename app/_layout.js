import { Stack } from 'expo-router';
import {  useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Layout = () => {
const[fontsLoaded] = useFonts({
    DMBold: require('../assets/fonts/SF-Pro-Display-Bold.otf'),
    DMMedium: require('../assets/fonts/SF-Pro-Display-Medium.otf'),
    DMRegular: require('../assets/fonts/SF-Pro-Display-Regular.otf'),
})

const onLayoutRootView = useCallback(async () => {
    if(fontsLoaded){
        await SplashScreen.hideAsync();
    }
    }, [fontsLoaded]);

    if(!fontsLoaded) return null;
    


    return <Stack onLayout={onLayoutRootView} />;
}

export default Layout;
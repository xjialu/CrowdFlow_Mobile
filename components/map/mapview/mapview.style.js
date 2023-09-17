import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        container: {
            ...StyleSheet.absoluteFillObject,
            height: 400,
            width: 400,
            justifyContent: 'flex-end',
            alignItems: 'center',
        },
    },
    // map: {
    //     width: '100%',
    //     height: '100%',
    //     flex: 'contain'
    // },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
})

export default styles;
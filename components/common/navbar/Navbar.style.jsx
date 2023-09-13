import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    NavContainer: {
        position: "absolute",
        alignItems: "center",
        bottom: 40,
        left: 0,
        right: 0,
    },
  
    NavBar: {
        flexDirection: "row",
        width: "80%",
        backgroundColor: COLORS.primary,
        justifyContent: "space-evenly",
        borderRadius: 40,
    },
  
    IconBehave: {
        padding:13,
        flexDirection: "row",
        justifyContent:"space-between",
        width: "90%",
    },
  
    NavIcon: {
        textColor: "000",
    },

    IconContainer:{
        flexDirection:"row",
        justifyContent: "space-between",
        
    },
  })

export default styles;
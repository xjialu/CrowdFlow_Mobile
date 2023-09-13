import { StyleSheet, Dimensions } from "react-native";

import { FONT, SIZES, COLORS, SHADOWS } from "../../../constants";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  centeredView: {
    marginTop: SIZES.large,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "flex-end",
  },
  modalView: {
    width: width - 40,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    ...SHADOWS.medium,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: COLORS.tertiary,
  },
  buttonClose: {
    backgroundColor: COLORS.secondary,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default styles;

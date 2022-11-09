import { Dimensions, StyleSheet } from "react-native";
import { colors, fonts } from '../app.json'
const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
    textError: {
        fontFamily: fonts.regular,
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 21,
        marginBottom: height * 0.02,
        color: colors.primaryColor

    },

});

export default styles;
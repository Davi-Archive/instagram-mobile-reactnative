import { Dimensions, StyleSheet } from "react-native";
import { colors, fonts } from '../../../app.json'

const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
    registerContainer: {
        display: "flex",
        marginTop: 'auto',
        marginBottom: 'auto',
        border: 0,
        alignItems: "center",
        justifyContent: "center",
        fontFamily: fonts.regular
    },
    login: {
        marginBottom: height * 0.04,
    },
    containerWithAccount:{
        marginTop: height* 0.04,
        alignItems: 'center',
    },
    textRegister:{
        color: colors.primaryColor,
        fontSize: 14,
        textDecorationLine: 'underline',
        fontFamily: fonts.bold
    },
    textAccountRegister:{
        fontFamily: fonts.regular,
        fontSize: 14,
    }
});

export default styles;
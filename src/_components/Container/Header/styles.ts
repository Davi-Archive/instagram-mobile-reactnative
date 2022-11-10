import { Dimensions, StyleSheet } from "react-native";
import { colors, fonts } from '../../../../app.json'
const { height, width } = Dimensions.get("screen")

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: colors.whiteColor,
        borderBottomColor: colors.grayColor01,
        borderBottomWidth: 1
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 16,
        paddingVertical: 10
    },
    icon: {
        marginHorizontal: 9,
    },
    containerInputSearch: {
        flexDirection: 'row',
        width: width / 1.8,
        height: 40,
        backgroundColor: colors.lightBlueColor,
        alignItems: 'center',
        borderRadius: 4
    },
    input: {
        width: width / 2.1,
        paddingHorizontal: 12,
        fontFamily: fonts.light,
        color: colors.grayColor04

    },
    inputActive: {
        width: width / 2.1,
        paddingHorizontal: 12,
        fontFamily: fonts.light,
        color: colors.primaryColor

    },
    containerProfile: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row"
    },
    textName: {
        fontFamily: fonts.bold,
    },
    textCancel: {
        color: colors.grayColor03,
        fontFamily: fonts.light,
        fontSize: 12,
        fontWeight: '500'
    },
    textSubmit: {
        color: colors.primaryColor,
        fontFamily: fonts.light,
        fontSize: 12,
        fontWeight: '700'
    },
    textSubmitDisabled: {
        color: colors.grayColor01,
        fontFamily: fonts.light,
        fontSize: 12,
        fontWeight: '700'
    },
    containerInputSearchSecond: {
        borderColor: colors.primaryColor, borderWidth: 1
    }
});

export default styles
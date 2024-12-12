import { StyleSheet } from "react-native";
import { colors, fontFamily} from "@/src/styles/theme";

export const s = StyleSheet.create({
    container: {
        height: 56,
        maxHeight: 56,
        borderRadius: 15,
        backgroundColor: colors.green.base,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 15,
    },
    title: {
        fontFamily: fontFamily.semiBold,
        fontSize: 16,
        color: colors.gray[100],
    },
});
import { StyleSheet } from "react-native";
import { colors } from "@/src/styles/theme";

export const s = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.gray[100],
    },
    text: {
        fontSize: 22,
    },
});
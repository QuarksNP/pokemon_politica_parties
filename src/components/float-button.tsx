import { type PropsWithChildren } from "react"
import { Pressable, StyleSheet } from "react-native"

interface FloatButtonProps {
    backgroundColor?: string,
    handlePress?: () => void
}

export const FloatButton = ({ children, backgroundColor, handlePress }: PropsWithChildren<FloatButtonProps>) => {
    return (
        <Pressable 
            style={floatButtonStyles(backgroundColor).container}
            onPress={handlePress}
        >
            {children}
        </Pressable>
    )
}

const floatButtonStyles = (backgroundColor?: string) => StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 500,
        marginRight: 20,
        marginBottom: 50,
        bottom: 0,
        right: 0,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        position: "absolute",
        backgroundColor: backgroundColor ? backgroundColor : "black"
    }
})
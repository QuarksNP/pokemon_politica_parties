import { Image, StyleSheet, Text, View } from "react-native";
import RegisterEvent from "./_register-event";
import { usePicker } from "../../../hooks/use-picker";

export default function MainScreen() {
    const { assets, handlePicker } = usePicker()

    console.log(assets)

    return (
        <View style={styles.container}>
            <RegisterEvent
                handlePickImage={() => handlePicker("image")}
                handlePickAudio={() => handlePicker("audio")}
            />

            {assets.image && <Image source={{ uri: assets.image }} style={{ width: 50, height: 50 }} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    }
})
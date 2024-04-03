import { Button, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

interface ResgisterEventPros {
    handlePickImage: () => void
    handlePickAudio: () => void
}

export default function RegisterEvent({ handlePickImage, handlePickAudio }: ResgisterEventPros) {
    
    return (
        <View style={styles.container}>
            <TextInput placeholder="Title" style={styles.field} />
            <TextInput placeholder="Description" style={styles.field}/>
            <TextInput keyboardType="numeric" placeholder="Date" style={styles.field} />

            <Pressable onPress={handlePickImage}>
                <Text style={styles.picker}>Choose your picture profile</Text>
            </Pressable>
            <Pressable onPress={handlePickAudio}>
                <Text style={styles.picker}>Choose your audio</Text>
            </Pressable>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        gap: 10
    },

    field: {
        backgroundColor: "#fff",
        padding: 10
    },

    picker: {
        color: "#2997FF",
        textAlign: "center"
    }
})
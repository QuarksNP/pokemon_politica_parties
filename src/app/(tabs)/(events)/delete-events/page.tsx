import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { deleteAllKeys } from "../../../../libs/delete-all-keys";
import { router } from "expo-router";

export default function Page() {
    return (
        <View style={styles.container}>
            <Text>Are you sure do you want delete
                <Text style={{ fontWeight: "bold" }}> all your events</Text>?
            </Text>

            <View style={styles.actions}>
                <Pressable onPress={() => router.back()}>
                    <Text
                        style={{ color: "#2997FF" }}>Cancel</Text>
                </Pressable>
                <Pressable
                    style={styles.delete_button}
                    onPress={deleteAllKeys}
                >
                    <Text
                        style={{
                            color: "white",
                        }}>Delete</Text>
                </Pressable>
            </View>

            <Image 
            style={{ width: 200, height: 200 }}
            source={require("../../../../assets/question.png")} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
        alignItems: "center",
        justifyContent: "center"
    },

    actions: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 20
    },

    delete_button: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#FF4F5A"
    }
})
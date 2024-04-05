import { Button, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import DateTimePicker, { type DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { usePress } from "../../../hooks/use-press";
import { DelegateTextField } from "../../../types";


interface ResgisterEventPros {
    date: string | null,
    imageFileName: string | null,
    audioFileName: string | null,
    handleChange: (input: DelegateTextField, text: string) => void
    handleDate: (e: DateTimePickerEvent) => void
    handlePickImage: () => void
    handlePickAudio: () => void
    handleSubmit: () => void
}

export default function RegisterEvent({
    date,
    imageFileName,
    audioFileName,
    handleChange,
    handleDate,
    handlePickImage,
    handlePickAudio,
    handleSubmit }: ResgisterEventPros) {

    const { isPress, handlePress } = usePress()

    return (
        <View style={styles.container}>
            <Text style={styles.form_title}>Create your events</Text>
            <View style={styles.date_container}>
                <TextInput
                    placeholder="Title"
                    style={[styles.field, { flexGrow: 1 }]}
                    onChangeText={(text) => handleChange("title", text)}
                />

                <Pressable
                    style={styles.field}
                    onPress={() => handlePress(true)}>

                    <Text>{date ? date : "DD/MM/YYYY"}</Text>
                </Pressable>
            </View>

            <TextInput
                placeholder="Description"
                style={styles.field}
                onChangeText={(text) => handleChange("description", text)}
            />

            <View style={styles.picker_container}>
                <Pressable style={styles.picker_image} onPress={handlePickImage}>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}>
                        {imageFileName
                            ? <Text>{imageFileName}</Text>
                            : <>
                                <Ionicons name="image-outline" size={24} color="gray" />
                                <Text style={{ color: "gray" }}>Pick your image</Text>
                            </>
                        }
                    </View>
                </Pressable>

                <Pressable style={styles.picker_audio} onPress={handlePickAudio}>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 10 }}>
                        {audioFileName
                            ? <Text>{audioFileName}</Text>
                            : <>
                                <MaterialIcons name="audiotrack" size={24} color="gray" />
                                <Text style={{ color: "gray" }}>Choose your audio</Text>
                            </>
                        }
                    </View>
                </Pressable>
            </View>

            <Button
                title="Submit"
                onPress={handleSubmit}
            />

            {isPress && <DateTimePicker mode="date" value={new Date(Date.now())} onChange={(e) => {
                handleDate(e);
                handlePress(false)
            }} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        gap: 10,
        padding: 20,
        borderRadius: 20,
        backgroundColor: "#FFEBB2"
    },

    form_title: {
        fontSize: 24,
        fontWeight: "bold",
    },

    field: {
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
    },

    date_container: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        gap: 10
    },

    picker_container: {
        display: "flex",
        gap: 10
    },

    picker_image: {
        height: 100,
        width: "100%",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },

    picker_audio: {
        height: 50,
        width: "100%",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },

    picker: {
        color: "#2997FF",
        textAlign: "center"
    }
})
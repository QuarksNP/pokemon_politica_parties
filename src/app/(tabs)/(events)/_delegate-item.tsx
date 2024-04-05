import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import type { Delegate } from "../../../types"

import { AntDesign } from '@expo/vector-icons';
import { useAudio } from "../../../hooks/use-audio";

import { type AVPlaybackSource } from "expo-av";

interface DelegateItemProps {
    delegate: Delegate
}

export const DelegateItem = ({ delegate }: DelegateItemProps) => {
    const { handlePlayAudio } = useAudio()

    return (
        <View style={styles.container}>
            <View style={styles.assets_container}>
                <Text style={styles.title}>{delegate.title}</Text>

                <Image source={{ uri: delegate.image }} width={75} height={75} borderRadius={15}/>
            </View>

            <Pressable 
                style={[styles.assets_container, { flexDirection: "row", backgroundColor: "white", flex: 1, padding: 10, borderRadius: 10 }]}
                onPress={() => handlePlayAudio(delegate.audio)}
            >
                <AntDesign name="play" size={24} color="black" />
                <Text>Play audio</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F8D7C4",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
        padding: 20,
    },

    assets_container: {
        display: "flex",
        gap: 10
    },

    title: {
        fontWeight: "bold",
        textAlign: "center"
    }
})
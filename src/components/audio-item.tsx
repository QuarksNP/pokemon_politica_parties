import React from "react"
import { Pressable, StyleSheet } from "react-native"
import { useAudio } from "../hooks/use-audio"
import { AntDesign } from '@expo/vector-icons';
import { Text } from "react-native";


interface AudioItemProps {
    source: string,
}

export const AudioItem = ({ source }: AudioItemProps) => {
    const { handlePlayAudio } = useAudio()

    return (
        <Pressable
            style={[styles.assets_container, { flexDirection: "row", backgroundColor: "white", borderRadius: 10 }]}
            onPress={() => handlePlayAudio(source)}
        >
            <AntDesign name="play" size={24} color="black" />
            <Text>Play audio</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    assets_container: {
        display: "flex",
        gap: 10
    },
})
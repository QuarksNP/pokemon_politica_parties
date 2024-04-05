import { useLocalSearchParams } from "expo-router"

import { AntDesign } from '@expo/vector-icons';

import { Image, StyleSheet, Text, View } from "react-native"
import { useEvents } from "../../../../hooks/use-events";
import { AudioItem } from "../../../../components/audio-item";

export default function ContactDetails() {

    const { id } = useLocalSearchParams()

    const { events } = useEvents()

    const getEvent = events.filter(events => events.id === id)
    
    const currentDelegate = getEvent[0]

    if(!currentDelegate) return 

    return (
        <View style={styles.container}>
           <Text style={{ fontWeight: "bold", fontSize: 24 }}>{currentDelegate.title}</Text>
           <Image source={{ uri: currentDelegate.image }} style={{ width: 200, height: 200, borderRadius: 200 }}/>
           <Text>{currentDelegate.description}</Text>
           <AudioItem source={currentDelegate.audio} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
       padding: 20,
       gap: 20,
       alignItems: "center",
       justifyContent: "center"
    },

    basic_info_container: {
        display: "flex",
        alignItems: "center",
        gap: 10
    },

    profile_picture: {
        width: 200,
        height: 200,
        borderRadius: 100
    },
    
    name: {
        fontSize: 30,
        fontWeight: "bold"
    },

    phone: {
        fontSize: 20,
        color: "#2997FF"
    },

    actions_container: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        padding: 20,
        justifyContent: "space-between"
    },

    action: {
        backgroundColor: "#F1FADA",
        padding: 30,
        borderRadius: 20
    }
})
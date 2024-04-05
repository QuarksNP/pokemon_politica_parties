import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import type { Event } from "../../../types"

import { Link } from "expo-router";
import { AudioItem } from "../../../components/audio-item";

interface EventItemProps {
    event: Event,
    route: string
}

export const EventItem = ({ event, route }: EventItemProps) => {

    return (
        <View style={styles.container}>
            <View style={styles.assets_container}>
                <Text style={styles.title}>{event.title}</Text>

                <Image source={{ uri: event.image }} width={75} height={75} borderRadius={15} />
            </View>

            <View style={{ flex: 1, padding: 10, gap: 20 }}>
                <AudioItem
                    source={event.audio}
                />

                {event.id && <Link href={{ pathname: route, params: { id: event.id } as unknown as Record<string, any> }} asChild>
                    <Pressable>
                        <Text style={{ color: "#2997FF", fontWeight: "bold" }}>Go to details</Text>
                    </Pressable>
                </Link>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f7c6aa",
        gap: 20,
        padding: 10,
        borderRadius: 10
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
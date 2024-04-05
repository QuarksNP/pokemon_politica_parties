import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from "react-native"

import type { Events } from "../../../types"
import { EventItem } from "./_event-item"

interface ListOfDelegatesProps {
    events: Events,
    itemRoute: string
}

export const ListOfDelegates = ({ events, itemRoute }: ListOfDelegatesProps) => {
    return (
        <SafeAreaView>
            {events.length > 0
                ? <FlatList
                    contentContainerStyle={styles.container}
                    data={events}
                    keyExtractor={(delegate) => delegate.id as any}
                    renderItem={({ item }) => <EventItem event={item} route={itemRoute} />} />

                : <View style={styles.no_items_container}>
                    <Text style={{ fontSize: 24, fontWeight: "bold" }}>There are no events yet 😪</Text>
                    <Image source={require("../../../assets/no_items.png")} style={{ width: 200,  height: 200 }} />
                </View>
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        backgroundColor: "#F8D7C4",
        borderRadius: 20,
        padding: 20,
        gap: 20
    },

    no_items_container: {
        display: "flex",
        alignItems: "center",
        gap: 10
    }
})
import { Tabs } from "expo-router";

import { MaterialIcons } from '@expo/vector-icons';

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="(events)/index"
                options={{
                    title: "Events", tabBarIcon: () => <MaterialIcons
                        name="event-available"
                        size={24}
                        color="black" />
                }}
            />
            <Tabs.Screen name="(events)/_register-event" options={{ href: null }} />
            <Tabs.Screen name="(events)/[id]/index" options={{ href: null, title: "Details" }} />
            <Tabs.Screen name="(events)/delete-events/page" options={{ href: null, headerShown: false }} />

        </Tabs>
    )
}
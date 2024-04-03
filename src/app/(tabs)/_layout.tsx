import { Tabs } from "expo-router";

import { MaterialIcons } from '@expo/vector-icons';

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="(events)/index" options={{ title: "Events", tabBarIcon: () => <MaterialIcons name="event-available" size={24} color="black" /> }} />
        </Tabs>
    )
}
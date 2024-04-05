import { StyleSheet, View } from "react-native";
import RegisterEvent from "./_register-event";
import { useGetDelegate } from "../../../hooks/use-get-event";
import { useEvents } from "../../../hooks/use-events";
import { ListOfDelegates } from "./_list-of-events";
import { FloatButton } from "../../../components/float-button";
import { FontAwesome } from '@expo/vector-icons';
import { router } from "expo-router";

export default function MainScreen() {
    const {
        documentFileName,
        event,
        handlePicker,
        handleGetBasicInfo,
        handleDate } = useGetDelegate()
    const { events, handleAddNewEvent } = useEvents()

    return (
        <View style={styles.container}>
            <RegisterEvent
                date={event.date}
                imageFileName={documentFileName.image}
                audioFileName={documentFileName.audio}
                handleChange={handleGetBasicInfo}
                handleDate={handleDate}
                handlePickImage={() => handlePicker("image")}
                handlePickAudio={() => handlePicker("audio")}
                handleSubmit={() => {
                    const { title, date, description, image, audio } = event

                    if (title && date && description && image && audio) {
                        const validEvent = {
                            title,
                            date,
                            description,
                            image,
                            audio
                        }
                        handleAddNewEvent(validEvent)
                        return;
                    }

                    console.error("INVALID DATA")
                }}
            />

            <View style={styles.list_of_delagates_container}>
                <ListOfDelegates events={events} itemRoute="../(events)/[id]" />
            </View>

            {events.length > 0 && <FloatButton
                backgroundColor="#FF4F5A"
                handlePress={() => router.navigate("/delete-events/page")}
            >

                <FontAwesome name="remove" size={24} color="white" />
            </FloatButton>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        height: "100%",
        flex: 1,
        gap: 20,
        padding: 20,
    },

    list_of_delagates_container: {
        flex: 1,
        position: "relative",
        overflow: "hidden",
    }
})
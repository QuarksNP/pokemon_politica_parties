import { Image, StyleSheet, Text, View } from "react-native";
import RegisterEvent from "./_register-event";
import { useGetDelegate } from "../../../hooks/use-get-delegate";
import { useDelegates } from "../../../hooks/use-delegates";
import { ListOfDelegates } from "./_list-of-delegates";

export default function MainScreen() {
    const {
        documentFileName,
        delegate,
        handlePicker,
        handleGetBasicInfo,
        handleDate } = useGetDelegate()
    const { delegates, handleAddNewDelegate } = useDelegates()

    console.log(delegate)

    return (
        <View style={styles.container}>
            <RegisterEvent
                date={delegate.date}
                imageFileName={documentFileName.image}
                audioFileName={documentFileName.audio}
                handleChange={handleGetBasicInfo}
                handleDate={handleDate}
                handlePickImage={() => handlePicker("image")}
                handlePickAudio={() => handlePicker("audio")}
                handleSubmit={() => {
                    const { title, date, description, image, audio } = delegate

                    if (title && date && description && image && audio) {
                        const validDelegate = {
                            title,
                            date,
                            description,
                            image,
                            audio
                        }
                        handleAddNewDelegate(validDelegate)
                        return;
                    }

                    console.error("INVALID DATA")
                }}
            />

            <ListOfDelegates delegates={delegates} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    }
})
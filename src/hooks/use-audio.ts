import { useState, useEffect } from "react"
import { Audio } from "expo-av";

export const useAudio = () => {
    const [audio, setAudio] = useState<Audio.Sound>()

    function handlePlayAudio(source: string) {
        console.log('Loading Sound');
        const sound = new Audio.Sound();

        sound.loadAsync({ uri: source }, { shouldPlay: true })

        setAudio(sound);
    
        console.log('Playing Sound');
      }
    
      useEffect(() => {
        return audio
          ? () => {
              console.log('Unloading Audio');
              audio.unloadAsync();
            }
          : undefined;
      }, [audio]);

      return { handlePlayAudio }
}
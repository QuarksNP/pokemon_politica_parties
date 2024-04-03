import * as DocumentPicker from "expo-document-picker";

import { useState } from "react";

export const usePicker = () => {
  const [assets, setAssets] = useState({
    image: null,
    audio: null,
  });

  async function handlePicker(type: "image" | "audio") {
    const documentType = type === "image" ? "image/*" : "mp3/*";

    const document = await DocumentPicker.getDocumentAsync({
      type: documentType,
    });

    if (document.assets) {
      setAssets((prev) => ({
        ...prev,
        [type]: document.assets[0].uri,
      }));
    }
  }

  return { assets, handlePicker };
};

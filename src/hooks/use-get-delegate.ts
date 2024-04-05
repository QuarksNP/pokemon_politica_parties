import * as DocumentPicker from "expo-document-picker";

import { useState } from "react";

import type { DelegateTextField } from "../types";
import { type DateTimePickerEvent } from "@react-native-community/datetimepicker";

export const useGetDelegate = () => {
  const [delegate, setDelegate] = useState({
    title: null,
    date: null,
    description: null,
    image: null,
    audio: null,
  });

  const [documentFileName, setDocumentFileName] = useState({
    image: null,
    audio: null
  })

  function handleGetBasicInfo(input: DelegateTextField, text: string) {
    setDelegate((prev) => ({
      ...prev,
      [input]: text,
    }));
  }

  function handleDate(e: DateTimePickerEvent) {
    const timestamp = e.nativeEvent.timestamp;
    setDelegate((prev) => ({
      ...prev,
      date: new Date(timestamp).toLocaleDateString() as any
    }));
  }

  async function handlePicker(type: "image" | "audio") {
    const documentType = type === "image" ? "image/*" : "audio/*";

    const document = await DocumentPicker.getDocumentAsync({
      type: documentType,
    });

    if (document.assets) {
      setDelegate((prev) => ({
        ...prev,
        [type]: document.assets[0].uri,
      }));

      setDocumentFileName((prev) => ({
        ...prev,
        [type]: document.assets[0].name
      }))
    }
  }

  return { 
      delegate,
      documentFileName, 
      handlePicker, 
      handleGetBasicInfo, 
      handleDate, 
    };
};

import * as DocumentPicker from "expo-document-picker";

import { useState } from "react";

import type { EventTextField } from "../types";
import { type DateTimePickerEvent } from "@react-native-community/datetimepicker";

export const useGetDelegate = () => {
  const [event, setEvent] = useState({
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

  function handleGetBasicInfo(input: EventTextField, text: string) {
    setEvent((prev) => ({
      ...prev,
      [input]: text,
    }));
  }

  function handleDate(e: DateTimePickerEvent, value: Date) {
    setEvent((prev) => ({
      ...prev,
      date: new Date(value).toLocaleDateString() as any
    }));
  }

  async function handlePicker(type: "image" | "audio") {
    const documentType = type === "image" ? "image/*" : "audio/*";

    const document = await DocumentPicker.getDocumentAsync({
      type: documentType,
    });

    if (document.assets) {
      setEvent((prev) => ({
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
    event,
    documentFileName,
    handlePicker,
    handleGetBasicInfo,
    handleDate,
  };
};

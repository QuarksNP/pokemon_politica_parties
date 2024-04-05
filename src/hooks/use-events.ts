import * as SecureStore from "expo-secure-store";
import * as Crypto from "expo-crypto"

import { useEffect, useState } from "react";
import { getAllKeys } from "../libs/get-all-keys";
import type { Event, Events } from "../types";

export const useEvents = () => {
  const [events, setEvents] = useState<Events>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const keys = await getAllKeys();
      const delegatesData = [];

      if (keys) {
        for (const key of keys) {
          const data = await SecureStore.getItemAsync(key);
          if (data) {
            delegatesData.push(JSON.parse(data));
          }
        }
      }

      setEvents(delegatesData);
      setIsLoading(false);
    }

    getData();
  }, [events]);

  async function handleAddNewEvent(delegate: Event) {
    const id = Crypto.randomUUID().toString();
    const newEvent = { id, ...delegate };

    const keys: any = await getAllKeys();
    keys.push(id);
    await SecureStore.setItemAsync("keys", JSON.stringify(keys));

    await SecureStore.setItemAsync(id, JSON.stringify(newEvent));
    setEvents([...events, newEvent]);
  }

  return { events, handleAddNewEvent }
};

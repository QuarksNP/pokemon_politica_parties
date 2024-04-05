import * as SecureStore from "expo-secure-store";
import * as Crypto from "expo-crypto"

import { useEffect, useState } from "react";
import { getAllKeys } from "../libs/get-all-keys";
import type { Delegate, Delegates } from "../types";

export const useDelegates = () => {
  const [delegates, setDelegates] = useState<Delegates>([]);
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

      setDelegates(delegatesData);
      setIsLoading(false);
    }

    getData();
  }, []);

  async function handleAddNewDelegate(delegate: Delegate) {
    const id = Crypto.randomUUID().toString();
    const newDelegate = { id, ...delegate };

    const keys = await getAllKeys();
    keys.push(id);
    await SecureStore.setItemAsync("keys", JSON.stringify(keys));

    await SecureStore.setItemAsync(id, JSON.stringify(newDelegate));
    setDelegates([...delegates, newDelegate]);
  }

  return { delegates, handleAddNewDelegate }
};

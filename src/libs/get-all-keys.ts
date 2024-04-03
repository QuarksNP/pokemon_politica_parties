import { getItemAsync } from "expo-secure-store";

export async function getAllKeys() {
    let keys = await getItemAsync("keys");
    if (!keys && typeof(keys) !== "string") {
      keys = [] as any;
    } else {
      keys = JSON.parse(keys);
    } 
    return keys;
}
  
import { router } from "expo-router";
import { deleteItemAsync } from "expo-secure-store";

export async function deleteAllKeys() {
    await deleteItemAsync("keys");

    router.back()
}

import { useEffect, useState } from "react"

export const usePress = () => {
    const [isPress, setIsPress] = useState(false)

    function handlePress(value: boolean) {
        setIsPress(value)
    }

    return { isPress, handlePress }
}
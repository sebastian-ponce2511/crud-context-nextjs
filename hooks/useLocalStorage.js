import { useState, useEffect } from "react"

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(defaultValue)

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const storedValue = localStorage.getItem(key)
        if (storedValue) {
          setValue(JSON.parse(storedValue))
        }
      } catch (error) {
        console.error("Error reading from localStorage:", error)
      }
    }
  }, [key])

  const updateLocalStorage = (newValue) => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(key, JSON.stringify(newValue))
      } catch (error) {
        console.error("Error writing to localStorage:", error)
      }
    }
  }

  const setValueAndUpdateLocalStorage = (newValue) => {
    setValue(newValue)
    updateLocalStorage(newValue)
  }

  return [value, setValueAndUpdateLocalStorage]
}

export default useLocalStorage

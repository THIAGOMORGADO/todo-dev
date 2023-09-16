import { NativeBaseProvider, StatusBar } from "native-base"
import React, { useState, useEffect } from "react"

import { View, Text } from "react-native"
import Loading from "./src/components/Loading"

import Home from "./src/pages/Home"

export default function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
    }, 2000)
    console.log(loading)
  }, [loading])

  if (!loading) {
    return <Loading />
  }
  return (
    <NativeBaseProvider>
      <StatusBar barStyle={"light-content"} translucent />
      <Home />
    </NativeBaseProvider>
  )
}

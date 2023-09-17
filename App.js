import { NativeBaseProvider, StatusBar } from "native-base"
import React, { useState, useEffect } from "react"

import Loading from "./src/components/Loading"
import { NavigationContainer } from "@react-navigation/native"

import Routes from "./src/routes"

export default function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
    }, 2000)
   
  }, [loading])

  if (!loading) {
    return <Loading />
  }
  return (
    <NativeBaseProvider>
      <StatusBar barStyle={"light-content"} translucent />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </NativeBaseProvider>
  )
}

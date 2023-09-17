import React from "react"
import { KeyboardAvoidingView, Platform, Text, TextInput } from "react-native"
import logo from "../../image/logo.png"

import {
  Container,
  Logo,
  AreaForm,
  ImageArea,
  Label,
  Input,
  Button,
  TitleButton,
  BtnArea,
} from "./styles"


import {useNavigation} from "@react-navigation/native"

export default function Signin() {
  const navigation = useNavigation()

  function handleSignIn() {
    navigation.navigate("Home")
  }

  return (
    <>
      <Container>
        <ImageArea>
          <Logo source={logo} />
        </ImageArea>

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <AreaForm>
            <Label>E-mail</Label>
            <Input
              placeholder="Digite seu email"
              placeholderTextColor="#8b2cf5"
              enterKeyHint="next"
            />

            <Label>Senha</Label>
            <Input
              placeholder="Digite sua senha"
              placeholderTextColor="#8b2cf5"
              secureTextEntry
              autoComplete="false"
              autoCapitalize="false"
              keyboardAppearance="dark"
              enterKeyHint="done"
              selectionColor="#8b2cf5"
            />

            <BtnArea>
              <Button onPress={handleSignIn}>
                <TitleButton>Entra</TitleButton>
              </Button>
            </BtnArea>
          </AreaForm>
        </KeyboardAvoidingView>
      </Container>
    </>
  )
}

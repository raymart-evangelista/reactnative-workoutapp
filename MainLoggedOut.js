import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import googleLogin from './AuthService'

export default function MainLoggedOut() {
  const handleGoogleAuth = async () => {
    try {
      await googleLogin()
      NavigationPreloadManager.navigate('Home')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <View>
      <TouchableOpacity
        onPress={handleGoogleAuth}
      >
        <Text>Login with google</Text>
      </TouchableOpacity>
    </View>
  )
}
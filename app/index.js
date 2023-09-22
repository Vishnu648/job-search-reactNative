import { useState } from 'react';
import { View, ScrollView, SafeAreaView, Text } from 'react-native';
import { Stack, useRouter } from 'expo-router'

import { COLORS, SIZES, icons, images } from '../constants'
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome
} from "../components"


const Home = () => {
  return (
    <SafeAreaView >
      <Text>Home</Text>
      <Text>lorem ipsum lorem ipsum lorem ipsum lorem ipsum </Text>
    </SafeAreaView>
  )
}

export default Home

import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView, View } from 'react-native';
import Header from '@/components/layout/header'

import tw from 'twrnc';

export default function HomeScreen() {
  return (
    <SafeAreaView style={tw`flex flex-1 bg-white`}>
      <Header title="Home" />
      <View style={tw`flex flex-row items-center gap-4`}>
        <ThemedText type="title">Welcome!</ThemedText>
      </View>
    </SafeAreaView>
  
  
  
  
  )
}
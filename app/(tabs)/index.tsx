import { Image, StyleSheet, Platform , Button, Text  } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView, View } from "react-native";
import Header from "@/components/layout/header";
import ItemsCard from "@/components/cards/itemsCard";
import DataCard from "@/components/cards/dataCard";
import { Link } from "expo-router";

import tw from "twrnc";


const items = [
  { name: "Item 1", identifiant: "1" },
  { name: "Item 2", identifiant: "2" },
  { name: "Item 3", identifiant: "3" },
  { name: "Item 4", identifiant: "4" },
  { name: "Item 5", identifiant: "5" },
  { name: "Item 6", identifiant: "6" },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={tw`flex flex-1 bg-white`}>
      <View style={tw`p-4`}>
        <Header title="Home" />
        <View style={tw`flex gap-4 mt-4`}>
          <ThemedText type="title">Welcome Nicolas</ThemedText>
          <ThemedText type="subtitle">Let's start your day</ThemedText>

          <View style={tw`flex flex-row items-center gap-4`}>
            <DataCard>
              <Text style={tw`text-sm text-gray-500`}>Mots de passes</Text>
              <Text style={tw`text-2xl font-bold`}>15</Text>
            </DataCard>
          </View>
        </View>
        
        <View style={tw`flex gap-4 mt-4`}>
          <ThemedText type="title">Items</ThemedText>
          {items.slice(0, 3).map((item) => (
            
              <ItemsCard key={item.identifiant} name={item.name} identifiant={item.identifiant} />
            
          ))}
          <View style={tw`flex flex-row items-center gap-4`}>
            <Button title="View all" onPress={() => {}} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

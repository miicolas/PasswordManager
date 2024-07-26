import React from "react";
import { Text, SafeAreaView, View, TouchableOpacity } from "react-native";
import Header from "@/components/layout/header";
import { useLocalSearchParams } from "expo-router";
import tw from "twrnc";
import { Button } from "@/components/ui/button";
import { Link } from "expo-router";
import { useRouter } from "expo-router";

const ItemDetails = () => {
  const router = useRouter();
  const { slug } = useLocalSearchParams<{ slug: string }>();
  return (
    <SafeAreaView>
      <View style={tw`p-4`}>
        <View>
          <TouchableOpacity onPress={() => router.back()} style={tw`bg-blue-500 p-4 rounded-lg`}>
            <Text style={tw`text-white`}>Retour</Text>
          </TouchableOpacity>
          <Text>{slug}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ItemDetails;

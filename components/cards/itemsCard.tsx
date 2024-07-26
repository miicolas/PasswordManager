import { View, Text, Pressable } from "react-native";
import { Mail, ChevronRight } from "lucide-react-native";
import tw from "twrnc";
import { Link } from 'expo-router';

export default function ItemsCard({
    name, identifiant, 
}: {
    name: string, identifiant: string,
}) {
  return (
    <Link href={`/itemsDetails/${identifiant}`} asChild>
    <Pressable
      style={tw`w-full bg-gray-200 rounded-lg p-4`}
      onPress={() => {
       
        // 
      }}
    >
      <View style={tw`flex flex-row items-center justify-between`}>
        <View style={tw`flex flex-row items-center gap-4`}>
          <Mail size={24} color="gray" />
          <View style={tw`flex flex-col`}>
            <Text style={tw`text-gray-800`}>{name}</Text>
            <Text style={tw`text-gray-400 text-xs`}>{identifiant}</Text>
          </View>
        </View>
        <ChevronRight size={24} color="gray" />
      </View>
    </Pressable>
    </Link>
  );
}

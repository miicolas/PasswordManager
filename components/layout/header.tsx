import { Text, View, Image, Pressable } from "react-native";
import tw from "twrnc";
import { Plus } from "lucide-react-native";

export default function Header({ title }: { title: string }) {
  return (
    <View style={tw`flex items-center justify-between flex-row`}>
      <Image
        source={require("../../assets/images/logo.png")}
        style={tw`w-10 h-10`}
      />
      <Text style={tw`text-2xl font-bold`}>{title}</Text>
      <Pressable style={tw`bg-blue-500 p-2 rounded-full items-center justify-center`}>
        <Plus color="white" size={20} />
      </Pressable>
    </View>
  );
}

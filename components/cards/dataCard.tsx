import { View } from "react-native";
import tw from "twrnc";


export default function DataCard({children}: {children: React.ReactNode}) {
  return (
    <View style={tw`flex p-4 border border-gray-300 rounded-lg bg-gray-200`}>
      {children}
    </View>
  );
}
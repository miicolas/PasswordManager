import { Pressable } from "react-native";
import tw from "twrnc";

import { useRef } from "react";


export function Button({ children }: { children: React.ReactNode }) {
    const ref = useRef(null);

    return <Pressable ref={ref} style={tw`bg-blue-500 p-4 rounded-lg flex justify-center items-center w-fit`}>{children}</Pressable>;
}
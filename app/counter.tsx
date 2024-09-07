import Counter from "@/components/Counter";
import { Text, View } from "react-native";

export default function CounterScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Counter />
    </View>
  );
}

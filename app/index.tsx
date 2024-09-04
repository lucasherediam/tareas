import Card from "@/components/Card";

import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card nombre={'Tarjeta 1'} />
      <Card nombre={'Tarjeta 2'} />
      <Card nombre={'Tarjeta 3'} />
    </View>
  );
}

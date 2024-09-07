import Profile from "@/components/Profile";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function ProfileScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Profile />
    </View>
  );
}

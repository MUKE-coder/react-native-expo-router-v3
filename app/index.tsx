import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function HomePage() {
  // display flex and flex direction column
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20 }}>Welcome to the Home Page</Text>

      {/* Header  */}
      <View style={{ flexDirection: "row", gap: 4 }}>
        <Link href="/">Home</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/(tabs)/feed/">Go to Tabs</Link>
      </View>
    </View>
  );
}

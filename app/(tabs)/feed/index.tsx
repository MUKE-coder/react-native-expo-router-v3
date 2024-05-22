import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Feed() {
  // display flex and flex direction column
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20 }}>Welcome to the Feed Page</Text>

      {/* Header  */}
      <View style={{ flexDirection: "row", gap: 4 }}>
        <Link href="/">Home</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/blogs">Blogs</Link>
      </View>
    </View>
  );
}

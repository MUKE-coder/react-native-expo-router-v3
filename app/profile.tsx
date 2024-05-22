import { View, Text, Button, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";
// import { TouchableOpacity } from "react-native-gesture-handler";

export default function Profile() {
  const router = useRouter();
  // display flex and flex direction column
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to the Profile Page</Text>
      <View style={{ flexDirection: "row", gap: 4 }}>
        <Link href="/">Home</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/blogs">Blogs</Link>
        <Button onPress={() => router.back()} title="Go Back" />
        <Pressable onPress={() => router.back()}>
          <Text>Go Back</Text>
        </Pressable>
        <TouchableOpacity onPress={() => router.back()}>
          <Text>Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

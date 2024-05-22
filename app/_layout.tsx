import { View, Text, Button, Pressable } from "react-native";
import React from "react";
import { Link, Stack, router, useRouter } from "expo-router";

export default function MainLayout() {
  // const router =useRouter()
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#14532d",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Home",
          headerRight: () => <Link href="/contact">Present modal</Link>,
        }}
      />
      {/* <Stack.Screen
        name="index"
        options={{
          headerTitle: "Home",
          headerRight: () => (
            <Pressable onPress={() => router.push("/contact")}>
              <Text style={{ color: "white" }}>Contact</Text>
            </Pressable>
          ),
        }}
      /> */}
      <Stack.Screen name="profile" options={{ headerTitle: "Profile" }} />
      <Stack.Screen name="blogs/index" options={{ headerTitle: "Blogs" }} />
      <Stack.Screen
        name="contact"
        options={{ headerTitle: "Contact", presentation: "containedModal" }}
      />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}

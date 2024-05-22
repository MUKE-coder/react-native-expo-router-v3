import { View, Text, Button } from "react-native";
import React from "react";
import { Tabs, router } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function _layout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "orange" }}>
      <Tabs.Screen
        name="account"
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={24} color={color} />
          ),
          title: "Account",
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="wpexplorer" size={24} color={color} />
          ),
          title: "Explore",
        }}
      />
      <Tabs.Screen
        name="feed/index"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="feed" size={24} color={color} />
          ),
          title: "Feed",
          headerRight: () => (
            <Button title="Create" onPress={() => router.push("/feed/new")} />
          ),
        }}
      />
      <Tabs.Screen
        name="feed/new"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}

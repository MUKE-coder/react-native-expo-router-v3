import { View, Text } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";

export default function BlogDetail() {
  const { id, author } = useLocalSearchParams();
  return (
    <>
      <Stack.Screen options={{ headerTitle: `Blog Detail - ${id}` }} />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>BlogDetail </Text>
        <Text>Blog Id :{id} </Text>
        <Text>Written By :{author} </Text>
      </View>
    </>
  );
}

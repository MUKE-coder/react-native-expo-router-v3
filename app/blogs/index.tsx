import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Blogs() {
  // display flex and flex direction column
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to the Blogs Page</Text>
      <View style={{ flexDirection: "row", gap: 4 }}>
        <Link href="/">Home</Link>
        {/* <Link href="/profile">Profile</Link> */}
        <Link href="/blogs">Blogs</Link>
        <Link href="/profile" asChild>
          <Button title="Profile" />
        </Link>
        <View style={{ paddingTop: 30 }}>
          <Link href="/blogs/1?author=John">
            <Text>Blog 1</Text>
          </Link>
          <Link href="/blogs/2">
            <Text>Blog 2</Text>
          </Link>
          <Link href="/blogs/3">
            <Text>Blog 3</Text>
          </Link>
          <Link
            href={{
              pathname: "/blogs/4",
              params: {
                author: "Jane",
              },
            }}
          >
            <Text>Blog 4</Text>
          </Link>
        </View>
      </View>
    </View>
  );
}

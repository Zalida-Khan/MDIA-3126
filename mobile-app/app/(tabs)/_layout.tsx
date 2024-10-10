import { TabBarIcon } from "@/components/atoms/TabBarIcon";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "cornflowerblue",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Index",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="pizza"
        options={{
          title: "Pizza",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cake"
        options={{
          title: "Cake",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
            <Tabs.Screen
        name="camera"
        options={{
          title: "Camera",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon emoji={🤳}  focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
}

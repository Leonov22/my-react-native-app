import FontAwesome from '@expo/vector-icons/FontAwesome';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "coral" }}> 
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
       />
      <Tabs.Screen 
        name="login" 
        options={{ 
          title: "Login",
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="login" size={24} color={color} />
          ),
      }} />
    </Tabs>
  );
}

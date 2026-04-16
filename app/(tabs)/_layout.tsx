import { tabs } from "@/constants/data";
import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import { Image, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const tabBar = {
  height: 72,
  horizontalInset: 16,
  radius: 28,
  iconFrame: 48,
};

const TabIcon = ({ focused, icon }: TabIconProps) => {
  const containerClass = focused
    ? "h-12 w-12 items-center justify-center rounded-full border-2 border-[#0B6E4F] bg-[#0B6E4F]"
    : "h-12 w-12 items-center justify-center rounded-full border-2 border-[#0F172A] bg-[#F8FAFC]";
  const iconColor = focused ? "#FFFFFF" : "#0F172A";

  return (
    <View className="items-center justify-center">
      <View className={containerClass}>
        <Image
          source={icon}
          resizeMode="contain"
          className="h-6 w-6"
          style={{ tintColor: iconColor, opacity: 1 }}
        />
      </View>
    </View>
  );
};

const TabLayout = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarBackground: () => (
          <BlurView
            intensity={90}
            tint="light"
            style={StyleSheet.absoluteFill}
          />
        ),
        tabBarStyle: {
          position: "absolute",
          bottom: Math.max(insets.bottom, tabBar.horizontalInset),
          height: tabBar.height,
          marginHorizontal: tabBar.horizontalInset,
          borderRadius: tabBar.radius,
          backgroundColor: "rgba(236, 243, 239, 0.98)",
          borderTopWidth: 0,
          borderWidth: 1,
          borderColor: "rgba(15, 23, 42, 0.25)",
          overflow: "hidden",
          elevation: 24,
          shadowColor: "#0F172A",
          shadowOpacity: 0.2,
          shadowRadius: 18,
          shadowOffset: { width: 0, height: 8 },
        },
        tabBarItemStyle: {
          paddingVertical: tabBar.height / 2 - tabBar.iconFrame / 2,
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      {tabs.map((tab: any) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={tab.icon} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabLayout;

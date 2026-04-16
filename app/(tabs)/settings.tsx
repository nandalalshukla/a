import { YOGA_USER } from "@/constants/data";
import images from "@/constants/images";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsScreen() {
  const [syncHeartRate, setSyncHeartRate] = useState(true);
  const [syncBloodSugar, setSyncBloodSugar] = useState(true);
  const [syncFootsteps, setSyncFootsteps] = useState(true);
  const [dailyReminder, setDailyReminder] = useState(true);

  const toggleStyles = (enabled: boolean) =>
    enabled ? "bg-[#2E5E47] border-[#2E5E47]" : "bg-[#EDF3EA] border-[#D5E1D1]";

  return (
    <SafeAreaView className="flex-1 bg-[#F2F5EF]">
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 16,
          paddingBottom: 140,
        }}
        showsVerticalScrollIndicator={false}
      >
        <ImageBackground
          source={images.splashPattern}
          imageStyle={{ borderRadius: 24, opacity: 0.16 }}
          className="overflow-hidden rounded-3xl bg-[#234136] p-5"
        >
          <View className="flex-row items-center justify-between">
            <View className="flex-1 pr-3">
              <Text className="text-3xl font-sans-bold text-white">
                Profile
              </Text>
              <Text className="mt-1 text-sm font-sans-medium text-white/80">
                Keep your yoga and wellness tracking tuned to your routine.
              </Text>
            </View>
            <View className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-full border-2 border-white/35">
              <Image
                source={images.avatar}
                resizeMode="cover"
                className="h-full w-full"
              />
            </View>
          </View>
        </ImageBackground>

        <View className="mt-6 rounded-3xl bg-white p-5">
          <Text className="text-lg font-sans-bold text-[#1E3026]">
            Practice Summary
          </Text>
          <Text className="mt-2 text-sm font-sans-medium text-[#5E6E66]">
            Name: {YOGA_USER.name}
          </Text>
          <Text className="mt-1 text-sm font-sans-medium text-[#5E6E66]">
            Level: {YOGA_USER.experienceLevel}
          </Text>
          <Text className="mt-1 text-sm font-sans-medium text-[#5E6E66]">
            Streak: {YOGA_USER.streakDays} days
          </Text>
        </View>

        <View className="mt-4 rounded-3xl bg-white p-5">
          <Text className="text-lg font-sans-bold text-[#1E3026]">
            Health Integrations
          </Text>
          <View className="mt-4 gap-3">
            <Pressable
              onPress={() => setSyncHeartRate((current) => !current)}
              className="flex-row items-center justify-between rounded-2xl bg-[#F5F8F2] px-4 py-3"
            >
              <View className="flex-row items-center gap-2">
                <MaterialCommunityIcons
                  name="heart-pulse"
                  size={18}
                  color="#315343"
                />
                <Text className="text-sm font-sans-semibold text-[#315343]">
                  Heart Rate Sensor
                </Text>
              </View>
              <View
                className={`h-7 w-12 rounded-full border ${toggleStyles(syncHeartRate)}`}
              >
                <View
                  className="h-6 w-6 rounded-full bg-white"
                  style={{ marginLeft: syncHeartRate ? 22 : 1, marginTop: 1 }}
                />
              </View>
            </Pressable>

            <Pressable
              onPress={() => setSyncBloodSugar((current) => !current)}
              className="flex-row items-center justify-between rounded-2xl bg-[#F5F8F2] px-4 py-3"
            >
              <View className="flex-row items-center gap-2">
                <MaterialCommunityIcons
                  name="water"
                  size={18}
                  color="#315343"
                />
                <Text className="text-sm font-sans-semibold text-[#315343]">
                  Blood Sugar Log
                </Text>
              </View>
              <View
                className={`h-7 w-12 rounded-full border ${toggleStyles(syncBloodSugar)}`}
              >
                <View
                  className="h-6 w-6 rounded-full bg-white"
                  style={{ marginLeft: syncBloodSugar ? 22 : 1, marginTop: 1 }}
                />
              </View>
            </Pressable>

            <Pressable
              onPress={() => setSyncFootsteps((current) => !current)}
              className="flex-row items-center justify-between rounded-2xl bg-[#F5F8F2] px-4 py-3"
            >
              <View className="flex-row items-center gap-2">
                <MaterialCommunityIcons
                  name="shoe-print"
                  size={18}
                  color="#315343"
                />
                <Text className="text-sm font-sans-semibold text-[#315343]">
                  Footstep Counter
                </Text>
              </View>
              <View
                className={`h-7 w-12 rounded-full border ${toggleStyles(syncFootsteps)}`}
              >
                <View
                  className="h-6 w-6 rounded-full bg-white"
                  style={{ marginLeft: syncFootsteps ? 22 : 1, marginTop: 1 }}
                />
              </View>
            </Pressable>
          </View>
        </View>

        <View className="mt-4 rounded-3xl bg-white p-5">
          <Text className="text-lg font-sans-bold text-[#1E3026]">
            Reminders
          </Text>
          <Pressable
            onPress={() => setDailyReminder((current) => !current)}
            className="mt-4 flex-row items-center justify-between rounded-2xl bg-[#F5F8F2] px-4 py-3"
          >
            <View className="flex-row items-center gap-2">
              <MaterialCommunityIcons
                name="clock-outline"
                size={18}
                color="#315343"
              />
              <View>
                <Text className="text-sm font-sans-semibold text-[#315343]">
                  Daily Practice Reminder
                </Text>
                <Text className="mt-1 text-xs font-sans-medium text-[#5E6E66]">
                  Set for 7:00 AM
                </Text>
              </View>
            </View>
            <View
              className={`h-7 w-12 rounded-full border ${toggleStyles(dailyReminder)}`}
            >
              <View
                className="h-6 w-6 rounded-full bg-white"
                style={{ marginLeft: dailyReminder ? 22 : 1, marginTop: 1 }}
              />
            </View>
          </Pressable>
          <Text className="mt-4 text-xs font-sans-medium text-[#6A786F]">
            Health values in this template are illustrative. Use medically
            verified devices for clinical decisions.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

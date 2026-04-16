import { WEEKLY_SESSION_STATS } from "@/constants/data";
import images from "@/constants/images";
import { useWellness } from "@/context/wellness-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function InsightsScreen() {
  const { metrics } = useWellness();
  const maxMinutes = Math.max(
    ...WEEKLY_SESSION_STATS.map((item) => item.minutes),
  );
  const metricIconById: Record<
    string,
    keyof typeof MaterialCommunityIcons.glyphMap
  > = {
    "heart-rate": "heart-pulse",
    "blood-sugar": "water",
    steps: "shoe-print",
  };

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
          source={images.tabHome}
          imageStyle={{ borderRadius: 24, opacity: 0.16 }}
          className="overflow-hidden rounded-3xl bg-[#214136] p-5"
        >
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-3xl font-sans-bold text-white">
                Insights
              </Text>
              <Text className="mt-1 text-sm font-sans-medium text-white/80">
                Track consistency, recovery, and key body signals.
              </Text>
            </View>
            <Image source={images.logoGlow} className="h-10 w-10" />
          </View>
        </ImageBackground>

        <View className="mt-6 rounded-3xl bg-white p-5">
          <Text className="text-lg font-sans-bold text-[#1E3026]">
            Weekly Yoga Minutes
          </Text>
          <View className="mt-5 flex-row items-end justify-between">
            {WEEKLY_SESSION_STATS.map((item) => {
              const height = `${Math.max(Math.round((item.minutes / maxMinutes) * 100), 12)}%`;
              return (
                <View key={item.id} className="w-9 items-center">
                  <View className="h-40 w-full justify-end rounded-2xl bg-[#ECF3E9] p-1">
                    <View
                      className="w-full rounded-xl bg-[#7CA685]"
                      style={{ height }}
                    />
                  </View>
                  <Text className="mt-2 text-xs font-sans-semibold text-[#5E6E66]">
                    {item.day}
                  </Text>
                  <Text className="text-xs font-sans-medium text-[#3F5C4D]">
                    {item.minutes}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>

        <View className="mt-6 gap-3">
          {metrics.map((metric) => {
            const difference =
              metric.direction === "down"
                ? metric.target - metric.value
                : metric.value - metric.target;
            const statusText =
              difference >= 0 ? "On target" : "Needs attention";
            const iconName = metricIconById[metric.id] ?? "chart-line";

            return (
              <View
                key={metric.id}
                className="rounded-2xl border border-[#DEE8DA] bg-white p-4"
              >
                <View className="flex-row items-center justify-between">
                  <View className="flex-row items-center gap-2">
                    <MaterialCommunityIcons
                      name={iconName}
                      size={18}
                      color="#30523F"
                    />
                    <Text className="text-sm font-sans-semibold text-[#30523F]">
                      {metric.label}
                    </Text>
                  </View>
                  <Text className="text-sm font-sans-bold text-[#1E3026]">
                    {metric.value.toLocaleString()} {metric.unit}
                  </Text>
                </View>
                <Text className="mt-1 text-xs font-sans-medium text-[#5E6E66]">
                  Target: {metric.target.toLocaleString()} {metric.unit}
                </Text>
                <Text
                  className="mt-3 text-xs font-sans-semibold uppercase tracking-[1px]"
                  style={{
                    color: statusText === "On target" ? "#2E5E47" : "#9D5C3A",
                  }}
                >
                  {statusText}
                </Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

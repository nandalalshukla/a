import { SESSION_PRESETS, YOGA_USER } from "@/constants/data";
import images from "@/constants/images";
import { useWellness } from "@/context/wellness-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect, useMemo, useState } from "react";
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const formatTimer = (seconds: number) => {
  const mins = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const secs = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${mins}:${secs}`;
};

export default function App() {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const { yogaMinutes, metrics, addYogaMinutes, adjustMetric } = useWellness();

  useEffect(() => {
    if (!isRunning) {
      return;
    }
    const timer = setInterval(() => {
      setElapsedSeconds((current) => current + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [isRunning]);

  const activeMinutes = useMemo(
    () => Math.floor(elapsedSeconds / 60),
    [elapsedSeconds],
  );
  const totalMinutes = yogaMinutes + activeMinutes;

  const metricStepById: Record<string, number> = {
    "heart-rate": 1,
    "blood-sugar": 1,
    steps: 250,
  };

  const metricIconById: Record<
    string,
    keyof typeof MaterialCommunityIcons.glyphMap
  > = {
    "heart-rate": "heart-pulse",
    "blood-sugar": "water",
    steps: "shoe-print",
  };

  const presetIconByIntensity: Record<
    string,
    keyof typeof MaterialCommunityIcons.glyphMap
  > = {
    Gentle: "weather-sunset",
    Steady: "meditation",
    Power: "lightning-bolt",
  };

  return (
    <SafeAreaView className="flex-1 bg-[#F2F5EF]">
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 14,
          paddingBottom: 160,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View className="mb-6 flex-row items-center justify-between">
          <View>
            <Text className="text-sm font-sans-medium uppercase tracking-[1px] text-[#5E6E66]">
              Daily Practice
            </Text>
            <Text className="mt-1 text-3xl font-sans-bold text-[#1E3026]">
              Hello, {YOGA_USER.name}
            </Text>
            <Text className="mt-1 text-sm font-sans-medium text-[#5E6E66]">
              {YOGA_USER.streakDays} day streak • {YOGA_USER.experienceLevel}{" "}
              level
            </Text>
          </View>
          <Image source={images.avatar} className="h-14 w-14 rounded-full" />
        </View>

        <ImageBackground
          source={images.splashPattern}
          imageStyle={{ borderRadius: 24, opacity: 0.18 }}
          className="overflow-hidden rounded-3xl bg-[#1F3A2E] p-5"
        >
          <View className="mb-3 flex-row items-center justify-between">
            <View className="flex-row items-center gap-2">
              <MaterialCommunityIcons
                name="timer-outline"
                size={18}
                color="#D9E8D4"
              />
              <Text className="text-sm font-sans-semibold uppercase tracking-[1px] text-white/75">
                Session Timer
              </Text>
            </View>
            <Image source={images.logoGlow} className="h-9 w-9" />
          </View>
          <Text className="mt-3 text-5xl font-sans-bold text-white">
            {formatTimer(elapsedSeconds)}
          </Text>
          <Text className="mt-2 text-sm font-sans-medium text-white/80">
            Total today: {totalMinutes} min
          </Text>
          <View className="mt-5 flex-row gap-3">
            <Pressable
              onPress={() => setIsRunning((current) => !current)}
              className="flex-1 items-center rounded-2xl bg-[#C9DEBC] px-4 py-3"
            >
              <Text className="font-sans-bold text-[#1F3A2E]">
                {isRunning ? "Pause" : "Start"}
              </Text>
            </Pressable>
            <Pressable
              onPress={() => {
                setIsRunning(false);
                setElapsedSeconds(0);
              }}
              className="items-center rounded-2xl border border-white/20 px-5 py-3"
            >
              <Text className="font-sans-semibold text-white">Reset</Text>
            </Pressable>
          </View>
        </ImageBackground>

        <View className="mt-6 rounded-3xl bg-white p-5">
          <View className="mb-4 flex-row items-center justify-between">
            <Text className="text-xl font-sans-bold text-[#1E3026]">
              Body Signals
            </Text>
            <Pressable
              onPress={() => addYogaMinutes(15)}
              className="rounded-full bg-[#EBF2E7] px-3 py-2"
            >
              <Text className="text-xs font-sans-semibold uppercase tracking-[1px] text-[#30523F]">
                Log +15 min
              </Text>
            </Pressable>
          </View>
          <View className="gap-3">
            {metrics.map((metric) => {
              const ratio = Math.min(metric.value / metric.target, 1);
              const progressWidth = `${Math.round(ratio * 100)}%`;
              const step = metricStepById[metric.id] ?? 1;
              const iconName = metricIconById[metric.id] ?? "chart-line";

              return (
                <View key={metric.id} className="rounded-2xl bg-[#F5F8F2] p-4">
                  <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center gap-2">
                      <MaterialCommunityIcons
                        name={iconName}
                        size={18}
                        color="#315343"
                      />
                      <Text className="text-sm font-sans-semibold text-[#315343]">
                        {metric.label}
                      </Text>
                    </View>
                    <Text className="text-sm font-sans-bold text-[#1E3026]">
                      {metric.value.toLocaleString()} {metric.unit}
                    </Text>
                  </View>
                  <View className="mt-3 h-2 rounded-full bg-[#E3EDE1]">
                    <View
                      className="h-2 rounded-full bg-[#7AA37F]"
                      style={{ width: progressWidth }}
                    />
                  </View>
                  <Text className="mt-2 text-xs font-sans-medium text-[#5E6E66]">
                    {metric.note}
                  </Text>
                  <View className="mt-3 flex-row gap-2">
                    <Pressable
                      onPress={() => adjustMetric(metric.id, -step)}
                      className="rounded-full bg-[#E7EEE3] px-3 py-1.5"
                    >
                      <Text className="text-xs font-sans-semibold text-[#315343]">
                        -{step}
                      </Text>
                    </Pressable>
                    <Pressable
                      onPress={() => adjustMetric(metric.id, step)}
                      className="rounded-full bg-[#E7EEE3] px-3 py-1.5"
                    >
                      <Text className="text-xs font-sans-semibold text-[#315343]">
                        +{step}
                      </Text>
                    </Pressable>
                  </View>
                </View>
              );
            })}
          </View>
        </View>

        <View className="mt-6">
          <Text className="text-xl font-sans-bold text-[#1E3026]">
            Suggested Sessions
          </Text>
          <View className="mt-3 gap-3">
            {SESSION_PRESETS.map((preset) => (
              <View
                key={preset.id}
                className="rounded-2xl border border-[#DFE8DA] bg-white p-4"
              >
                <View className="flex-row items-center justify-between">
                  <View className="flex-row items-center gap-2">
                    <MaterialCommunityIcons
                      name={presetIconByIntensity[preset.intensity] ?? "leaf"}
                      size={18}
                      color="#2E5E47"
                    />
                    <Text className="text-base font-sans-bold text-[#1E3026]">
                      {preset.title}
                    </Text>
                  </View>
                  <Text className="text-sm font-sans-semibold text-[#30523F]">
                    {preset.minutes} min
                  </Text>
                </View>
                <Text className="mt-1 text-sm font-sans-medium text-[#5E6E66]">
                  {preset.intensity} • {preset.includes}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

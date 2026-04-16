import { YOGA_POSTURES } from "@/constants/data";
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

export default function SubscriptionsScreen() {
  const [expandedId, setExpandedId] = useState<string>(YOGA_POSTURES[0].id);
  const postureIconById: Record<
    string,
    keyof typeof MaterialCommunityIcons.glyphMap
  > = {
    tadasana: "human-male",
    "adho-mukha-svanasana": "dog",
    "virabhadrasana-ii": "sword-cross",
    "setu-bandhasana": "bridge",
    balasana: "flower-outline",
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
          source={images.tabExplore}
          imageStyle={{ borderRadius: 24, opacity: 0.18 }}
          className="overflow-hidden rounded-3xl bg-[#274235] p-5"
        >
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-3xl font-sans-bold text-white">
                Posture Library
              </Text>
              <Text className="mt-1 text-sm font-sans-medium text-white/80">
                Learn alignment, benefits, and safe practice notes.
              </Text>
            </View>
            <Image source={images.appIcon} className="h-12 w-12 rounded-2xl" />
          </View>
        </ImageBackground>

        <View className="mt-6 gap-3">
          {YOGA_POSTURES.map((posture) => {
            const isExpanded = expandedId === posture.id;
            const iconName = postureIconById[posture.id] ?? "meditation";

            return (
              <Pressable
                key={posture.id}
                onPress={() =>
                  setExpandedId((current) =>
                    current === posture.id ? "" : posture.id,
                  )
                }
                className="rounded-3xl border border-[#DDE7D9] bg-white p-4"
              >
                <View className="flex-row items-center justify-between">
                  <View className="mr-4 flex-1 flex-row items-center gap-3">
                    <View className="h-10 w-10 items-center justify-center rounded-full bg-[#E8F0E5]">
                      <MaterialCommunityIcons
                        name={iconName}
                        size={18}
                        color="#2D5A45"
                      />
                    </View>
                    <View className="flex-1">
                      <Text className="text-lg font-sans-bold text-[#1E3026]">
                        {posture.name}
                      </Text>
                      <Text className="mt-1 text-xs font-sans-semibold uppercase tracking-[1px] text-[#5E6E66]">
                        {posture.sanskritName}
                      </Text>
                    </View>
                  </View>
                  <View className="items-end">
                    <Text className="text-xs font-sans-semibold uppercase tracking-[1px] text-[#315343]">
                      {posture.level}
                    </Text>
                    <Text className="mt-1 text-xs font-sans-medium text-[#5E6E66]">
                      {posture.idealDurationMin} min hold
                    </Text>
                  </View>
                </View>
                <Text className="mt-3 text-sm font-sans-medium text-[#496153]">
                  Focus: {posture.focus}
                </Text>

                {isExpanded ? (
                  <View className="mt-4 gap-4 border-t border-[#E7EFE4] pt-4">
                    <View>
                      <Text className="text-xs font-sans-semibold uppercase tracking-[1px] text-[#315343]">
                        Benefits
                      </Text>
                      {posture.benefits.map((item, index) => (
                        <Text
                          key={item}
                          className="mt-2 text-sm font-sans-medium text-[#4A5D52]"
                        >
                          {index + 1}. {item}
                        </Text>
                      ))}
                    </View>

                    <View>
                      <Text className="text-xs font-sans-semibold uppercase tracking-[1px] text-[#315343]">
                        How To Practice
                      </Text>
                      {posture.howTo.map((step, index) => (
                        <Text
                          key={step}
                          className="mt-2 text-sm font-sans-medium text-[#4A5D52]"
                        >
                          {index + 1}. {step}
                        </Text>
                      ))}
                    </View>

                    <View className="rounded-2xl bg-[#F6FAF4] p-3">
                      <Text className="text-xs font-sans-semibold uppercase tracking-[1px] text-[#315343]">
                        Caution
                      </Text>
                      <Text className="mt-1 text-sm font-sans-medium text-[#4A5D52]">
                        {posture.caution}
                      </Text>
                    </View>
                  </View>
                ) : null}
              </Pressable>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

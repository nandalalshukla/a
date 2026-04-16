import type { ImageSourcePropType } from "react-native";

declare global {
  interface AppTab {
    name: string;
    title: string;
    icon: ImageSourcePropType;
  }

  interface TabIconProps {
    focused: boolean;
    icon: ImageSourcePropType;
  }

  interface WellnessMetric {
    id: string;
    label: string;
    value: number;
    unit: string;
    target: number;
    direction: "up" | "down";
    note?: string;
  }

  interface YogaPosture {
    id: string;
    name: string;
    sanskritName: string;
    level: "Beginner" | "Intermediate" | "Advanced";
    focus: string;
    idealDurationMin: number;
    benefits: string[];
    howTo: string[];
    caution: string;
  }

  interface SessionPreset {
    id: string;
    title: string;
    minutes: number;
    intensity: "Gentle" | "Steady" | "Power";
    includes: string;
  }

  interface WeeklySessionStat {
    id: string;
    day: string;
    minutes: number;
  }
}

export {};

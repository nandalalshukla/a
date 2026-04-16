import { icons } from "./icons";

export const tabs: AppTab[] = [
  { name: "index", title: "Today", icon: icons.home },
  { name: "subscriptions", title: "Postures", icon: icons.wallet },
  { name: "insights", title: "Insights", icon: icons.activity },
  { name: "settings", title: "Profile", icon: icons.setting },
];

export const YOGA_USER = {
  name: "Nandalal",
  experienceLevel: "Beginner",
  streakDays: 15,
};

export const DAILY_BASELINE = {
  yogaMinutes: 22,
  mindfulBreaths: 34,
};

export const DAILY_METRICS: WellnessMetric[] = [
  {
    id: "heart-rate",
    label: "Heart Rate",
    value: 72,
    unit: "bpm",
    target: 75,
    direction: "down",
    note: "Resting target < 75 bpm",
  },
  {
    id: "blood-sugar",
    label: "Blood Sugar",
    value: 98,
    unit: "mg/dL",
    target: 110,
    direction: "down",
    note: "Fasting range target",
  },
  {
    id: "steps",
    label: "Footsteps",
    value: 6480,
    unit: "steps",
    target: 8000,
    direction: "up",
    note: "Daily movement goal",
  },
];

export const SESSION_PRESETS: SessionPreset[] = [
  {
    id: "sunrise-flow",
    title: "Sunrise Flow",
    minutes: 15,
    intensity: "Gentle",
    includes: "Breathwork + Stretch",
  },
  {
    id: "midday-balance",
    title: "Midday Balance",
    minutes: 20,
    intensity: "Steady",
    includes: "Core + Balance",
  },
  {
    id: "evening-release",
    title: "Evening Release",
    minutes: 30,
    intensity: "Gentle",
    includes: "Hips + Lower Back",
  },
  {
    id: "power-vinyasa",
    title: "Power Vinyasa",
    minutes: 35,
    intensity: "Power",
    includes: "Strength + Mobility",
  },
];

export const YOGA_POSTURES: YogaPosture[] = [
  {
    id: "tadasana",
    name: "Mountain Pose",
    sanskritName: "Tadasana",
    level: "Beginner",
    focus: "Posture and grounding",
    idealDurationMin: 3,
    benefits: [
      "Improves body alignment",
      "Builds awareness of balance",
      "Calms breathing rhythm",
    ],
    howTo: [
      "Stand with feet hip-width apart and toes facing forward.",
      "Lift your chest softly while relaxing shoulders downward.",
      "Engage the thighs and keep weight equal on both feet.",
      "Take slow breaths through the nose.",
    ],
    caution: "If dizzy, practice near a wall for support.",
  },
  {
    id: "adho-mukha-svanasana",
    name: "Downward Dog",
    sanskritName: "Adho Mukha Svanasana",
    level: "Beginner",
    focus: "Hamstrings, shoulders, and spine",
    idealDurationMin: 2,
    benefits: [
      "Lengthens the posterior chain",
      "Boosts upper-body stability",
      "Relieves stiffness from long sitting",
    ],
    howTo: [
      "Start on hands and knees, tuck your toes under.",
      "Lift hips up and back, creating an inverted V shape.",
      "Press palms firmly and rotate upper arms outward.",
      "Keep knees softly bent if hamstrings feel tight.",
    ],
    caution: "Avoid long holds with wrist pain or uncontrolled hypertension.",
  },
  {
    id: "virabhadrasana-ii",
    name: "Warrior II",
    sanskritName: "Virabhadrasana II",
    level: "Intermediate",
    focus: "Leg strength and hip opening",
    idealDurationMin: 2,
    benefits: [
      "Strengthens quads and glutes",
      "Improves stamina and focus",
      "Opens hips and chest",
    ],
    howTo: [
      "Step feet wide and turn front toes forward.",
      "Bend the front knee over ankle while back leg stays straight.",
      "Extend arms in opposite directions at shoulder height.",
      "Gaze over front fingertips and breathe steadily.",
    ],
    caution: "Shorten stance if knee discomfort appears.",
  },
  {
    id: "setu-bandhasana",
    name: "Bridge Pose",
    sanskritName: "Setu Bandhasana",
    level: "Beginner",
    focus: "Back body and chest opening",
    idealDurationMin: 2,
    benefits: [
      "Activates glutes and hamstrings",
      "Expands chest for deeper breathing",
      "Supports lower back resilience",
    ],
    howTo: [
      "Lie on your back with knees bent and feet hip-width apart.",
      "Press feet and lift hips while keeping knees aligned.",
      "Interlace fingers under your back if comfortable.",
      "Lower slowly vertebra by vertebra.",
    ],
    caution: "Avoid if recovering from acute neck injury.",
  },
  {
    id: "balasana",
    name: "Child's Pose",
    sanskritName: "Balasana",
    level: "Beginner",
    focus: "Recovery and nervous-system downshift",
    idealDurationMin: 4,
    benefits: [
      "Encourages relaxation",
      "Gently stretches hips and back",
      "Supports slower heart rate",
    ],
    howTo: [
      "Kneel and sit back toward your heels.",
      "Fold your torso forward and rest forehead down.",
      "Extend arms forward or place them by your sides.",
      "Breathe into the lower ribs and belly.",
    ],
    caution: "Use a cushion under knees if there is sensitivity.",
  },
];

export const WEEKLY_SESSION_STATS: WeeklySessionStat[] = [
  { id: "mon", day: "Mon", minutes: 22 },
  { id: "tue", day: "Tue", minutes: 18 },
  { id: "wed", day: "Wed", minutes: 30 },
  { id: "thu", day: "Thu", minutes: 26 },
  { id: "fri", day: "Fri", minutes: 20 },
  { id: "sat", day: "Sat", minutes: 34 },
  { id: "sun", day: "Sun", minutes: 28 },
];

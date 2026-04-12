import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function App() {
  return (
    <SafeAreaView className="bg-background flex-1 p-5">

        <Text className="text-xl font-bold text-red-700 ">
          Welcome to Nativewind!
        </Text>

    </SafeAreaView>
  );
}

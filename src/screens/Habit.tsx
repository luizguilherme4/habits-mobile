import { useRoute } from "@react-navigation/native";
import { View } from "react-native";

interface Params {
  date: string;
}

export function Habit() {
  const route = useRoute();
  const { date } = route.params as Params;

  console.log(date);

  return (
    <View className="flex-1 bg-background px-8 pt-16">

    </View>
  )
}
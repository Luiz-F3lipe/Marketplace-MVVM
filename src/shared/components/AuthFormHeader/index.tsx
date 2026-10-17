import { FC } from "react";
import { Image, Text, View } from "react-native";
const Logo = require("../../../assets/images/Logo.png");

interface AuthFormHeaderProps {
  title: string;
  subtitle: string;
}

export const AuthFormHeader: FC<AuthFormHeaderProps> = ({
  title,
  subtitle,
}) => {
  return (
    <View className="items-center mb-8">
      <Image
        source={Logo}
        resizeMode="contain"
        className="w-[80px] h-[60px] mb-6"
      />

      <Text className="text-3xl font-bold mb-3 text-gray-500">{title}</Text>
      <Text className="text-base text-gray-300">{subtitle}</Text>
    </View>
  );
};

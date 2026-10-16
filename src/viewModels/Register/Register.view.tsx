import { FC, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useRegisterViewModel } from "./useRegister.viewModel";
import { AppInput } from "../../shared/components/AppInput";

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  onSubmit
}) => {

  const [email, setEmail] = useState<string>("");

  return (
    <View className="flex-1 justify-center p-2">
      <Text>Register</Text>

      <AppInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        leftIcon="mail-outline"
      />
      <AppInput
        label="Senha"
        leftIcon="lock-closed-outline"
        secureTextEntry
      />

      <TouchableOpacity
        className="bg-purple-base p-4 text-white mx-4 rounded-md items-center"
        onPress={onSubmit}>
        <Text className="text-white font-bold text-md">Registrar</Text>
      </TouchableOpacity>
    </View>
  )
}

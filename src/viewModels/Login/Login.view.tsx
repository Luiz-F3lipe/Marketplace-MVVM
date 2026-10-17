import { Text, TouchableOpacity, View } from "react-native";
import { AuthFormHeader } from "../../shared/components/AuthFormHeader";
import { router } from "expo-router";
import { KeyboardContainer } from "../../shared/components/KeyboardContainer";
import { FC } from "react";
import { useLoginViewModel } from "./useLogin.viewModel";
import { AppInputController } from "../../shared/components/AppInputController";
import { AppButton } from "../../shared/components/AppButton";

export const LoginView: FC<ReturnType<typeof useLoginViewModel>> = ({
  control,
  onSubmit,
}) => {
  return (
    <KeyboardContainer>
      <View className="items-center justify-center flex-1 px-[40px]">
        <View className="flex-1 w-full items-center justify-center">
          <AuthFormHeader
            title="Acesse sua conta"
            subtitle="Informe seu e-mail e senha para entrar"
          />

          <AppInputController
            control={control}
            name="email"
            leftIcon="mail-outline"
            label="E-MAIL"
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
          />

          <AppInputController
            control={control}
            name="password"
            leftIcon="lock-closed-outline"
            label="SENHA"
            placeholder="Digite sua senha"
            secureTextEntry
          />

          <AppButton
            className="mt-6"
            rightIcon="arrow-forward"
            onPress={onSubmit}
          >
            Acessar
          </AppButton>
        </View>

        <View className="flex-2 pb-10">
          <Text className="text-base mb-6 text-gray-300">
            Ainda não tem uma conta?
          </Text>

          <AppButton
            variant="outlined"
            rightIcon="arrow-forward"
            onPress={() => router.push("/register")}
          >
            Cadastrar
          </AppButton>
        </View>
      </View>
    </KeyboardContainer>
  );
};

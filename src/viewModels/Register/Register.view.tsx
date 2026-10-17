import { FC } from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import { useRegisterViewModel } from "./useRegister.viewModel";
import { AppInputController } from "../../shared/components/AppInputController";
import { AuthFormHeader } from "../../shared/components/AuthFormHeader";
import { KeyboardContainer } from "../../shared/components/KeyboardContainer";

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  onSubmit,
  control,
}) => {
  return (
    <KeyboardContainer>
      <ScrollView className="flex-1 px-[40px]">
        <AuthFormHeader
          title="Crie sua conta"
          subtitle="Informe os seus dados pessoais e de acesso"
        />

        <AppInputController
          control={control}
          name="name"
          leftIcon="person-outline"
          label="NOME"
          placeholder="Digite seu nome"
        />

        <AppInputController
          control={control}
          name="email"
          leftIcon="mail-outline"
          label="E-MAIL"
          placeholder="Digite seu e-mail"
        />

        <AppInputController
          control={control}
          name="phone"
          leftIcon="call-outline"
          label="TELEFONE"
          placeholder="(00) 00000-0000"
        />

        <AppInputController
          control={control}
          name="password"
          leftIcon="lock-closed-outline"
          label="SENHA"
          placeholder="Digite sua senha"
          secureTextEntry
        />

        <AppInputController
          control={control}
          name="confirmPassword"
          leftIcon="lock-closed-outline"
          label="CONFIRMAR SENHA"
          placeholder="Digite sua senha"
          secureTextEntry
        />

        <TouchableOpacity
          className="bg-purple-base p-4 text-white mx-4 rounded-md items-center"
          onPress={onSubmit}
        >
          <Text className="text-white font-bold text-md">Registrar</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardContainer>
  );
};

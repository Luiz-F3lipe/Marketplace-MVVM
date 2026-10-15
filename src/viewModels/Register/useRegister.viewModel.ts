import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterFormData, registerScheme } from "./register.scheme";
import { useRegisterMutation } from "../../shared/queries/auth/use-register.mutation";

export const useRegisterViewModel = () => {
  const userRegisterMutation = useRegisterMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerScheme),
    defaultValues: {
      name: "Luiz Felipe",
      email: "luizf3lipe.dev@gmail.com",
      password: "123456",
      confirmPassword: "123456",
      phone: "47997239827",
    }
  });

  const onSubmit = handleSubmit(async (userData) => {
    const { confirmPassword, ...registerData } = userData;

    await userRegisterMutation.mutateAsync(registerData);
  });

  return {
    control,
    errors,
    onSubmit,
  };
}
import { useRef, useState } from "react"
import { BlurEvent, FocusEvent, TextInput } from "react-native";
import { colors } from "../../../styles/colors";

interface AppInputViewModelProps {
  isError?: boolean;
  isDisabled?: boolean;
  secureTextEntry?: boolean;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: BlurEvent) => void;
  mask?: (text: string) => string | void;
  onChangeText?: (text: string) => string | void;
  value?: string;
}

export const useAppViewModel = ({
  isError,
  isDisabled,
  secureTextEntry,
  onFocus,
  onBlur,
  mask,
  onChangeText,
  value
}: AppInputViewModelProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(secureTextEntry || false);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const inputRef = useRef<TextInput>(null);

  const handlePasswordToggle = () => {
    setShowPassword((preValue) => !preValue);
  };

  const handleWrapperPress = () => {
    inputRef.current?.focus();
  };

  const handleFocus = (event: FocusEvent) => {
    console.log('Focou no input')
    setIsFocused(true);
    onFocus?.(event);
  };

  const handleBlur = (event: BlurEvent) => {
    console.log('Desfocou no input')
    setIsFocused(false);
    onBlur?.(event);
  };

  const getIconColor = () => {
    if (isFocused) return colors["purple-base"];
    if (isError) return colors.danger;
    if (value) return colors["blue-base"];
    return colors.gray[200];
  };

  const handleTextChange = (text: string) => {
    if (mask) {
      onChangeText?.(mask(text) || "");
    } else {
      onChangeText?.(text);
    }
  };

  return {
    getIconColor,
    handleBlur,
    handleFocus,
    handleWrapperPress,
    handlePasswordToggle,
    showPassword,
    handleTextChange,
    isFocused
  }
}
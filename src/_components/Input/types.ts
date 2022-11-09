import { ImageSourcePropType } from "react-native";

export interface IInput {
    icone?: ImageSourcePropType;
    placeholder: string;
    style?: any;
    securityTextEntry?: boolean;
    value: string;
    onChangeText: (e: string) => void;
}
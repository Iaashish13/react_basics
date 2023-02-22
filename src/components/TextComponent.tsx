import styled from "styled-components/native";
import { TextProps, Text } from "react-native";

const defaultTextstyles = (theme: any) => `
font-family:${theme.fonts.body};
font-weight:${theme.fontWeights.regular};
color:${theme.colors.ui.secondary};
flex-wrap:wrap;
margin-top:0px;
margin-bottom:0px;
`;

interface TextsProps extends TextProps {
  variant?: "body" | "error" | "hint" | "caption";
  theme: any;
}

const body = (theme: any) => `
font-size:${theme.fontSizes.body}`;
const hint = (theme: any) => `
font-size:${theme.fontSizes.body}`;
const error = (theme: any) => `
font-size:${theme.fontSizes.body}`;
const caption = (theme: any) => `
font-size:${theme.fontSizes.body}`;
const variants = {
  body,
  hint,
  error,
  caption,
};

export const Texts = styled(Text)<TextsProps>`
  ${({ theme }) => defaultTextstyles(theme)}
  ${({ variant, theme }) => variants[variant || "body"](theme)}
`;

Texts.defaultProps = {
  variant: "body",
};

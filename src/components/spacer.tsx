import { View } from "react-native";
import styled, { useTheme } from "styled-components/native";
import React from "react";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "margin-top",
  left: "margin-left",
  right: "margin-right",
  bottom: "margin-bottom",
};

type Position = keyof typeof positionVariant;
type Size = keyof typeof sizeVariant;

const getVariant = (position: Position, size: Size, theme: any) => {
  const sizeIndex = sizeVariant[size];
  const value = theme.spacing[sizeIndex];
  return `${positionVariant[position]}:${value}`;
};

const SpacerView = styled(View)<{ variant: string }>`
  ${({ variant }) => variant};
`;

type SpacerProps = {
  position: Position;
  size: Size;
  children?: React.ReactNode;
};

export const Spacer = ({ position, size, children }: SpacerProps) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

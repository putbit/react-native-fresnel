import { CreateMediaResults, MediaProps } from "../../Media"
import { StyleProp, View, ViewStyle } from "react-native"
import React, { ComponentType, PropsWithChildren, ReactNode } from "react"

export type RnMediaProps<BreakpointKey, Interaction> = PropsWithChildren<
  Omit<
    MediaProps<BreakpointKey, Interaction>,
    "children" | "className" | "interaction"
  >
> & {
  style?: StyleProp<ViewStyle>
}

export type RnMedia<BreakpointKey, Interaction> = ComponentType<
  RnMediaProps<BreakpointKey, Interaction>
>

export type GetMediaComponent = <
  BreakpointKey extends string,
  Interaction extends string
>(
  media: CreateMediaResults<BreakpointKey, Interaction>,
  ssr: boolean
) => RnMedia<BreakpointKey, Interaction>

export const wrapChildren = (
  children: ReactNode,
  style: StyleProp<ViewStyle>
) => (_: string, visible: boolean) => {
  if (!visible) {
    return undefined
  }

  return <View style={style}>{children}</View>
}

import React from "react"
import { GetMediaComponent, wrapChildren } from "./common"

export const getMediaComponent: GetMediaComponent = media => {
  return ({ style, children, ...rest }) => {
    return <media.Media {...rest}>{wrapChildren(children, style)}</media.Media>
  }
}

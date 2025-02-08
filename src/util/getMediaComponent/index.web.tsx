import { GetMediaComponent, wrapChildren } from "./common"
// @ts-expect-error
import { unstable_createElement } from "react-native-web"

export const getMediaComponent: GetMediaComponent = (media, ssr) => {
  if (ssr) {
    return props => unstable_createElement(media.Media, props)
  }

  return ({ children, style, ...rest }) => {
    return unstable_createElement(media.Media, {
      ...rest,
      children: wrapChildren(children, style),
    })
  }
}

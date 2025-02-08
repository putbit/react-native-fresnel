import {
  createMedia as createMediaBase,
  CreateMediaConfig,
  CreateMediaResults,
} from "./Media"
import { getMediaComponent } from "./util/getMediaComponent"
import { RnMedia } from "./util/getMediaComponent/common"

type RnCreateMediaResults<BreakpointKey, Interaction> = Omit<
  CreateMediaResults<BreakpointKey, Interaction>,
  "Media"
> & {
  Media: RnMedia<BreakpointKey, Interaction>
}

export function createMedia<
  BreakpointKey extends string,
  Interaction extends string
>({
  ssr = false,
  ...config
}: CreateMediaConfig<BreakpointKey, Interaction> & {
  ssr?: boolean
}): RnCreateMediaResults<BreakpointKey, Interaction> {
  const result = createMediaBase<BreakpointKey, Interaction>(config)

  const Media = getMediaComponent(result, ssr)

  return {
    ...result,
    Media,
  }
}

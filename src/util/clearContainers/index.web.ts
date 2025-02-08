import { ClearContainers } from "./common"

export const clearContainers: ClearContainers = className => {
  const containerEls = document.getElementsByClassName(className)
  Array.from(containerEls).forEach(el => (el.innerHTML = ""))
}

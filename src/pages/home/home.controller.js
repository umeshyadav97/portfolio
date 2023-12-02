import HTML from "@local/assets/images/icons/html.svg"
import CSS from "@local/assets/images/icons/css.svg"
import JS from "@local/assets/images/icons/js.svg"
import React from "@local/assets/images/icons/react.svg"
import Next from "@local/assets/images/icons/next.svg"
import Mui from "@local/assets/images/icons/mui.svg"
import Tailwind from "@local/assets/images/icons/tailwind.svg"
export function useHomeController() {
  const techStackList = [
    { id: 1, src: HTML, alt: "Image 1" },
    { id: 2, src: CSS, alt: "Image 2" },
    { id: 3, src: JS, alt: "Image 3" },
    { id: 4, src: React, alt: "Image 4" },
    { id: 5, src: Next, alt: "Image 5" },
    { id: 6, src: Mui, alt: "Image 6" },
    { id: 7, src: Tailwind, alt: "Image 7" }
  ]
  return { techStackList }
}

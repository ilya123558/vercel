"use client"

import { useEffect } from "react"

export const ZoomBlocker = () => {
  useEffect(() => {
    const preventPinchZoom = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault()
      }
    }

    const preventGesture = (e: Event) => {
      e.preventDefault()
    }

    document.addEventListener("touchmove", preventPinchZoom, { passive: false })
    document.addEventListener("gesturestart", preventGesture, { passive: false })

    return () => {
      document.removeEventListener("touchmove", preventPinchZoom)
      document.removeEventListener("gesturestart", preventGesture)
    }
  }, [])

  return null
}

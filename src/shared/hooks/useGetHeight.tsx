import { MutableRefObject, useCallback, useEffect, useState } from "react"

interface IProps {
  containerRef: MutableRefObject<HTMLDivElement | null>
  withoutMenu?: boolean
}

export const useGetHeight = ({ containerRef, withoutMenu }: IProps) => {
  const [height, setHeight] = useState(0)
  const [menuHeightValue, setMenuHeightValue] = useState(0)

  const calculateHeights = useCallback(() => {
    const screenHeight = window.visualViewport?.height || window.innerHeight

    const menu = document.getElementById("menu")
    const menuHeight = menu && !withoutMenu ? menu.offsetHeight : 0
    setMenuHeightValue(menuHeight)

    if (containerRef.current) {
      const { y } = containerRef.current.getBoundingClientRect()
      const calculatedHeight = Math.floor(screenHeight - y - menuHeight)
      setHeight(calculatedHeight < 0 ? 0 : calculatedHeight)
    }
  }, [containerRef, withoutMenu])

  useEffect(() => {
    const delayedCalc = () => requestAnimationFrame(calculateHeights)

    delayedCalc()

    window.addEventListener("resize", calculateHeights)
    window.addEventListener("orientationchange", calculateHeights)

    window.visualViewport?.addEventListener("resize", calculateHeights)

    const resizeObserver = new ResizeObserver(() => calculateHeights())
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }

    return () => {
      window.removeEventListener("resize", calculateHeights)
      window.removeEventListener("orientationchange", calculateHeights)
      window.visualViewport?.removeEventListener("resize", calculateHeights)
      resizeObserver.disconnect()
    }
  }, [calculateHeights])

  return { height, menuHeight: menuHeightValue }
}

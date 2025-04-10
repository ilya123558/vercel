import { MutableRefObject, useEffect, useState } from "react";

interface IProps {
  containerRef: MutableRefObject<HTMLDivElement | null>
  withoutMenu?: boolean
}

export const useGetHeight = ({ containerRef, withoutMenu }: IProps) => {
  const [height, setHeight] = useState(0)
  const [menuHeightValue, setMenuHeightValue] = useState(0)

  const calculateHeights = () => {
    const screenHeight = window.innerHeight
    const menu = document.getElementById('menu')
    const menuHeight = (menu && !withoutMenu) ? menu.offsetHeight : 0
    setMenuHeightValue(menuHeight)

    if (containerRef.current) {
      const { y } = containerRef.current.getBoundingClientRect()
      const result = Math.floor(screenHeight - y - menuHeight)
      setHeight(result < 0 ? 0 : result)
    }
  }

  useEffect(() => {
    const delayedCalc = () => {
      requestAnimationFrame(() => {
        calculateHeights()
      })
    }
  
    delayedCalc()
    window.addEventListener("resize", calculateHeights)
    return () => window.removeEventListener("resize", calculateHeights)
  }, [withoutMenu])

  return { height, menuHeight: menuHeightValue}
}

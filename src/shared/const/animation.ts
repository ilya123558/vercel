import { MotionProps, Variant, Variants } from "framer-motion";

export const animationRight: MotionProps = {
  animate: {
    translateX: [10, 0],
  },
  transition: {
    duration: 0.4,
    type: "spring",
  },
};

export const animationLeft: MotionProps = {
  animate: {
    translateX: [-10, 0],
  },
  transition: {
    duration: 0.4,
    type: "spring",
  },
};

export const animationTop: MotionProps = {
  animate: {
    translateY: [-40, 0],
  },
  transition: {
    duration: 0.4,
    type: "spring",
  },
};

export const animationBottom: MotionProps = {
  animate: {
    translateY: [40, 0],
  },
  transition: {
    duration: 0.4,
    type: "spring",
  },
};

export const animationBtn: MotionProps = {
  animate: {
    scale: [1, 1.04],
  },
  transition: {
    duration: 0.5,
    repeat: Infinity,
    repeatType: "reverse",
  },
};

export const animationImg: MotionProps = {
  animate: {
    scale: [0.8, 1],
    opacity: [0, 1],
  },
  transition: {
    duration: 0.2,
  },
};

export const animationWithDynamicDalay = (index: number): MotionProps => {
  return {
    animate: {
      scale: [0.8, 1],
      opacity: [0, 1],
    },
    transition: {
      duration: 0.4,
      delay: index * 0.2,
    },
  }
};


export const animationModal: MotionProps = {
  variants: {
    open: {
      opacity: [0, 1],
      transition: {
        delay: 0.1
      }
    },
    closed: {
      opacity: 0,
      transition: {
        delay: 0
      }
    },
  },
};


export const animationModalContent: MotionProps = {
  variants: {
    open: {
      translateY: ['100%', 0],
      transition: {
        duration: 0.4,
        type: "spring"
      }
    },
    closed: {
      translateY: [0, '100%'],
      transition: {
        duration: 0.4,
      }
    },
  },
};
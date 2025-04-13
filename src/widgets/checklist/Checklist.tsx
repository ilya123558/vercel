'use client'
import { useEffect, useRef, useState } from "react";
import { Container } from "@/shared/ui/container/Container";
import { Toggle } from "@/shared/ui/toggle/Toggle";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { animationRight } from "@/shared/const/animation";

export const Checklist = () => {
  const [openBooster, setOpenBooster] = useState(false)
  const [toggle, setToggle] = useState(false)
  const ref = useRef<HTMLDivElement>(null);

  const router = useRouter()
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpenBooster(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);


  const handleTasksClick = () => {
    router.push('tasks')
  }
  
  const handleRatingClick = () => {
    router.push('rating')
  }

  return (
    <motion.div {...animationRight} className="relative z-[11] w-full overflow-hidden">
      <Container>
        <div className="grid grid-cols-4 gap-[2.7vw] mt-[2.67vw]">
          <button onClick={handleTasksClick} className="bg-gradient-block backdrop-blur-[20px] border-[1px] border-[#464D6854] h-70px rounded-[16px] flex items-center justify-center transition-all active:scale-95">
            <Image src={'/images/component-icons/scroll.png'} alt='scroll' width={64} height={64} quality={100} className='h-64px w-64px'/>
          </button>

          <button onClick={handleRatingClick} className="bg-gradient-block backdrop-blur-[20px] border-[1px] border-[#464D6854] h-70px rounded-[16px] flex items-center justify-center transition-all active:scale-95">
            <Image src={'/images/component-icons/crown.png'} alt='crown' width={64} height={64} quality={100} className='h-64px w-64px'/>
          </button>
        </div>
      </Container>

      <div ref={ref} onClick={() => setOpenBooster(true)} className={`absolute flex items-center bg-[#5D3EC1] rounded-[16px_0px_0px_16px] w-full h-70px top-[2.67vw] transition-all duration-300 border-[2px] translate-x-[100%] border-[#6F4AE7] ${openBooster ? 'translate-x-[27%]' : 'translate-x-[83%]'}`}>
        <div className="w-[73%] flex items-center">
          <div className="h-full w-41px ml-[3vw] mr-[2.67vw] flex items-center justify-center">
            <Image src={'/images/component-icons/rocket.png'} alt='rocket' width={47} height={41} quality={100} className='h-47px min-w-41px'/>
          </div>
          <div className="mr-[6vw]">
            <h3 className="fs-13">Booster Nametag</h3>
            <p className="w-140px fs-8 opacity-[0.5]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
          </div>
          <Toggle value={toggle} setValue={setToggle} />
        </div>
      </div>
    </motion.div>
  );
};
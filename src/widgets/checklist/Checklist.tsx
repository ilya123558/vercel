'use client'
import { Container } from "@/shared/ui/container/Container";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { animationRight } from "@/shared/const/animation";
import { AutoBot } from "@/features/auto-bot/AutoBot";

export const Checklist = () => {
  const router = useRouter()

  const handleTasksClick = () => {
    router.push('tasks')
  }
  
  const handleRatingClick = () => {
    router.push('rating')
  }

  return (
    <motion.div {...animationRight} className="relative z-[11] w-full">
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
      <AutoBot />
    </motion.div>
  );
};
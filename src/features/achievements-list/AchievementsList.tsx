import { animationRight } from "@/shared/const/animation";
import { BlockWrapper } from "@/shared/ui/wrappers/block-wrapper/BlockWrapper";
import { ListWrapper } from "@/shared/ui/wrappers/list-wrapper/ListWrapper";
import { motion } from "framer-motion";
import Image from "next/image";

export const AchievementsList = () => {
  const list = [
    {
      title: "Достижение #1", 
      photo: "/images/tasks/achievement.png", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", 
      total: 10, value: 10
    },
    {
      title: "Достижение #1", 
      photo: "/images/tasks/achievement.png", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", 
      total: 10, value: 3
    },
    {
      title: "Достижение #1", 
      photo: "/images/tasks/achievement.png", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", 
      total: 10, value: 2
    },
    {
      title: "Достижение #1", 
      photo: "/images/tasks/achievement.png", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", 
      total: 20, value: 10
    },
    {
      title: "Достижение #1", 
      photo: "/images/tasks/achievement.png", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", 
      total: 10, value: 3
    },
    {
      title: "Достижение #1", 
      photo: "/images/tasks/achievement.png", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", 
      total: 10, value: 10
    },
    {
      title: "Достижение #1", 
      photo: "/images/tasks/achievement.png", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", 
      total: 10, value: 2
    },
    {
      title: "Достижение #1", 
      photo: "/images/tasks/achievement.png", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", 
      total: 20, value: 10
    },
    {
      title: "Достижение #1", 
      photo: "/images/tasks/achievement.png", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", 
      total: 10, value: 3
    },
    {
      title: "Достижение #1", 
      photo: "/images/tasks/achievement.png", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", 
      total: 10, value: 10
    },
    {
      title: "Достижение #1", 
      photo: "/images/tasks/achievement.png", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", 
      total: 10, value: 2
    },
    {
      title: "Достижение #1", 
      photo: "/images/tasks/achievement.png", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt", 
      total: 20, value: 10
    },
  ]

  return (
    <motion.div {...animationRight} className="mt-[6.67vw]">
      <h4 className="font-normal fs-15 mb-[4vw]">Достижения</h4>
      <ListWrapper>
        <ul className="grid grid-cols-2 gap-x-[2.13vw] gap-y-[6vw]">
          {list.map(({title, photo, description, total, value}, index) => (
            <li key={index}>
              <BlockWrapper className="!bg-gradient-list-item border border-[#364357] h-200px flex flex-col items-center justify-between p-[3.5vw_2.67vw]">
                <h4 className="fs-13 font-semibold text-center">{title}</h4>
                <Image src={photo} alt="friend-img" width={80} height={80} quality={100} className="min-w-80px min-h-80px rounded-full"/>
                <p className="text-center fs-9 opacity-50">{description}</p>
              </BlockWrapper>
              <div className="w-full mt-[1.5vw]">
                <div className="bg-[#2D374A] rounded-[20px] h-[2.14vw]">
                  <div style={{width: `${(value * 100) / total}%`  }} className="bg-gradient-violet rounded-[20px] h-[2.14vw]"></div>
                </div>
                <div className="mt-[1.1vw] flex items-center justify-center">
                  <div className={`p-[1.47vw_3.45vw] bg-[#2C3340] rounded-[20px] ${value >= total ? 'border border-[#A34AE7]' : ''}`}>
                    {value >= total 
                      ? <p className="font-medium fs-13">Выполнен</p>
                      : <p className="font-medium fs-13"><span className="text-violet">{value}</span>/{total}</p>
                    }
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </ListWrapper>
    </motion.div>
  );
};
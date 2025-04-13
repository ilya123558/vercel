'use client'
import Image from "next/image"
import { Crystal } from "../crystal/Crystal"
import { ITask } from "@/entities/tasks/types/tasks"

export const DailyTasksItem = (props: ITask) => {
  const { description, title, photo, completed, currentProgress, totalProgress, reward } = props
  const handleClick = () => {}

  return (
    <li className="flex items-center justify-between p-[2.4vw_3vw_2.4vw_2.67vw] bg-gradient-list-item border border-[#364357] rounded-[20px]">
      <div className="flex items-center gap-[3.7vw]">
        <Image src={photo} alt="friend-img" width={42} height={42} quality={100} className="min-w-42px min-h-42px rounded-full"/>
        <div className="flex flex-col justify-between max-w-170px">
          <h4 className="font-semibold fs-13">{title}</h4>
          <p className="font-medium fs-8 opacity-50">{description}</p>
        </div>
      </div>
      {completed 
        ?(
          <div className="w-95px h-27px flex items-center justify-center fs-12 font-medium rounded-[20px] border border-[#6F4AE7]">
            Выполнен
          </div>
        )
        : (
          currentProgress === totalProgress 
            ?(
              <button onClick={handleClick} className="active:scale-95 will-change-transform transition-all bg-gradient-violet w-95px h-27px flex items-center justify-center fs-12 font-medium rounded-[20px]">
                Получить
              </button>
            )
            : <Crystal value={`+${reward}`} reverse />
        )
      }
      
    </li>
  );
};
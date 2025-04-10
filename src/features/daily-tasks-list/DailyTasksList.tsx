import { animationLeft } from "@/shared/const/animation";
import { DailyTasksItem } from "@/shared/ui/daily-tasks-item/DailyTasksItem";
import { motion } from "framer-motion";

export const DailyTasksList = () => {
  const list = [
    {
      photo: "/images/tasks/tasks.png",
      title: "Задание #1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      value: 20,
      status: 'claim' 
    },
    {
      photo: "/images/tasks/tasks.png",
      title: "Задание #2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      value: 20,
      status: 'pending'
    },
    {
      photo: "/images/tasks/tasks.png",
      title: "Задание #3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      value: 20,
      status: 'done'
    },
  ];

  return (
    <motion.div {...animationLeft}>
      <h4 className="font-normal fs-15 mb-[4vw]">Ежедневные задания</h4>
      <ul className="flex flex-col gap-[1.35vw]">
        {list.map((item, index) => (
          <DailyTasksItem key={index} {...item} />
        ))}
      </ul>
    </motion.div>
  );
};

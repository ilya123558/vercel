import { useLazyGetTasksQuery } from "@/entities/tasks/api/tasks.api";
import { animationLeft } from "@/shared/const/animation";
import { DailyTasksItem } from "@/shared/ui/daily-tasks-item/DailyTasksItem";
import { ListEmpty } from "@/shared/ui/list-empty/ListEmpty";
import { motion } from "framer-motion";
import { useEffect } from "react";

// const list = [
//   {
//     photo: "/images/tasks/tasks.png",
//     title: "Задание #1",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
//     value: 20,
//     status: 'claim' 
//   },
//   {
//     photo: "/images/tasks/tasks.png",
//     title: "Задание #2",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
//     value: 20,
//     status: 'pending'
//   },
//   {
//     photo: "/images/tasks/tasks.png",
//     title: "Задание #3",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
//     value: 20,
//     status: 'done'
//   },
// ];

export const DailyTasksList = () => {
  const [getTasks, { data }] = useLazyGetTasksQuery()

  useEffect(() => {
    getTasks({page: 1, limit: 50})
  }, [])

  return (
    <motion.div {...animationLeft}>
      <h4 className="font-normal fs-15 mb-[1vw]">Ежедневные задания</h4>
      {data && (
        data.tasks.length !== 0
          ? (
            <ul className="flex flex-col gap-[1.35vw]">
              {data.tasks.map((item, index) => (
                <DailyTasksItem key={index} {...item} />
              ))}
            </ul>
            )
          : <ListEmpty />
      )}
    </motion.div>
  );
};

import { ListWrapper } from "@/shared/ui/wrappers/list-wrapper/ListWrapper";
import { RatingItem } from "@/shared/ui/rating-item/RatingItem";
import { motion } from "framer-motion";
import { animationWithDynamicDalay } from "@/shared/const/animation";

const list = [
  {name: 'Friend’s name', lvl: 2, photo: '/images/profile/friend-img.png', position: 1},
  {name: 'Friend’s name', lvl: 2, photo: '/images/profile/friend-img.png', position: 2},
  {name: 'Friend’s name', lvl: 2, photo: '/images/profile/friend-img.png', position: 3},
  {name: 'Friend’s name', lvl: 2, photo: '/images/profile/friend-img.png', position: 4},
  {name: 'Friend’s name', lvl: 2, photo: '/images/profile/friend-img.png', position: 5},
  {name: 'Friend’s name', lvl: 2, photo: '/images/profile/friend-img.png', position: 6},
  {name: 'Friend’s name', lvl: 2, photo: '/images/profile/friend-img.png', position: 7},
  {name: 'Friend’s name', lvl: 2, photo: '/images/profile/friend-img.png', position: 8},
  {name: 'Friend’s name', lvl: 2, photo: '/images/profile/friend-img.png', position: 9},
  {name: 'Friend’s name', lvl: 2, photo: '/images/profile/friend-img.png', position: 10},
  {name: 'Friend’s name', lvl: 2, photo: '/images/profile/friend-img.png', position: 11},
]

export const RatingList = () => {
  return (
    <ListWrapper className="mt-[2.8vw]">
      <ul className="flex flex-col gap-[7px]">
        {list.map((item, index) => (
          <motion.div key={index} {...animationWithDynamicDalay(index)}>
            <RatingItem {...item} />
          </motion.div>
        ))}
      </ul>
    </ListWrapper>
  );
};
'use client'
import { ProfileRatingInfo } from "@/features/profile-rating-info/ProfileRatingInfo";
import { RatingList } from "@/features/rating-list/RatingList";
import { SelectActiveList } from "@/features/select-active-list/SelectActiveList";
import { animationImg } from "@/shared/const/animation";
import { Container } from "@/shared/ui/container/Container";
import { RatingItem } from "@/shared/ui/rating-item/RatingItem";
import { Header } from "@/widgets/header/Header";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Page() {
  const [activeVariant, setActiveVariant] = useState<string>('rating 1')
  const selectList = [
    {title: 'Rating #1', value: 'rating 1'},
    {title: 'Rating #2', value: 'rating 2'},
    {title: 'Rating #3', value: 'rating 3'},
  ]

  return (
    <section>
      <Container>
        <Header />
        <ProfileRatingInfo />
        <SelectActiveList 
          value={activeVariant}
          setValue={setActiveVariant}
          selectList={selectList}
        />
        <motion.div {...animationImg} className="mt-[3vw]">
          <RatingItem 
            lvl={2}
            name={'Это Вы'} 
            photo={'/images/profile/friend-img.png'}
            position={43453}
          />
          <div className="w-full bg-gradient-decor h-[1px] mt-[3.3vw] mb-[3.3vw] opacity-50"></div>
        </motion.div>
        <RatingList />
      </Container>
    </section>
  );
}

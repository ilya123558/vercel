'use client'
import { useGetReferralsQuery, useLazyGetReferralsQuery } from "@/entities/users/api/users.api";
import { IReferralUser } from "@/entities/users/types/users";
import { ProfileRatingInfo } from "@/features/profile-rating-info/ProfileRatingInfo";
import { RatingList } from "@/features/rating-list/RatingList";
import { SelectActiveList } from "@/features/select-active-list/SelectActiveList";
import { animationImg } from "@/shared/const/animation";
import { Container } from "@/shared/ui/container/Container";
import { RatingItem } from "@/shared/ui/rating-item/RatingItem";
import { useAppSelector } from "@/views/store";
import { Header } from "@/widgets/header/Header";
import { motion } from "framer-motion";
import { useState } from "react";


const selectList = [
  {title: 'Rating #1', value: 'rating 1'},
  {title: 'Rating #2', value: 'rating 2'},
  {title: 'Rating #3', value: 'rating 3'},
]
export default function Page() {
  const [activeVariant, setActiveVariant] = useState<string>('rating 1')
  const { user } = useAppSelector(state => state.main)

  if(!user) {
    return <></>
  }

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
            level={user.level}
            fullName={user.fullName} 
            photo={user.photo}
            id={user.id}
          />
          <div className="w-full bg-gradient-decor h-[1px] mt-[3.3vw] mb-[3.3vw] opacity-50"></div>
        </motion.div>
        <RatingList />
      </Container>
    </section>
  );
}

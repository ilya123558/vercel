'use client'
import { FriendsList } from "@/features/friends-list/FriendsList";
import { ProfileInfo } from "@/features/profile-info/ProfileInfo";
import { SelectActiveList } from "@/features/select-active-list/SelectActiveList";
import { animationRight } from "@/shared/const/animation";
import { Button } from "@/shared/ui/button/Button";
import { Container } from "@/shared/ui/container/Container";
import { Header } from "@/widgets/header/Header";
import { SelectCustomize } from "@/widgets/select-customize/SelectCustomize";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Page() {
  const [activeVariant, setActiveVariant] = useState<string>('friends')
  const selectList = [
    {title: 'Друзья', value: 'friends'},
    {title: 'Шкафчик', value: 'customize'},
  ]

  return (
    <section>
      <Container>
        <Header />
        <ProfileInfo />
        <div className="flex flex-col gap-[5px] w-full">
          {activeVariant === 'friends' && <motion.div {...animationRight}><Button onClick={() => {}} className="!p-[3.2vw]">Пригласить друга</Button></motion.div>}
          <SelectActiveList 
            value={activeVariant}
            setValue={setActiveVariant}
            selectList={selectList}
          />
          {activeVariant === 'friends'
            ? <FriendsList />
            : <SelectCustomize />
          }
        </div>
      </Container>
    </section>
  );
}

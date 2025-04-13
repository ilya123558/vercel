'use client'
import { useLazyGetReferralsQuery } from "@/entities/users/api/users.api";
import { animationWithDynamicDalay } from "@/shared/const/animation";
import { Crystal } from "@/shared/ui/crystal/Crystal";
import { ListEmpty } from "@/shared/ui/list-empty/ListEmpty";
import { ListWrapper } from "@/shared/ui/wrappers/list-wrapper/ListWrapper";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

// const list = [
//   {name: 'Friend’s name', lvl: 2, photo: '/images/profile/friend-img.png', value: 20},
//   {name: 'Friend’s name', lvl: 2, photo: '/images/profile/friend-img.png', value: 20},
//   {name: 'Friend’s name', lvl: 2, photo: '/images/profile/friend-img.png', value: 20},
//   {name: 'Friend’s name', lvl: 2, photo: '/images/profile/friend-img.png', value: 20},
//   {name: 'Friend’s name', lvl: 2, photo: '/images/profile/friend-img.png', value: 20},
//   {name: 'Friend’s name', lvl: 2, photo: '/images/profile/friend-img.png', value: 20},
//   {name: 'Friend’s name', lvl: 2, photo: '/images/profile/friend-img.png', value: 20},
//   {name: 'Friend’s name', lvl: 2, photo: '/images/profile/friend-img.png', value: 20},
//   {name: 'Friend’s name', lvl: 2, photo: '/images/profile/friend-img.png', value: 20},
//   {name: 'Friend’s name', lvl: 2, photo: '/images/profile/friend-img.png', value: 20},
//   {name: 'Friend’s name', lvl: 2, photo: '/images/profile/friend-img.png', value: 20},
//   {name: 'Friend’s name', lvl: 2, photo: '/images/profile/friend-img.png', value: 20},
//   {name: 'Friend’s name', lvl: 2, photo: '/images/profile/friend-img.png', value: 20},
//   {name: 'Friend’s name', lvl: 2, photo: '/images/profile/friend-img.png', value: 20},
//   {name: 'Friend’s name', lvl: 2, photo: '/images/profile/friend-img.png', value: 20},
//   {name: 'Friend’s name', lvl: 2, photo: '/images/profile/friend-img.png', value: 20},
//   {name: 'Friend’s name', lvl: 2, photo: '/images/profile/friend-img.png', value: 20},
//   {name: 'Friend’s name', lvl: 2, photo: '/images/profile/friend-img.png', value: 20},
//   {name: 'Friend’s name', lvl: 2, photo: '/images/profile/friend-img.png', value: 20},
//   {name: 'Friend’s name', lvl: 2, photo: '/images/profile/friend-img.png', value: 20},
//   {name: 'Friend’s name', lvl: 2, photo: '/images/profile/friend-img.png', value: 20},
//   {name: 'Friend’s name', lvl: 2, photo: '/images/profile/friend-img.png', value: 20},
// ]

export const FriendsList = () => {
  const [getReferrals, { data }] = useLazyGetReferralsQuery()

  useEffect(() => {
    getReferrals({page: 1, limit: 50})
  }, [])

  return (
    <ListWrapper className="mt-[2.8vw]">
      {data && (
        data.referrals.length !== 0
          ? (
            <ul className="flex flex-col gap-[7px]">
              {data.referrals.map(({level, fullName, photo}, index) => (
                <motion.li key={index} {...animationWithDynamicDalay(index)} className="flex items-center justify-between p-[2.4vw_1.87vw_2.4vw_2.67vw] bg-[#262437] border border-[#364357] rounded-[12px]">
                  <div className="flex items-center gap-[3.7vw]">
                    <Image src={photo || ''} alt="friend-img" width={42} height={42} quality={100} className="w-42px h-42px rounded-full"/>
                    <div className="flex flex-col justify-between">
                      <h4 className="font-semibold fs-15">{fullName}</h4>
                      <p className="font-semibold fs-13 text-violet">lvl {level}</p>
                    </div>
                  </div>
                  <Crystal reverse value={`+${20}`}/>
                </motion.li>
              ))}
            </ul>
          )
          : <ListEmpty />
      )}
    </ListWrapper>
  );
};
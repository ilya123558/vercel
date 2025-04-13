'use client'
import { useClaimDailyRewardQuery, useLazyClaimDailyRewardQuery } from "@/entities/users/api/users.api";
import { IClaimDailyRewardResponse } from "@/entities/users/types/claimDailyReward";
import { formatCount } from "@/shared/libs/formatCount";
import { DefaultBtn } from "@/shared/ui/button/DefaultBtn";
import { DisableBtn } from "@/shared/ui/button/DisableBtn";
import { Crystal } from "@/shared/ui/crystal/Crystal";
import Image from "next/image";
import { useEffect, useState } from "react";

const list = [
  { day: 1, count: 5000 },
  { day: 2, count: 5000 },
  { day: 3, count: 5000 },
  { day: 4, count: 5000 },
  { day: 5, count: 5000 },
]
const boosterList = [
  { day: 6, title: 'Ultra boost' },
  { day: 7, title: 'Ultra boost' },
]

export const DailyAdmissionContent = ({day: activeDay, reward}: IClaimDailyRewardResponse) => {

  const BtnContent = ({day, count}: {day: number, count: number}) => (
    <div className="flex items-center justify-between p-[0px_5vw]">
      <div className="fs-14 font-bold">{day} день</div>
      <div className="">
        <Crystal
          value={`+${formatCount(count)}`} 
          reverse
          classNameImage="w-13px h-13px"
          classNameText="font-bold fs-12"
        />
      </div>
    </div>
  )

  return (
    <div className="w-full p-[22px_6px_11px_6px]">
      <div className="flex flex-col gap-[4px]">
        {list.map(item => (
          <div key={item.day} className={activeDay === item.day ? '' : 'p-[0px_7px]'}>
            {activeDay === item.day
              ? (
                <DefaultBtn disable className="bg-gradient-gray-to-bottom">
                  <BtnContent {...item} />
                </DefaultBtn>
              )
              : (
                activeDay > item.day
                  ? (
                    <DisableBtn>
                      <BtnContent {...item} />
                    </DisableBtn>
                  )
                  : (
                    <DefaultBtn disable>
                      <BtnContent {...item} />
                    </DefaultBtn>
                  )
              )
            }
          </div>
        ))}
        <div className="p-[0px_7px] grid grid-cols-2 gap-[6px]">
          {boosterList.map(({day, title}) => (
            <div key={day} className={`w-full aspect-square ${
                activeDay === day
                  ? 'bg-gradient-gray-to-bottom' 
                  : 'bg-gradient-block' 
              } rounded-[16px] border-b-[1px] border-[#464D6854] p-[2.8vw_0px]`}
            >
              <div className={`flex items-center justify-between flex-col ${activeDay > day ? 'opacity-[0.5]': ''}`}>
                <div className="fs-14 font-bold">{day} день</div>
                <Image src={'/images/component-icons/star.png'} alt="star" width={66} height={66} quality={100} className="w-66px h-66px" />
                <div className="fs-14 font-bold">{title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
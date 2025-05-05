'use client'
import { IClaimDailyRewardResponse } from "@/entities/users/types/claimDailyReward";
import { DefaultBtn } from "@/shared/ui/button/DefaultBtn";
import { DisableBtn } from "@/shared/ui/button/DisableBtn";
import { Crystal } from "@/shared/ui/crystal/Crystal";

const list = [
  { day: 1, count: 5000 },
  { day: 2, count: 5000 },
  { day: 3, count: 5000 },
  { day: 4, count: 5000 },
  { day: 5, count: 5000 },
]
const boosterList = [
  { day: 6, count: 5000 },
  { day: 7, count: 15000 },
]

export const DailyAdmissionContent = ({ day }: IClaimDailyRewardResponse) => {

  const BtnContent = ({day, count}: {day: number, count: number}) => (
    <div className="flex items-center justify-between p-[0px_5vw]">
      <div className="fs-14 font-bold">{day} день</div>
      <div className="">
        <Crystal
          value={count} 
          reverse
          withPlus
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
          <div key={item.day} className={day === item.day ? '' : 'p-[0px_7px]'}>
            {day === item.day
              ? (
                <DefaultBtn disable className="bg-gradient-gray-to-bottom">
                  <BtnContent {...item} />
                </DefaultBtn>
              )
              : (
                day > item.day
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
          {boosterList.map(item => (
            <div key={item.day} style={{backgroundImage: 'linear-gradient(180deg, #7EFFFF 0%, #006CFF 100%)'}} className="w-full aspect-square rounded-[16px] p-[1px]">
              <div className={`w-full h-full bg-dark-violet ${
                  day === item.day
                    ? 'bg-gradient-gray-to-bottom' 
                    : 'bg-gradient-block' 
                } rounded-[16px] border-b-[1px] border-[#464D6854] p-[2.8vw_0px]`}
              >
                <div className={`flex items-center justify-between h-full flex-col ${day > item.day ? 'opacity-[0.5]': ''}`}>
                  <div className="fs-14 font-bold">{item.day} день</div>
                  <div className="fs-14 font-bold mt-[-4vw]">
                    <Crystal value={item.count} reverse withPlus />
                  </div>
                  <div className=""></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
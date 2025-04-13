import { IReferralUser } from "@/entities/users/types/users";
import { formatCount } from "@/shared/libs/formatCount";
import Image from "next/image";

export const RatingItem = ({fullName, level, photo}: IReferralUser) => {
  return (
    <li className="flex items-center justify-between p-[2.4vw_5.87vw_2.4vw_2.67vw] bg-[#262437] border border-[#364357] rounded-[12px]">
      <div className="flex items-center gap-[3.7vw]">
        <Image src={photo || ''} alt="friend-img" width={42} height={42} quality={100} className="w-42px h-42px rounded-full"/>
        <div className="flex flex-col justify-between">
          <h4 className="font-semibold fs-15">{fullName}</h4>
          <p className="font-semibold fs-13 text-violet">lvl {level}</p>
        </div>
      </div>
      <p className="font-bold fs-17">#{formatCount(1)}</p>
    </li>
  );
};
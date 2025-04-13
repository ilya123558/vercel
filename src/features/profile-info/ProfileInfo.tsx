import { animationImg, animationLeft } from "@/shared/const/animation";
import { useAppSelector } from "@/views/store";
import { motion } from "framer-motion";
import Image from "next/image";

export const ProfileInfo = () => {
  const {user} = useAppSelector(state => state.main)

  if(!user) {
    return <></>
  }

  return (
    <div  className="w-full h-[30vh] flex items-center justify-center">
      <div className="">
        <motion.div {...animationImg} className="relative">
          <div className="z-[-1] rounded-full h-100px w-100px blur-[80px] bg-violet absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
          <svg className="z-[-1] w-142px h-142px absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" width="142" height="142" viewBox="0 0 142 142" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.00001 71C4.02944 71 -0.0587703 66.9546 0.569633 62.0239C1.95387 51.1627 5.83761 40.7258 11.9657 31.5545C19.7672 19.8786 30.8559 10.7784 43.8295 5.40455C56.803 0.0307238 71.0788 -1.37531 84.8514 1.36424C98.6241 4.10379 111.275 10.8659 121.205 20.7954C131.134 30.7249 137.896 43.3759 140.636 57.1486C143.375 70.9212 141.969 85.197 136.595 98.1705C131.222 111.144 122.121 122.233 110.445 130.034C101.274 136.162 90.8373 140.046 79.9761 141.43C75.0454 142.059 71 137.971 71 133L71 80C71 75.0294 66.9706 71 62 71L9.00001 71Z" fill="white" fillOpacity="0.1"/>
            <path d="M133 71C137.971 71 142.059 75.0454 141.43 79.9761C140.046 90.8373 136.162 101.274 130.034 110.445C122.233 122.121 111.144 131.222 98.1705 136.595C85.197 141.969 70.9212 143.375 57.1486 140.636C43.3759 137.896 30.7249 131.134 20.7954 121.205C10.8659 111.275 4.1038 98.6241 1.36424 84.8514C-1.37531 71.0788 0.0307314 56.803 5.40455 43.8295C10.7784 30.8559 19.8786 19.7672 31.5545 11.9657C40.7258 5.8376 51.1627 1.95385 62.0239 0.569629C66.9546 -0.0587706 71 4.02944 71 9V62C71 66.9706 75.0294 71 80 71H133Z" fill="#6F4AE7"/>
          </svg>
          <div>
            <Image src={user.photo || ''} alt="profile-img" width={136} height={136} quality={100} className="w-136px h-136px rounded-full" />
          </div>
        </motion.div>
        <motion.h3 {...animationLeft} className="fs-17 font-bold text-center mt-[2.7vw]">{user.fullName}</motion.h3>
      </div>
    </div>
  );
};
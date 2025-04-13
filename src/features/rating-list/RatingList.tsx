'use client'
import { ListWrapper } from "@/shared/ui/wrappers/list-wrapper/ListWrapper";
import { RatingItem } from "@/shared/ui/rating-item/RatingItem";
import { motion } from "framer-motion";
import { animationWithDynamicDalay } from "@/shared/const/animation";
import { useLazyGetReferralsQuery } from "@/entities/users/api/users.api";
import { useEffect } from "react";
import { ListEmpty } from "@/shared/ui/list-empty/ListEmpty";

export const RatingList = () => {
  const [ getReferrals, { data } ] = useLazyGetReferralsQuery();

  useEffect(() => {
    getReferrals({page: 1, limit: 50})
  }, [])

  return (
    <ListWrapper className="mt-[2.8vw]">
      <ul className="flex flex-col gap-[7px]">
        {data && (
          data.referrals.length !== 0
            ? (
              data.referrals.map((referral, index) => (
                <motion.div key={referral.id} {...animationWithDynamicDalay(index)}>
                  <RatingItem {...referral} />
                </motion.div>
              ))
            )
            : <ListEmpty />
        )}
      </ul>
    </ListWrapper>
  );
};
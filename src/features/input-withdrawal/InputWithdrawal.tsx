'use client'
import { Input } from "@/shared/ui/input/Input";
import { Select } from "@/shared/ui/select/Select";
import { ChangeEvent, useState } from "react";

interface IProps {
  withdrawalValue: string | number
  setWithdrawalValue: (withdrawalValue: string | number) => void
}


export const InputWithdrawal = ({withdrawalValue, setWithdrawalValue}: IProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    value = value.replace(/[^\d]/g, '');
    value = value.replace(/^0+(?=\d)/, '');
  
    setWithdrawalValue(value === '' ? 0 : value);
  }

  return (
    <div className="grid grid-cols-4 gap-[5px]">
      <Input value={withdrawalValue} onChange={handleChange}/>
      <div className="flex items-center justify-center font-semibold fs-12 gap-[2.3vw] bg-[#262437] border border-[#364357] h-42px w-full rounded-[9px] uppercase">
        Token
      </div>
    </div>
  )
};
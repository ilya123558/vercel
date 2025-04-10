'use client'
import { ChangeEvent } from "react";

interface IProps {
  value: string | number
  onChange: (value: ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({value, onChange}: IProps) => {
  return (
    <input 
      value={value} 
      onChange={onChange}
      type="number"
      className="col-span-3 bg-[#262437] rounded-[9px] border border-[#364357] h-42px text-center fs-16 font-semibold" 
    />
  );
};
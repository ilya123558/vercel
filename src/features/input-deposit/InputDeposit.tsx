'use client'
import { Input } from "@/shared/ui/input/Input";
import { Select } from "@/shared/ui/select/Select";
import { ChangeEvent, useState } from "react";

interface IProps {
  depositValue: string | number
  setDepositValue: (depositValue: string | number) => void
}

const coinOption = ['Ton', 'Coin 1', 'Coin 2', 'Coin 3', 'Coin 4', 'Coin 1', 'Coin 2', 'Coin 3', 'Coin 4']

export const InputDeposit = ({depositValue, setDepositValue}: IProps) => {
  const [activeOptionsValue, setActiveOptionsValue] = useState(coinOption[0])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    value = value.replace(/[^\d]/g, '');
    value = value.replace(/^0+(?=\d)/, '');
  
    setDepositValue(value === '' ? 0 : value);
  }

  return (
    <div className="grid grid-cols-4 gap-[5px]">
      <Input value={depositValue} onChange={handleChange}/>
      <Select
        activeOptionsValue={activeOptionsValue} 
        setActiveOptionsValue={setActiveOptionsValue} 
        options={coinOption}
      />
    </div>
  )
};
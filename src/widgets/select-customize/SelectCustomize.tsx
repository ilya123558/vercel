'use client'
import { CustomizeList } from "@/features/customize-list/CustomizeList";
import { SelectActiveList } from "@/features/select-active-list/SelectActiveList";
import { useState } from "react";

export const SelectCustomize = () => {
  const [activeVariant, setActiveVariant] = useState<string>('coin')
  const selectList = [
    {title: 'Монеты', value: 'coin'},
    {title: 'Задний фон', value: 'background'},
  ]

  return (
    <div>
      <SelectActiveList
        value={activeVariant}
        setValue={setActiveVariant}
        selectList={selectList}
      />
      <CustomizeList />
    </div>
  );
};
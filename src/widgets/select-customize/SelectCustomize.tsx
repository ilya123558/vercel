'use client'
import { useLazyGetCustomizationsProfileQuery, useLazyGetCustomizationsQuery } from "@/entities/customizations/api/customizations.api";
import { CustomizationType } from "@/entities/general/types/general";
import { CustomizeList } from "@/features/customize-list/CustomizeList";
import { SelectActiveList } from "@/features/select-active-list/SelectActiveList";
import { ListEmpty } from "@/shared/ui/list-empty/ListEmpty";
import { useEffect, useState } from "react";

// const data: {customizations: ICustomization[]} = {
//   customizations: []
// }

export const SelectCustomize = () => {
  const [activeVariant, setActiveVariant] = useState<string>(CustomizationType.COIN)
  const selectList = [
    {title: 'Монеты', value: CustomizationType.COIN},
    {title: 'Задний фон', value: CustomizationType.BACKGROUND},
  ]

  const [getCustomizationsCoin, { data: dataCoin }] = useLazyGetCustomizationsProfileQuery()
  const [getCustomizationsBackground, { data: dataBackground }] = useLazyGetCustomizationsProfileQuery()

  useEffect(() => {
    getCustomizationsCoin({page: 1, limit: 50, type: CustomizationType.COIN})
    getCustomizationsBackground({page: 1, limit: 50, type: CustomizationType.BACKGROUND})
  }, [])

  return (
    <div>
      <SelectActiveList
        value={activeVariant}
        setValue={setActiveVariant}
        selectList={selectList}
      />
      {activeVariant === CustomizationType.COIN
        ? (
          dataCoin && (
            dataCoin.customizations.length !== 0
              ? <CustomizeList list={dataCoin.customizations.filter(item => item.isBought)} />
              : <ListEmpty />
          )
        )
        : (
          dataBackground && (
            dataBackground.customizations.length !== 0
              ? <CustomizeList list={dataBackground.customizations.filter(item => item.isBought)} />
              : <ListEmpty />
          )
        )
      }
    </div>
  );
};
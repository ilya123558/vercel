'use client'
import { useLazyGetCustomizationsQuery } from "@/entities/customizations/api/customizations.api";
import { ICustomization } from "@/entities/customizations/types/customizations";
import { CustomizationType } from "@/entities/general/types/general";
import { CustomizeList } from "@/features/customize-list/CustomizeList";
import { SelectActiveList } from "@/features/select-active-list/SelectActiveList";
import { animationRight } from "@/shared/const/animation";
import { Container } from "@/shared/ui/container/Container";
import { ListEmpty } from "@/shared/ui/list-empty/ListEmpty";
import { Header } from "@/widgets/header/Header";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// const list: ICustomization[] = [
//   {title: 'Energy limit', photo: '/images/modal/zip.png', id: 1, price: 20, type: CustomizationType.BACKGROUND},
//   {title: 'Energy limit', photo: '/images/modal/zip.png', id: 1, price: 20, type: CustomizationType.BACKGROUND},
//   {title: 'Energy limit', photo: '/images/modal/zip.png', id: 1, price: 20, type: CustomizationType.BACKGROUND},
//   {title: 'Energy limit', photo: '/images/modal/zip.png', id: 1, price: 20, type: CustomizationType.BACKGROUND},
//   {title: 'Energy limit', photo: '/images/modal/zip.png', id: 1, price: 20, type: CustomizationType.BACKGROUND},
//   {title: 'Energy limit', photo: '/images/modal/zip.png', id: 1, price: 20, type: CustomizationType.BACKGROUND},
//   {title: 'Energy limit', photo: '/images/modal/zip.png', id: 1, price: 20, type: CustomizationType.BACKGROUND},
//   {title: 'Energy limit', photo: '/images/modal/zip.png', id: 1, price: 20, type: CustomizationType.BACKGROUND},
//   {title: 'Energy limit', photo: '/images/modal/zip.png', id: 1, price: 20, type: CustomizationType.BACKGROUND},
//   {title: 'Energy limit', photo: '/images/modal/zip.png', id: 1, price: 20, type: CustomizationType.BACKGROUND},
//   {title: 'Energy limit', photo: '/images/modal/zip.png', id: 1, price: 20, type: CustomizationType.BACKGROUND},
//   {title: 'Energy limit', photo: '/images/modal/zip.png', id: 1, price: 20, type: CustomizationType.COIN},
//   {title: 'Energy limit', photo: '/images/modal/zip.png', id: 1, price: 20, type: CustomizationType.BACKGROUND},
//   {title: 'Energy limit', photo: '/images/modal/zip.png', id: 1, price: 20, type: CustomizationType.COIN},
//   {title: 'Energy limit', photo: '/images/modal/zip.png', id: 1, price: 20, type: CustomizationType.BACKGROUND},
//   {title: 'Energy limit', photo: '/images/modal/zip.png', id: 1, price: 20, type: CustomizationType.COIN},
//   {title: 'Energy limit', photo: '/images/modal/zip.png', id: 1, price: 20, type: CustomizationType.BACKGROUND},
//   {title: 'Energy limit', photo: '/images/modal/zip.png', id: 1, price: 20, type: CustomizationType.COIN},
// ]

export default function Page() {
  const [activeVariant, setActiveVariant] = useState<string>(CustomizationType.COIN)

  const selectList = [
    {title: 'Монеты', value: CustomizationType.COIN},
    {title: 'Задний фон', value: CustomizationType.BACKGROUND},
  ]

  const [getCustomizationsCoin, { data: dataCoin }] = useLazyGetCustomizationsQuery()
  const [getCustomizationsBackground, { data: dataBackground }] = useLazyGetCustomizationsQuery()

  useEffect(() => {
    getCustomizationsCoin({page: 1, limit: 50, type: CustomizationType.COIN})
    getCustomizationsBackground({page: 1, limit: 50, type: CustomizationType.BACKGROUND})
  }, [])
  
  return (
    <section>
      <Container>
        <Header />
        <motion.div {...animationRight} className="flex items-center justify-center p-[2.6vw] m-[4vw_0px]">
          <h2 className="fs-17 font-semibold">Магазин</h2>
        </motion.div>
        <SelectActiveList
          value={activeVariant} 
          setValue={setActiveVariant}
          selectList={selectList}
        />
        {activeVariant === CustomizationType.COIN
          ? (
            dataCoin && (
              dataCoin.customizations.length !== 0
                ? <CustomizeList list={dataCoin.customizations} />
                : <ListEmpty />
            )
          )
          : (
            dataBackground && (
              dataBackground.customizations.length !== 0
                ? <CustomizeList list={dataBackground.customizations} />
                : <ListEmpty />
            )
          )
        }
      </Container>
    </section>
  );
}

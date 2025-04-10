'use client'
import { CustomizeList } from "@/features/customize-list/CustomizeList";
import { SelectActiveList } from "@/features/select-active-list/SelectActiveList";
import { animationRight } from "@/shared/const/animation";
import { Container } from "@/shared/ui/container/Container";
import { BlockWrapper } from "@/shared/ui/wrappers/block-wrapper/BlockWrapper";
import { Header } from "@/widgets/header/Header";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Page() {
  const [activeVariant, setActiveVariant] = useState<string>('coin')
  const selectList = [
    {title: 'Монеты', value: 'coin'},
    {title: 'Задний фон', value: 'background'},
  ]
  
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
        <CustomizeList />
      </Container>
    </section>
  );
}

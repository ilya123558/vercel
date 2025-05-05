'use client'
import { useLazyGetUpgradesQuery } from "@/entities/upgrades/api/upgrades.api";
import { UpgradeList } from "@/features/upgrade-list/UpgradeList";
import { Container } from "@/shared/ui/container/Container";
import { ListEmpty } from "@/shared/ui/list-empty/ListEmpty";
import { Title } from "@/shared/ui/title/Title";
import { useAppSelector } from "@/views/store";
import { Header } from "@/widgets/header/Header";
import { useEffect } from "react";

export default function Page() {
  const { pumpingPoints } = useAppSelector(state => state.main.meta)
  const [getUpgrades, { data }] = useLazyGetUpgradesQuery()

  useEffect(() => {
    getUpgrades({page: 1, limit: 50})
  }, [])

  return (
    <section>
      <Container>
        <Header>
          <div className="flex items-center justify-center">
            <p className="font-bold fs-14 opacity-[0.5]">Очки прокачки:</p>
            <p className="font-bold fs-17 ml-[1.3vw]">{pumpingPoints}</p>
          </div>
        </Header>
        <Title className="mt-[2.67vw] mb-[2.67vw]">Прокачка ({pumpingPoints} points)</Title>
        {data && (
          data.upgrades.length !== 0
            ? <UpgradeList list={data.upgrades} />
            : <ListEmpty />
        )}
      </Container>
    </section>
  );
}

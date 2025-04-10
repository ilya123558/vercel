'use client'
import { UpgradeList } from "@/features/upgrade-list/UpgradeList";
import { Container } from "@/shared/ui/container/Container";
import { Title } from "@/shared/ui/title/Title";
import { Header } from "@/widgets/header/Header";

export default function Page() {
  return (
    <section>
      <Container>
        <Header>
          <div className="flex items-center justify-center">
            <p className="font-bold fs-14 opacity-[0.5]">Очки прокачки:</p>
            <p className="font-bold fs-17 ml-[1.3vw]">10</p>
          </div>
        </Header>
        <Title className="mt-[2.67vw] mb-[2.67vw]">Прокачка</Title>
        <UpgradeList />
      </Container>
    </section>
  );
}

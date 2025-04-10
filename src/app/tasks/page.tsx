'use client'
import { AchievementsList } from "@/features/achievements-list/AchievementsList";
import { DailyTasksList } from "@/features/daily-tasks-list/DailyTasksList";
import { Container } from "@/shared/ui/container/Container";
import { Title } from "@/shared/ui/title/Title";
import { Header } from "@/widgets/header/Header";

export default function Page() {
  return (
    <section>
      <Container>
        <Header />
        <Title className="mt-[4vw] mb-[4vw]">Задания</Title>
        <DailyTasksList />
        <AchievementsList />
      </Container>
    </section>
  );
}

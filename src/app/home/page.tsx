'use client'
import { GameInfo } from "@/features/game-info/GameInfo";
import { Container } from "@/shared/ui/container/Container";
import { Checklist } from "@/widgets/checklist/Checklist";
import { Game } from "@/widgets/game/Game";
import { Header } from "@/widgets/header/Header";;

export default function Page() {
  return ( 
    <section className="">
      <Container>
        <Header>
          <GameInfo/>
        </Header>
      </Container>
      <Checklist/>
      <Game />
    </section>
  );
}

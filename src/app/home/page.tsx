'use client'
import { GameInfo } from "@/features/game-info/GameInfo";
import { Container } from "@/shared/ui/container/Container";
import { Checklist } from "@/widgets/checklist/Checklist";
import { Game } from "@/widgets/game/Game";
import { Header } from "@/widgets/header/Header";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const body = document.body;
    const backgroundUrl = '/images/home/bg.png';

    const img = new Image();
    img.src = backgroundUrl;
    img.onload = () => {
      body.style.backgroundImage = `url(${backgroundUrl})`;
      body.style.backgroundSize = 'cover';
      body.style.backgroundPosition = 'center';
    };

    return () => {
      body.style.backgroundImage = '';
    };
  }, []);

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

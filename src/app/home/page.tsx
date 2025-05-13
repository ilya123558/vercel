'use client'
import { GameInfo } from "@/features/game-info/GameInfo";
import { Container } from "@/shared/ui/container/Container";
import { useAppSelector } from "@/views/store";
import { Checklist } from "@/widgets/checklist/Checklist";
import { Game } from "@/widgets/game/Game";
import { Header } from "@/widgets/header/Header";
import { useEffect, useState } from "react";

export default function Page() {
  const { user } = useAppSelector(state => state.main)
  const [disablePage, setDisablePage] = useState(false)

  useEffect(() => {
    if(!user) return;
    const body = document.body;
    const backgroundUrl = user.background;

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
  }, [user]);

  useEffect(() => {
    const prevPage = localStorage.getItem('prev-page')

    if(prevPage && prevPage === '/') {
      setDisablePage(true)
      setTimeout(() => {
        setDisablePage(false)
        localStorage.setItem('prev-page', '')
      }, 2000)
    }
  }, [])

  return ( 
    <section className={disablePage ? 'pointer-events-none': ''}>
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

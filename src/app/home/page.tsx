'use client'
import { useClaimDailyRewardQuery } from "@/entities/users/api/users.api";
import { DailyAdmissionModal } from "@/features/daily-admission-modal/DailyAdmissionModal";
import { EnergyLimitModal } from "@/features/energy-limit-modal/EnergyLimitModal";
import { GameInfo } from "@/features/game-info/GameInfo";
import { Container } from "@/shared/ui/container/Container";
import { Checklist } from "@/widgets/checklist/Checklist";
import { Game } from "@/widgets/game/Game";
import { Header } from "@/widgets/header/Header";;

export default function Page() {
  const { data: claimDailyRewardData } = useClaimDailyRewardQuery()
  
  return (
    <section>
      {claimDailyRewardData && claimDailyRewardData.success && <DailyAdmissionModal {...claimDailyRewardData} />}
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

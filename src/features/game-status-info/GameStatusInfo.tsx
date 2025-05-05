'use client'
import { Container } from "@/shared/ui/container/Container";
import { Crystal } from "@/shared/ui/crystal/Crystal";
import { useAppSelector } from "@/views/store";
import Image from "next/image";

export const GameStatusInfo = () => {
  // const { statusGame } = useAppSelector(state => state.main.game)
  const statusGame: 'defeat' | 'win' = 'win' // win

  return (
    <Container>
      <div className={`relative w-full z-[20] mt-[2.67vw] transition-all ${statusGame ? 'translate-y-[0px]' : 'pointer-events-none opacity-0 translate-y-[-10vw]'}  flex items-start justify-center`}>
        {statusGame === 'win'
          ? (
            <>
              <Image src={'/images/home/win.png'} alt="win" width={334} height={106} quality={100} className="w-full absolute top-0 left-0 z-[1]" />
              <Image src={'/images/home/win-stars-1.png'} alt="win-stars-1" width={347} height={332} quality={100} className="w-full absolute top-0 left-0 translate-y-[5vw]" />
              <Image src={'/images/home/win-stars-2.png'} alt="win-stars-2" width={347} height={332} quality={100} className="w-full absolute top-0 left-0 translate-y-[5vw]" />
            </>
          )
          : <Image src={'/images/home/defeat.png'} alt="defeat" width={334} height={106} quality={100} className="w-full absolute top-0 left-0" />
        }
      </div>
    </Container>
  );
};
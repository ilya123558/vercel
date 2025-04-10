'use client'
import { Container } from "@/shared/ui/container/Container";
import { Crystal } from "@/shared/ui/crystal/Crystal";
import { useAppSelector } from "@/views/store";

export const GameStatusInfo = () => {
  const { statusGame } = useAppSelector(state => state.main.game)

  return (
    <Container>
      <div className={`relative w-full z-[-2] transition-all ${statusGame ? 'translate-y-[-10px]' : 'pointer-events-none translate-y-[-20px] opacity-0'}  flex items-start justify-center`}>
        <div className="z-[1] mt-[7vw]">
          <h3 className="font-normal fs-18">{statusGame === 'defeat' ? "В следующий раз повезет!": "Вы одержали победу!"}</h3>
          <Crystal value={statusGame === 'defeat' ? "+0" : "+1"} reverse />
        </div>
        <svg className="absolute w-full h-auto top-0" width="353" height="114" viewBox="0 0 353 114" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M351.26 75.9251C351.686 75.8108 352 75.4217 352 74.9592V74.9503V17C352 8.16344 344.837 1 336 1H17C8.16344 1 1 8.16344 1 17V74.9491C0.999275 75.0154 1.00514 75.0806 1.01705 75.1441C1.05 75.3204 1.12921 75.4804 1.2416 75.611C1.38586 75.7787 1.58479 75.898 1.81074 75.9413L172.937 112.316C175.127 112.782 177.391 112.782 179.581 112.318L351.189 75.9414C351.213 75.9368 351.236 75.9314 351.26 75.9251Z" fill="#242333" stroke="url(#paint0_linear_317_3140)" strokeWidth="2" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="paint0_linear_317_3140" x1="2" y1="57" x2="351" y2="57" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6F4AE7"/>
              <stop offset="1" stopColor="#A34AE7"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </Container>
  );
};
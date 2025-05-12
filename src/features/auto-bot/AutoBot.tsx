'use client'
import { Toggle } from "@/shared/ui/toggle/Toggle";
import { setAutoBotToggle, setAutoBuyEnergyToggle, useAppDispatch, useAppSelector } from "@/views/store";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const AutoBot = () => {
  const dispatch = useAppDispatch()
  const {autoBotToggle, autoBuyEnergyToggle, autoBotCount, autoBotTotalCount} = useAppSelector(state => state.main.autoBot)
  const [openBooster, setOpenBooster] = useState(false)
  const [filterIsOpen, setfilterIsOpen] = useState(false)

  const ref = useRef<HTMLDivElement>(null);

  const handleAutoBotToggle = (value: boolean) => {
    dispatch(setAutoBotToggle(value))
  } 

  const handleAutoBuyEnergyToggle = (value: boolean) => {
    dispatch(setAutoBuyEnergyToggle(value))
  } 

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpenBooster(false);
        setfilterIsOpen(false)
      }
    };

    if (typeof window !== "undefined"){
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div 
      ref={ref} 
      onClick={() => setOpenBooster(true)} 
      className={`absolute bg-[#5D3EC1] rounded-[16px_0px_0px_16px] w-full top-0 transition-all duration-300 border-[2px] translate-x-[100%] border-[#6F4AE7] ${openBooster ? 'translate-x-[27%]' : 'translate-x-[83%]'}`}
    >
      <div 
        className="w-[73%] flex flex-col"
      >
        <div className="flex items-center p-[2.5vw_0px]">
          <div className="h-full w-41px ml-[3vw] mr-[2.67vw] flex items-center justify-center">
            <Image src={'/images/component-icons/rocket.png'} alt='rocket' width={100} height={100} quality={100} className='h-47px min-w-41px'/>
          </div>
          <div className="">
            <h3 className="fs-13">Auto Bot</h3>
            <p className="w-140px fs-10 opacity-[0.5]">Автоподкидывания {autoBotCount}/{autoBotTotalCount}</p>
          </div>
          <div className="flex items-center gap-[1.33vw]">
            <Toggle value={autoBotToggle} setValue={handleAutoBotToggle} />
            <button onClick={() => setfilterIsOpen(!filterIsOpen)}>
              <svg className="w-24px h-23px" width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.1119 7.19434H21.3119" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.91199 7.19434H4.75199" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19.4719 15.4746H21.3119" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.91199 15.4746H12.112" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.43195 10.8742C10.4643 10.8742 12.112 9.22652 12.112 7.19416C12.112 5.16175 10.4643 3.51416 8.43195 3.51416C6.39954 3.51416 4.75195 5.16175 4.75195 7.19416C4.75195 9.22652 6.39954 10.8742 8.43195 10.8742Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.7919 19.1544C17.8243 19.1544 19.4719 17.5068 19.4719 15.4744C19.4719 13.4421 17.8243 11.7944 15.7919 11.7944C13.7596 11.7944 12.1119 13.4421 12.1119 15.4744C12.1119 17.5068 13.7596 19.1544 15.7919 19.1544Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        {filterIsOpen && (
          <div className="p-[1vw_9vw_3vw_4vw] flex justify-between items-center">
            <p className="fs-12 font-medium w-160px">Автопополнение если энергия ниже 75%</p>
            <Toggle value={autoBuyEnergyToggle} setValue={handleAutoBuyEnergyToggle} />
          </div>
        )}
      </div>
    </div>
  );
};

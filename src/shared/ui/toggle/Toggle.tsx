'use client'

interface IProps {
  value: boolean
  setValue: (value: boolean) => void
}

export const Toggle = ({value, setValue}: IProps) => {
  return (
    <button onClick={() => setValue(!value)} className={`w-34px h-21px flex items-center rounded-[68px] transition-all ${value ? 'bg-green' : 'bg-[#929292]'}`}>
      <div 
        style={{boxShadow: '0px 2px 0.7px 0px rgba(0, 0, 0, 0.06), 0px 2px 5.5px 0px rgba(0, 0, 0, 0.15)'}} 
        className={`bg-white rounded-full min-h-17px min-w-17px transition-all ${value ? 'translate-x-[90%]': 'translate-x-[10%]'}`}
      ></div>
    </button>
  );
};
'use client'
import { ModalImage } from '@/shared/ui/modal-image/ModalImage';
import { ModalContentWrapper } from '@/shared/ui/wrappers/modal-content-wrapper/ModalContentWrapper';

export const EnergyLimitModal = () => {
  const handleClick = () => {}

  return (
    <ModalContentWrapper
      title="Энергия кончилась"
      subTitle="У вас закончилось допустимое количество попыток."
      withCloseBtn
      imageComponent={<ModalImage photo='/images/modal/zip.png'/>}
      onClick={handleClick}
      textButton='Восполнить'
      countValueInButton={20}
    />
  );
};
import { ModalImage } from "@/shared/ui/modal-image/ModalImage";
import { ModalContentWrapper } from "@/shared/ui/wrappers/modal-content-wrapper/ModalContentWrapper";

interface IProps {
  closeModal: () => void
  title: string
  description: string
}

export const BuyModal = ({ closeModal, description, title }: IProps) => {
  const handleClick = () => {}

  return (
    <ModalContentWrapper
      closeModal={closeModal}
      title={title}
      subTitle={description}
      imageComponent={<ModalImage photo="/images/modal/zip.png" />}
      onClick={handleClick}
      textButton='Приобрести'
      countValueInButton={20}
      withCloseBtn
    />
  );
};
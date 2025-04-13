import { PropsWithChildren } from "react";

export const ListEmpty = ({children}: PropsWithChildren) => {
  return (
    <div className="w-full h-100px flex items-center justify-center">
      {children ? children : 'Список пуст'}
    </div>
  );
};